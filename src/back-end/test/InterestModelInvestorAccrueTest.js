//https://trufflesuite.com/docs/truffle/getting-started/interacting-with-your-contracts.html
//The link above is a good resource for everything related to truffle contracts.

const { web3, assert, network } = require("hardhat")
const { DAI, WTOKEN, AdvancedCollectibleAddress } = config.EVMAddresses[network.name]
const { ERC20ABI, UniSwapV3RouterAddress } = config.EVMAddresses
const { wrapToken } = require('../util/TokenUtil')
const { BigNumber } = require('bignumber.js')
//Creates a truffe contract from compiled artifacts.
const nERC20 = artifacts.require("NERC20")
const UniSwapSingleSwap = artifacts.require("UniSwapSingleSwap")
const AdvancedCollectible = artifacts.require("AdvancedCollectible")

const DAIcontract = new web3.eth.Contract(ERC20ABI, DAI)
const WETHContract = new web3.eth.Contract(ERC20ABI, WTOKEN)

const decimals = 18
let nERC20Contract
let accounts
let unclaimedTokensDelta
let blocksIncremented = 0
let borrowInterestDelta
let blocksIncrementedBorrowCheck = 0
let pairFee = 3000
let advancedCollectible
// Vanilla Mocha test. Increased compatibility with tools that integrate Mocha.
describe("nERC20 contract", function () {

  before(async function () {
    accounts = await web3.eth.getAccounts()
    //Checks to see if the first account has ETH
    let balance = await web3.eth.getBalance(accounts[0])
    assert.notEqual(balance, 0)
    //deploy contract
    nERC20Contract = await nERC20.new('NFTY DAI', 'NDAI', decimals, DAI)
    //deploy UniSwap contract
    uniSwapSingleSwap = await UniSwapSingleSwap.new(UniSwapV3RouterAddress)

    // get contractAdvancedCollectible
    advancedCollectible = await AdvancedCollectible.at(AdvancedCollectibleAddress)

  })

  it("Should deploy with the name NFTY DAI", async function () {
    assert.equal(await nERC20Contract.name(), 'NFTY DAI')
  })

  it("Should deploy with the symbol NDAI", async function () {
    assert.equal(await nERC20Contract.symbol(), 'NDAI')
  })

  it("Should have 0 totalSupply", async function () {
    assert.equal(await nERC20Contract.totalSupply(), 0)
  })

  it(`Should have ${decimals} for decimals`, async function () {
    assert.equal(await nERC20Contract.decimals(), decimals)
  })

  it("Should transfer WMATIC in exchange for DAI", async function () {

    let wethAmountToTransfer = 3
    //Send ETH to WTOKEN contract in return for WTOKEN
    await wrapToken(wethAmountToTransfer, accounts[0], WETHContract)
    await WETHContract.methods.approve(uniSwapSingleSwap.address, web3.utils.toWei(wethAmountToTransfer.toString(), 'ether')).send({ from: accounts[0] })

    //The link at the top of this file describes how to override 
    //the from value when dealing with transactions using truffle contracts.
    //I am sending the wethAmountToTransfer to the contract to be swapped on
    //UniSwap V3 Pool for DAI. The DAI is then transferred back to the account
    //that sent the request.
    await uniSwapSingleSwap.swapExactInputSingle(web3.utils.toWei(wethAmountToTransfer.toString(), 'ether'), 0, WTOKEN, DAI, pairFee, { from: accounts[0] })
    let DAICBal = await DAIcontract.methods.balanceOf(accounts[0]).call()
    assert.notEqual(DAICBal / 10 ** 8, 0)
  })

  it("Should transfer some DAI to accounts[1]", async () => {
    let tradeAmount = BigNumber(1).shiftedBy(decimals)
    await DAIcontract.methods.transfer(accounts[1], tradeAmount.toString()).send({ from: accounts[0] })
    let daiBal = await DAIcontract.methods.balanceOf(accounts[1]).call()
    assert.equal(tradeAmount.toString(), daiBal.toString())
  })

  it("Should have totalSupply of amount minted for accounts[0]", async function () {
    let mintAmount = BigNumber(1).shiftedBy(decimals).toString()
    assert.equal(await nERC20Contract.totalSupply(), 0)
    await DAIcontract.methods.approve(nERC20Contract.address, mintAmount).send({ from: accounts[0] })
    //Dont increment block count due to initial supply of tokens
    await nERC20Contract.supplyTokens(mintAmount)
    assert.equal(await nERC20Contract.totalSupply(), mintAmount)
    let DAICBal = await DAIcontract.methods.balanceOf(nERC20Contract.address).call()
    assert.equal(DAICBal, mintAmount)
    // Increments the block by using sendTransaction and gets delta
    // amount that we should be gaining interest by to validate later
    await web3.eth.sendTransaction({ from: accounts[1], to: accounts[2], value: BigNumber(1).shiftedBy(8).toString() })
    blocksIncremented++
    unclaimedTokensDelta = await nERC20Contract.viewAccruedTokensAmount()
  })

  it("Should view unclaimed tokens", async function () {
    // increments one block
    await web3.eth.sendTransaction({ from: accounts[1], to: accounts[2], value: BigNumber(1).shiftedBy(8).toString() })
    blocksIncremented++
    let unclaimedTokensAfter = await nERC20Contract.viewAccruedTokensAmount()
    assert.approximately(BigNumber(unclaimedTokensDelta).multipliedBy(blocksIncremented).toNumber(), BigNumber(unclaimedTokensAfter).toNumber(), 5000)
  })

  it("Should claim earned tokens for account 0", async function () {
    // put logic in to see if total supply increased by the amount
    // of claimed tokens
    let tokenAmountBefore = await nERC20Contract.balanceOf(accounts[0])
    let totalSupplyBefore = await nERC20Contract.totalSupply()
    // impelment block to account for currnet block that is going to
    // be set
    await nERC20Contract.claimAccruedTokens()
    let tokenAmountAfter = await nERC20Contract.balanceOf(accounts[0])
    let totalSupplyAfter = await nERC20Contract.totalSupply()
    let deltaTokenAccountAmount = tokenAmountAfter - tokenAmountBefore
    let deltaTotalSupply = totalSupplyAfter - totalSupplyBefore
    assert.equal(deltaTokenAccountAmount, deltaTotalSupply)
    let unclaimedTokensAccount0 = await nERC20Contract.viewAccruedTokensAmount()
    let unclaimedTokensAfter = await nERC20Contract.totalAmountInvestedInterest()
    assert.equal(unclaimedTokensAfter.toString(), '0')
    assert.equal(unclaimedTokensAccount0.toString(), '0')

  })

  it("Should supplyTokens value for accounts[1]", async () => {
    let mintAmount = BigNumber(1).shiftedBy(decimals).toString()
    await DAIcontract.methods.approve(nERC20Contract.address, mintAmount).send({ from: accounts[1] })
    let balanceBefore = await nERC20Contract.balanceOf(accounts[1])
    // Increments one block
    await nERC20Contract.supplyTokens(mintAmount, { from: accounts[1] })
    blocksIncremented++
    let balanceAfter = await nERC20Contract.balanceOf(accounts[1])
    assert.equal(mintAmount, balanceAfter.toString())
  })

  it("Should claim earned tokens for account 0 and left over should match account 1", async function () {
    let tokenAmountBefore = await nERC20Contract.balanceOf(accounts[0])
    let totalSupplyBefore = await nERC20Contract.totalSupply()
    await nERC20Contract.claimAccruedTokens()
    // await nERC20Contract.claimAccruedTokens({ from: accounts[1] })
    let tokenAmountAfter = await nERC20Contract.balanceOf(accounts[0])
    let totalSupplyAfter = await nERC20Contract.totalSupply()
    let deltaTokenAccountAmount = tokenAmountAfter - tokenAmountBefore
    let deltaTotalSupply = totalSupplyAfter - totalSupplyBefore
    assert.approximately(deltaTokenAccountAmount, deltaTotalSupply, 5000)
    let unclaimedTokensAccount1 = await nERC20Contract.viewAccruedTokensAmount({ from: accounts[1] })
    let unclaimedTokensAfter = await nERC20Contract.totalAmountInvestedInterest()
    assert.equal(unclaimedTokensAfter.toString(), unclaimedTokensAccount1.toString())

  })


})
