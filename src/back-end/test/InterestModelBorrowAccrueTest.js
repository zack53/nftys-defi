//https://trufflesuite.com/docs/truffle/getting-started/interacting-with-your-contracts.html
//The link above is a good resource for everything related to truffle contracts.

const { web3, assert, network } = require("hardhat")
const { DAI, WTOKEN, AdvancedCollectibleAddress } = config.EVMAddresses[network.name]
const { ERC20ABI, UniSwapV3RouterAddress } = config.EVMAddresses
const { wrapToken } = require('../util/TokenUtil')
const { BigNumber } = require('bignumber.js')
BigNumber.config({ ROUNDING_MODE: BigNumber.ROUND_DOWN })
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
let currentBorrowInterest = 12
const divideInterestPerBlock = 100 * 2628000
let deltaEstimate
let accountTwoStartingBlock

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
    await wrapToken(wethAmountToTransfer, accounts[1], WETHContract)
    await WETHContract.methods.approve(uniSwapSingleSwap.address, web3.utils.toWei(wethAmountToTransfer.toString(), 'ether')).send({ from: accounts[1] })
    await uniSwapSingleSwap.swapExactInputSingle(web3.utils.toWei(wethAmountToTransfer.toString(), 'ether'), 0, WTOKEN, DAI, pairFee, { from: accounts[1] })
    let DAICBal = await DAIcontract.methods.balanceOf(accounts[1]).call()
    assert.notEqual(DAICBal / 10 ** 8, 0)
  })


  it("Should supplyTokens value for accounts[1]", async () => {
    let mintAmount = BigNumber(2).shiftedBy(decimals).toString()
    await DAIcontract.methods.approve(nERC20Contract.address, mintAmount).send({ from: accounts[1] })
    // Increments one block
    await nERC20Contract.supplyTokens(mintAmount, { from: accounts[1] })
    blocksIncremented++
    let balanceAfter = await nERC20Contract.balanceOf(accounts[1])
    assert.equal(mintAmount, balanceAfter.toString())
  })

  it("Should borrow from accounts[0]", async () => {
    let borrowAmount = BigNumber(1).shiftedBy(decimals)
    let DAICAccountBalBefore = await DAIcontract.methods.balanceOf(accounts[0]).call()
    await advancedCollectible.approve(nERC20Contract.address, 0, { from: accounts[0] })
    await nERC20Contract.borrowTokens(accounts[0], borrowAmount.toString(), borrowAmount.multipliedBy(4).toString(), advancedCollectible.address, 0)
    await web3.eth.sendTransaction({ from: accounts[1], to: accounts[2], value: BigNumber(1).shiftedBy(8).toString() })
    blocksIncrementedBorrowCheck++
    borrowInterestDelta = await nERC20Contract.totalBorrowedInterest();
    // '45662100456' = borrowAmount*blocksIncrementedBorrowCheck*currentBorrowInterest/divideInterestPerBlock
    deltaEstimate = BigNumber(borrowAmount * blocksIncrementedBorrowCheck * currentBorrowInterest / divideInterestPerBlock).toFixed(0)
    assert.equal(borrowInterestDelta.toString(), deltaEstimate)
    let DAICAccountBalAfter = await DAIcontract.methods.balanceOf(accounts[0]).call()
    assert.equal(DAICAccountBalAfter - DAICAccountBalBefore, borrowAmount)
  })

  it("Should borrow from accounts[2]", async () => {
    let borrowAmount = BigNumber(1).shiftedBy(decimals)
    let DAICAccountBalBefore = await DAIcontract.methods.balanceOf(accounts[2]).call()
    await advancedCollectible.approve(nERC20Contract.address, 2, { from: accounts[2] })
    blocksIncrementedBorrowCheck++
    await nERC20Contract.borrowTokens(accounts[2], borrowAmount.toString(), borrowAmount.multipliedBy(4).toString(), advancedCollectible.address, 2)
    blocksIncrementedBorrowCheck++
    accountTwoStartingBlock = blocksIncrementedBorrowCheck
    let DAICAccountBalAfter = await DAIcontract.methods.balanceOf(accounts[2]).call()
    assert.equal(DAICAccountBalAfter - DAICAccountBalBefore, borrowAmount)
  })

  it("Should repay some on accounts[0] and have accurate interest for both accounts", async () => {
    let totalRepaymentAmount = await nERC20Contract.getBorrowedRepayAmount(accounts[0])
    let repaymentAmount = BigNumber(5).shiftedBy(decimals - 1).toString()
    await DAIcontract.methods.approve(nERC20Contract.address, repaymentAmount).send({ from: accounts[0] })
    blocksIncrementedBorrowCheck++
    await nERC20Contract.repayBorrowAmount(accounts[0], repaymentAmount)
    blocksIncrementedBorrowCheck++
    let account2DeltaBlock = blocksIncrementedBorrowCheck - accountTwoStartingBlock
    let totalRepaymentAmountAfter = await nERC20Contract.getBorrowedRepayAmount(accounts[0])
    let currentBorrrowInterest = BigNumber(await nERC20Contract.totalBorrowedInterest())
    assert.approximately(currentBorrrowInterest.dividedBy(account2DeltaBlock).toNumber(), parseInt(deltaEstimate), 10)
    assert.approximately(BigNumber(totalRepaymentAmountAfter).minus(BigNumber(totalRepaymentAmount).plus(deltaEstimate).minus(repaymentAmount)).toNumber(), parseInt(deltaEstimate), 10)

  })

  it("Should force liquidate accounts[0] using repayment liquidation", async () => {
    await nERC20Contract.setMinimumDividor(10)
    await DAIcontract.methods.approve(nERC20Contract.address, BigNumber(5).shiftedBy(decimals - 2).toString()).send({ from: accounts[0] })
    await nERC20Contract.repayBorrowAmount(accounts[0], BigNumber(5).shiftedBy(decimals - 2).toString())
    let nftPurchasePrice = await nERC20Contract.nftPurchasePrice(advancedCollectible.address, 0)
    assert.equal(nftPurchasePrice.toString(), '400000000000000000')
    await DAIcontract.methods.approve(nERC20Contract.address, BigNumber(4).shiftedBy(decimals + 1).toString()).send({ from: accounts[1] })
    await nERC20Contract.sellLiquidNFT(accounts[1], nftPurchasePrice, advancedCollectible.address, 0)
    let accountDoggieAmount = await advancedCollectible.balanceOf(accounts[1])
    assert.equal(accountDoggieAmount.toString(), '1')
  })

})
