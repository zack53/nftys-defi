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
    //UniSwap V3 Pool for WBTC. The WBTC is then transferred back to the account
    //that sent the request.
    await uniSwapSingleSwap.swapExactInputSingle(web3.utils.toWei(wethAmountToTransfer.toString(), 'ether'), 0, WTOKEN, DAI, pairFee, { from: accounts[0] })
    let DAICBal = await DAIcontract.methods.balanceOf(accounts[0]).call()
    assert.notEqual(DAICBal / 10 ** 8, 0)
  })

  it("Should transfer some DAI to accounts[1]", async () => {
    let tradeAmount = BigNumber(1).shiftedBy(decimals - 1)
    await DAIcontract.methods.transfer(accounts[1], tradeAmount.toString()).send({ from: accounts[0] })
    let daiBal = await DAIcontract.methods.balanceOf(accounts[1]).call()
    assert.equal(tradeAmount.toString(), daiBal.toString())
  })

  it("Should have totalSupply of amount minted for accounts[0]", async function () {
    let mintAmount = BigNumber(1).shiftedBy(decimals).toString()
    assert.equal(await nERC20Contract.totalSupply(), 0)
    await DAIcontract.methods.approve(nERC20Contract.address, mintAmount).send({ from: accounts[0] })
    // Increments one block
    await nERC20Contract.supplyTokens(mintAmount)
    blocksIncremented++
    assert.equal(await nERC20Contract.totalSupply(), mintAmount)
    let DAICBal = await DAIcontract.methods.balanceOf(nERC20Contract.address).call()
    assert.equal(DAICBal, mintAmount)
    // Increments the block by using sendTransaction and gets delta
    // amount that we should be gaining interest by to validate later
    await web3.eth.sendTransaction({ from: accounts[1], to: accounts[2], value: BigNumber(1).shiftedBy(8).toString() })
    blocksIncremented++
    unclaimedTokensDelta = await nERC20Contract.viewAccruedTokensAmount()
  })

  it("Should supplyTokens value for accounts[1]", async () => {
    let mintAmount = BigNumber(1).shiftedBy(decimals - 1).toString()
    await DAIcontract.methods.approve(nERC20Contract.address, mintAmount).send({ from: accounts[1] })
    let balanceBefore = await nERC20Contract.balanceOf(accounts[1])
    // Increments one block
    await nERC20Contract.supplyTokens(mintAmount, { from: accounts[1] })
    blocksIncremented++
    let balanceAfter = await nERC20Contract.balanceOf(accounts[1])
    assert.equal(mintAmount, balanceAfter.toString())
  })

  it("Should view unclaimed tokens", async function () {
    // increments one block
    await web3.eth.sendTransaction({ from: accounts[1], to: accounts[2], value: BigNumber(1).shiftedBy(8).toString() })
    blocksIncremented++
    let unclaimedTokensAfter = await nERC20Contract.viewAccruedTokensAmount()
    assert.approximately(BigNumber(unclaimedTokensDelta).multipliedBy(blocksIncremented).toNumber(), BigNumber(unclaimedTokensAfter).toNumber(), 5000)

  })

  it("Should deposit collateral and get DAI back", async function () {
    let depositAmount = BigNumber(1).shiftedBy(decimals - 1)
    let DAICBal = await DAIcontract.methods.balanceOf(nERC20Contract.address).call()
    let DAICAccountBalBefore = await DAIcontract.methods.balanceOf(accounts[0]).call()
    assert.equal(await nERC20Contract.totalSupply(), DAICBal)

    await nERC20Contract.withdrawTokens(depositAmount.toString())
    assert.equal((await nERC20Contract.totalSupply()).toString(), (BigNumber(DAICBal).minus(depositAmount)).toString())

    let DAICAccountBal = await DAIcontract.methods.balanceOf(accounts[0]).call()
    assert.equal(depositAmount, (BigNumber(DAICAccountBal).minus(BigNumber(DAICAccountBalBefore))).toString())
  })

  it("Should claim earned tokens for account", async function () {
    // put logic in to see if total supply increased by the amount
    // of claimed tokens
    let tokenAmountBefore = await nERC20Contract.balanceOf(accounts[0])
    let totalSupplyBefore = await nERC20Contract.totalSupply()
    await nERC20Contract.claimAccruedTokens()
    let tokenAmountAfter = await nERC20Contract.balanceOf(accounts[0])
    let totalSupplyAfter = await nERC20Contract.totalSupply()
    let deltaTokenAccountAmount = tokenAmountAfter - tokenAmountBefore
    let deltaTotalSupply = totalSupplyAfter - totalSupplyBefore
    assert.equal(deltaTokenAccountAmount, deltaTotalSupply)

  })

  it("Should have doggie amount for account.", async () => {

    let dogCount = await advancedCollectible.balanceOf(accounts[0])
    assert.isAbove(dogCount.toNumber(), 0)
  })

  it("Should borrow some DAI", async () => {
    let borrowAmount = BigNumber(1).shiftedBy(decimals)
    let DAICAccountBalBefore = await DAIcontract.methods.balanceOf(accounts[2]).call()
    await advancedCollectible.approve(nERC20Contract.address, 2, { from: accounts[2] })
    await nERC20Contract.borrowTokens(accounts[2], borrowAmount.toString(), borrowAmount.multipliedBy(4).toString(), advancedCollectible.address, 2)
    let DAICAccountBalAfter = await DAIcontract.methods.balanceOf(accounts[2]).call()
    assert.equal(DAICAccountBalAfter - DAICAccountBalBefore, borrowAmount)

    let borrowInterestBefore = await nERC20Contract.viewBorrowAccruedTokensAmount(accounts[2], { from: accounts[2] })
    assert.equal(borrowInterestBefore, 0)
    await web3.eth.sendTransaction({ from: accounts[1], to: accounts[2], value: BigNumber(1).shiftedBy(8).toString() })
    borrowInterestDelta = await nERC20Contract.viewBorrowAccruedTokensAmount(accounts[2], { from: accounts[2] })
    blocksIncrementedBorrowCheck++
    assert.approximately(borrowInterestDelta.toNumber(), BigNumber(45662100456).multipliedBy(blocksIncrementedBorrowCheck).toNumber(), 5000)

  })


  it("Should fail to borrow DAI due to not owner making call", async () => {
    let borrowAmount = BigNumber(1).shiftedBy(decimals)
    await advancedCollectible.approve(nERC20Contract.address, 1, { from: accounts[2] })
    let dogCounteBefore = await advancedCollectible.balanceOf(accounts[2])
    let dogCounteAfter
    blocksIncrementedBorrowCheck += 1
    try {
      await nERC20Contract.borrowTokens(accounts[2], borrowAmount.toString(), borrowAmount.multipliedBy(4).toString(), advancedCollectible.address, 1, { from: accounts[2] })
    } catch (error) {
      blocksIncrementedBorrowCheck += 1
      dogCounteAfter = await advancedCollectible.balanceOf(accounts[2])
    }
    assert.equal(dogCounteBefore.toNumber(), dogCounteAfter.toNumber())
  })

  it("Should fail to borrow DAI due to outstanding loan amount", async () => {
    let borrowAmount = BigNumber(1).shiftedBy(decimals)
    await advancedCollectible.approve(nERC20Contract.address, 1, { from: accounts[2] })
    let dogCounteBefore = await advancedCollectible.balanceOf(accounts[2])
    let dogCounteAfter
    blocksIncrementedBorrowCheck += 1
    try {
      await nERC20Contract.borrowTokens(accounts[2], borrowAmount.toString(), borrowAmount.multipliedBy(4).toString(), advancedCollectible.address, 1)
    } catch (error) {
      blocksIncrementedBorrowCheck += 1
      dogCounteAfter = await advancedCollectible.balanceOf(accounts[2])
    }
    assert.equal(dogCounteBefore.toNumber(), dogCounteAfter.toNumber())
  })

  it("Should have doggie amount on smart contract.", async () => {

    let dogCount = await advancedCollectible.balanceOf(nERC20Contract.address)

    assert.isAbove(dogCount.toNumber(), 0)
  })

  it("Should correctly identify borrow interest.", async function () {
    let borrowInterest = await nERC20Contract.viewBorrowAccruedTokensAmount(accounts[2], { from: accounts[2] })

    assert.approximately(borrowInterest.toNumber(), BigNumber(45662100456).multipliedBy(blocksIncrementedBorrowCheck).toNumber(), 5000)
  })

  it("Should repay portion of debt.", async function () {
    let daiBal = await DAIcontract.methods.balanceOf(accounts[2]).call()
    let repayAmount = BigNumber(25).shiftedBy(decimals - 2)
    await DAIcontract.methods.approve(nERC20Contract.address, repayAmount).send({ from: accounts[2] })
    // Checks to ensure borrow amount is equal to dai balance
    let borrowAmount = await nERC20Contract.getAmountBorrowed(accounts[2], { from: accounts[2] })

    await nERC20Contract.repayBorrowAmount(accounts[2], repayAmount.toString(), { from: accounts[2] })
    // Checks to ensure borrow amount after is lower than borrow amount before
    let borrowAmountAfter = await nERC20Contract.getAmountBorrowed(accounts[2], { from: accounts[2] })
    assert.isBelow(BigNumber(borrowAmountAfter).shiftedBy(-1 * decimals).toNumber(), BigNumber(borrowAmount).shiftedBy(-1 * decimals).toNumber())
  })

  it("Should fail to repay all debt.", async function () {
    let repayAmount = await nERC20Contract.getBorrowedRepayAmount(accounts[2], { from: accounts[2] })
    let daiBal = await DAIcontract.methods.balanceOf(accounts[2]).call()
    // Should hit the require statement in the contract and fail
    try {
      await DAIcontract.methods.approve(nERC20Contract.address, repayAmount).send({ from: accounts[2] })
      await nERC20Contract.repayFullBorrowAmount(accounts[2], { from: accounts[2] })
    } catch {
      // Checks to ensure no DIA was withdrawn due to failure
      let daiBalAfter = await DAIcontract.methods.balanceOf(accounts[2]).call()
      assert.equal(daiBalAfter.toString(), daiBal.toString())
    }
  })

  it("Should transfer WMATIC in exchange for DAI for account 2", async function () {

    let wethAmountToTransfer = 10
    //Send ETH to WTOKEN contract in return for WTOKEN
    await wrapToken(wethAmountToTransfer, accounts[2], WETHContract)
    blocksIncrementedBorrowCheck++
    await WETHContract.methods.approve(uniSwapSingleSwap.address, web3.utils.toWei(wethAmountToTransfer.toString(), 'ether')).send({ from: accounts[2] })
    blocksIncrementedBorrowCheck++

    await uniSwapSingleSwap.swapExactInputSingle(web3.utils.toWei(wethAmountToTransfer.toString(), 'ether'), 0, WTOKEN, DAI, pairFee, { from: accounts[2] })
    blocksIncrementedBorrowCheck++

    let DAICBal = await DAIcontract.methods.balanceOf(accounts[2]).call()
    assert.notEqual(DAICBal / 10 ** 8, 0)
  })


  it("Should have 1 dogs.", async () => {
    let dogCount = await advancedCollectible.balanceOf(accounts[2])
    assert.equal(dogCount.toNumber(), 1)
  })

  it("Should repay all debt.", async function () {
    // Gets total repay amount to set allowance and adds a .001 extra allowance
    // to be withdraw
    let repayAmount = await nERC20Contract.getBorrowedRepayAmount(accounts[2], { from: accounts[2] })
    repayAmount = BigNumber(repayAmount).plus(BigNumber(1).shiftedBy(15))

    // Approves transfer and pays full borrow amount
    await DAIcontract.methods.approve(nERC20Contract.address, repayAmount).send({ from: accounts[2] })
    await nERC20Contract.repayFullBorrowAmount(accounts[2], { from: accounts[2] })

    // Ensures repay amount is now 0 after repaying debt
    repayAmount = await nERC20Contract.getBorrowedRepayAmount(accounts[2], { from: accounts[2] })
    assert.equal(repayAmount.toNumber(), 0)
    assert.equal((await nERC20Contract.totalAmountBorrowed()).toString(), '0')
  })

  it("Should have doggie amount back on account.", async () => {
    let dogCount = await advancedCollectible.balanceOf(accounts[2])
    assert.isAbove(dogCount.toNumber(), 1)
  })

  it("Should transfer any DAI on accounts[2] to accounts[1]", async () => {
    let daiBal = await DAIcontract.methods.balanceOf(accounts[2]).call()
    await DAIcontract.methods.transfer(accounts[1], daiBal.toString()).send({ from: accounts[2] })
    let daiBalAfter = await DAIcontract.methods.balanceOf(accounts[2]).call()
    assert.equal(daiBalAfter.toString(), '0')
  })

  it("Should borrow some DAI", async () => {
    let borrowAmount = BigNumber(1).shiftedBy(decimals)
    let DAICAccountBalBefore = await DAIcontract.methods.balanceOf(accounts[2]).call()
    await advancedCollectible.approve(nERC20Contract.address, 2, { from: accounts[2] })
    await nERC20Contract.borrowTokens(accounts[2], borrowAmount.toString(), borrowAmount.multipliedBy(4).toString(), advancedCollectible.address, 2)
    let DAICAccountBalAfter = await DAIcontract.methods.balanceOf(accounts[2]).call()
    assert.equal(DAICAccountBalAfter - DAICAccountBalBefore, borrowAmount)

  })

  it("Should have doggie amount on smart contract.", async () => {

    let dogCount = await advancedCollectible.balanceOf(nERC20Contract.address)

    assert.isAbove(dogCount.toNumber(), 0)
  })

  it("Should loop sending transactions to increment block numbers until NFT can be liquidated", async () => {
    // Set current borrow interest rate really high to force liquidation
    await nERC20Contract.setCurrentBorrowInterestRatePerBlock(255)
    await DAIcontract.methods.approve(nERC20Contract.address, BigNumber(2).shiftedBy(decimals).toString()).send({ from: accounts[2] })
    await increaseInterest()
    // Reduces liquidation requirement
    await nERC20Contract.setMinimumDividor(10)
    // Calls liquidation on an account
    await nERC20Contract.forceLiquidateIdleNFT(accounts[2])
  })

  it("Account 1 should not be able to purchase account because didn't go through owner", async () => {
    let nftPurchasePrice = await nERC20Contract.nftPurchasePrice(advancedCollectible.address, 2)
    assert.equal(nftPurchasePrice.toString(), '400000000000000000')
    await DAIcontract.methods.approve(nERC20Contract.address, BigNumber(2).shiftedBy(decimals).toString()).send({ from: accounts[1] })
    try {
      await nERC20Contract.sellLiquidNFT(accounts[1], nftPurchasePrice, advancedCollectible.address, 2, { from: accounts[1] })
    } catch (error) {
      let accountDoggieAmount = await advancedCollectible.balanceOf(accounts[1])
      assert.equal(accountDoggieAmount.toString(), '0')
    }
  })

  it("Should shutdown contract actions.", async () => {
    await nERC20Contract.shutdownContract()
  })

  it("Account 1 should fail to purchase due to contract being shutdown", async () => {
    let nftPurchasePrice = await nERC20Contract.nftPurchasePrice(advancedCollectible.address, 2)
    assert.equal(nftPurchasePrice.toString(), '400000000000000000')
    let daiBal = await DAIcontract.methods.balanceOf(accounts[1]).call()
    await DAIcontract.methods.approve(nERC20Contract.address, BigNumber(4).shiftedBy(decimals + 1).toString()).send({ from: accounts[1] })
    try {
      await nERC20Contract.sellLiquidNFT(accounts[1], nftPurchasePrice, advancedCollectible.address, 2)
    } catch (error) {
      let accountDoggieAmount = await advancedCollectible.balanceOf(accounts[1])
      assert.equal(accountDoggieAmount.toString(), '0')
    }
  })

  it("Should reopen contract actions.", async () => {
    await nERC20Contract.startContract()
  })

  it("Account 1 should be able to purchase the NFT that has been liquidated", async () => {
    let nftPurchasePrice = await nERC20Contract.nftPurchasePrice(advancedCollectible.address, 2)
    assert.equal(nftPurchasePrice.toString(), '400000000000000000')
    await DAIcontract.methods.approve(nERC20Contract.address, BigNumber(4).shiftedBy(decimals + 1).toString()).send({ from: accounts[1] })
    await nERC20Contract.sellLiquidNFT(accounts[1], nftPurchasePrice, advancedCollectible.address, 2)
    let accountDoggieAmount = await advancedCollectible.balanceOf(accounts[1])
    assert.equal(accountDoggieAmount.toString(), '1')
  })

})

let increaseInterest = async () => {
  let liquidateAmount = BigNumber(1).shiftedBy(decimals).multipliedBy(2)
  let repaymentAmount = BigNumber(0)
  let counter = 0
  while (liquidateAmount.comparedTo(repaymentAmount)) {
    repaymentAmount = await nERC20Contract.getBorrowedRepayAmount(accounts[2])
    await web3.eth.sendTransaction({ from: accounts[1], to: accounts[2], value: BigNumber(1).shiftedBy(8).toString() })
    await web3.eth.sendTransaction({ from: accounts[1], to: accounts[2], value: BigNumber(1).shiftedBy(8).toString() })
    await web3.eth.sendTransaction({ from: accounts[1], to: accounts[2], value: BigNumber(1).shiftedBy(8).toString() })
    await web3.eth.sendTransaction({ from: accounts[1], to: accounts[2], value: BigNumber(1).shiftedBy(8).toString() })
    await web3.eth.sendTransaction({ from: accounts[1], to: accounts[2], value: BigNumber(1).shiftedBy(8).toString() })
    await web3.eth.sendTransaction({ from: accounts[1], to: accounts[2], value: BigNumber(1).shiftedBy(8).toString() })
    await web3.eth.sendTransaction({ from: accounts[1], to: accounts[2], value: BigNumber(1).shiftedBy(8).toString() })
    await web3.eth.sendTransaction({ from: accounts[1], to: accounts[2], value: BigNumber(1).shiftedBy(8).toString() })
    await web3.eth.sendTransaction({ from: accounts[1], to: accounts[2], value: BigNumber(1).shiftedBy(8).toString() })
    await web3.eth.sendTransaction({ from: accounts[1], to: accounts[2], value: BigNumber(1).shiftedBy(8).toString() })
    await nERC20Contract.repayBorrowAmount(accounts[2], 1, { from: accounts[2] })
    counter += 1
    if (counter % 100 == 0) {
      break
    }
  }
}
