//https://trufflesuite.com/docs/truffle/getting-started/interacting-with-your-contracts.html
//The link above is a good resource for everything related to truffle contracts.

const { web3, assert } = require("hardhat")
const { ERC20ABI, DAI, WETH, UniSwapV3RouterAddress } = require('../EVMAddresses/evmAddresses')
const { wrapToken } = require('../util/TokenUtil')
const { BigNumber } = require('bignumber.js')
//Creates a truffe contract from compiled artifacts.
const nERC20 = artifacts.require("NERC20")
const UniSwapSingleSwap = artifacts.require("UniSwapSingleSwap")

const DAIcontract = new web3.eth.Contract(ERC20ABI, DAI)
const WETHContract = new web3.eth.Contract(ERC20ABI, WETH)

// Vanilla Mocha test. Increased compatibility with tools that integrate Mocha.
describe("nERC20 contract", function () {
  let accounts
  let decimals = 18
  let nERC20Contract
  let unclaimedTokensDelta
  let blocksIncremented = 0
  let borrowInterestDelta
  let blocksIncrementedBorrowCheck = 0
  before(async function () {
    accounts = await web3.eth.getAccounts()
    //Checks to see if the first account has ETH
    let balance = await web3.eth.getBalance(accounts[0])
    assert.notEqual(balance, 0)
    //deploy contract
    nERC20Contract = await nERC20.new('NFTY DAI', 'NDAI', decimals, DAI)
    //deploy UniSwap contract
    uniSwapSingleSwap = await UniSwapSingleSwap.new(UniSwapV3RouterAddress)
  })

  it("Should deploy with the name", async function () {
    assert.equal(await nERC20Contract.name(), 'NFTY DAI')
  })

  it("Should deploy with the symbol", async function () {
    assert.equal(await nERC20Contract.symbol(), 'NDAI')
  })

  it("Should have 0 totalSupply", async function () {
    assert.equal(await nERC20Contract.totalSupply(), 0)
  })

  it(`Should have ${decimals} for decimals`, async function () {
    assert.equal(await nERC20Contract.decimals(), decimals)
  })

  it("Should transfer WMATIC in exchange for DAI", async function () {

    let wethAmountToTransfer = 30
    //Send ETH to WETH contract in return for WETH
    await wrapToken(wethAmountToTransfer, accounts[0], WETHContract)
    //Sends WETH to the deployed contract and
    //checks the results.

    //await sendWrapEth(wethAmountToTransfer,uniSwapSingleSwap.address, accounts[0])
    //let contractWethBal = await WETHContract.methods.balanceOf(uniSwapSingleSwap.address).call()
    //assert.equal(web3.utils.fromWei(contractWethBal,'ether'),wethAmountToTransfer)

    await WETHContract.methods.approve(uniSwapSingleSwap.address, web3.utils.toWei(wethAmountToTransfer.toString(), 'ether')).send({ from: accounts[0] })

    //The link at the top of this file describes how to override 
    //the from value when dealing with transactions using truffle contracts.
    //I am sending the wethAmountToTransfer to the contract to be swapped on
    //UniSwap V3 Pool for WBTC. The WBTC is then transferred back to the account
    //that sent the request.
    await uniSwapSingleSwap.swapExactInputSingle(web3.utils.toWei(wethAmountToTransfer.toString(), 'ether'), 0, WETH, DAI, 500, { from: accounts[0] })
    let DAICBal = await DAIcontract.methods.balanceOf(accounts[0]).call()
    assert.notEqual(DAICBal / 10 ** 8, 0)
  })

  it("Should transfer some DAI to accounts[1]", async () => {
    let tradeAmount = BigNumber(10).shiftedBy(decimals)
    await DAIcontract.methods.transfer(accounts[1], tradeAmount.toString()).send({ from: accounts[0] })
    let daiBal = await DAIcontract.methods.balanceOf(accounts[1]).call()
    assert.equal(tradeAmount.toString(), daiBal.toString())
  })

  it("Should have totalSupply of amount minted for accounts[0]", async function () {
    let mintAmount = BigNumber(10).shiftedBy(decimals).toString()
    assert.equal(await nERC20Contract.totalSupply(), 0)
    await DAIcontract.methods.approve(nERC20Contract.address, mintAmount).send({ from: accounts[0] })
    // Increments one block
    await nERC20Contract.supplyTokens(mintAmount)
    blocksIncremented++
    assert.equal(await nERC20Contract.totalSupply(), mintAmount)
    let DAICBal = await DAIcontract.methods.balanceOf(nERC20Contract.address).call()
    assert.equal(DAICBal, mintAmount)
    // Increments the block by using accrueInterest and gets delta
    // amount that we should be gaining interest by to validate later
    await nERC20Contract.accrueInterest()
    blocksIncremented++
    unclaimedTokensDelta = await nERC20Contract.viewAccruedTokensAmount()
  })

  it("Should supplyTokens value for accounts[1]", async () => {
    let mintAmount = BigNumber(10).shiftedBy(decimals).toString()
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
    await nERC20Contract.accrueInterest()
    blocksIncremented++
    let unclaimedTokensAfter = await nERC20Contract.viewAccruedTokensAmount()
    assert.approximately(BigNumber(unclaimedTokensDelta).multipliedBy(blocksIncremented).toNumber(), BigNumber(unclaimedTokensAfter).toNumber(), 5000)

  })

  it("Should deposit collateral and get DAI back", async function () {
    let depositAmount = BigNumber(1).shiftedBy(decimals)
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

  it("Should borrow some DAI", async () => {
    let borrowAmount = BigNumber(1).shiftedBy(decimals)
    let DAICAccountBalBefore = await DAIcontract.methods.balanceOf(accounts[2]).call()
    await nERC20Contract.borrowTokens(borrowAmount.toString(), 2, { from: accounts[2] })
    let DAICAccountBalAfter = await DAIcontract.methods.balanceOf(accounts[2]).call()
    assert.equal(DAICAccountBalAfter - DAICAccountBalBefore, borrowAmount)

    let borrowInterestBefore = await nERC20Contract.viewBorrowAccruedTokensAmount({ from: accounts[2] })
    assert.equal(borrowInterestBefore, 0)
    await nERC20Contract.accrueInterest()
    borrowInterestDelta = await nERC20Contract.viewBorrowAccruedTokensAmount({ from: accounts[2] })
    blocksIncrementedBorrowCheck++
    assert.approximately(borrowInterestDelta.toNumber(), BigNumber(45662100456).multipliedBy(blocksIncrementedBorrowCheck).toNumber(), 5000)
  })

  it("Should correctly identify borrow interest.", async function () {
    let borrowInterest = await nERC20Contract.viewBorrowAccruedTokensAmount({ from: accounts[2] })
    assert.approximately(borrowInterest.toNumber(), BigNumber(45662100456).multipliedBy(blocksIncrementedBorrowCheck).toNumber(), 5000)
  })

  it("Should repay portion of debt.", async function () {
    let daiBal = await DAIcontract.methods.balanceOf(accounts[2]).call()
    let repayAmount = BigNumber(25).shiftedBy(decimals - 2)
    await DAIcontract.methods.approve(nERC20Contract.address, repayAmount).send({ from: accounts[2] })
    // Checks to ensure borrow amount is equal to dai balance
    let borrowAmount = await nERC20Contract.getAmountBorrowed({ from: accounts[2] })
    assert.equal(borrowAmount.toString(), daiBal.toString())
    await nERC20Contract.repayBorrowAmount(repayAmount.toString(), { from: accounts[2] })
    // Checks to ensure borrow amount after is lower than borrow amount before
    let borrowAmountAfter = await nERC20Contract.getAmountBorrowed({ from: accounts[2] })
    assert.isBelow(BigNumber(borrowAmountAfter).shiftedBy(-1 * decimals).toNumber(), BigNumber(borrowAmount).shiftedBy(-1 * decimals).toNumber())
  })

  it("Should fail to repay all debt.", async function () {
    let repayAmount = await nERC20Contract.getRepayAmount({ from: accounts[2] })
    let daiBal = await DAIcontract.methods.balanceOf(accounts[2]).call()
    // Should hit the require statement in the contract and fail
    try {
      await DAIcontract.methods.approve(nERC20Contract.address, repayAmount).send({ from: accounts[2] })
      await nERC20Contract.repayFullBorrowAmount({ from: accounts[2] })
    } catch {
      // Checks to ensure no DIA was withdrawn due to failure
      let daiBalAfter = await DAIcontract.methods.balanceOf(accounts[2]).call()
      assert.equal(daiBalAfter.toString(), daiBal.toString())
    }
  })

  it("Should transfer WMATIC in exchange for DAI for account 2", async function () {

    let wethAmountToTransfer = 30
    //Send ETH to WETH contract in return for WETH
    await wrapToken(wethAmountToTransfer, accounts[2], WETHContract)
    blocksIncrementedBorrowCheck++
    //Sends WETH to the deployed contract and
    //checks the results.

    //await sendWrapEth(wethAmountToTransfer,uniSwapSingleSwap.address, accounts[0])
    //let contractWethBal = await WETHContract.methods.balanceOf(uniSwapSingleSwap.address).call()
    //assert.equal(web3.utils.fromWei(contractWethBal,'ether'),wethAmountToTransfer)

    await WETHContract.methods.approve(uniSwapSingleSwap.address, web3.utils.toWei(wethAmountToTransfer.toString(), 'ether')).send({ from: accounts[2] })
    blocksIncrementedBorrowCheck++

    //The link at the top of this file describes how to override 
    //the from value when dealing with transactions using truffle contracts.
    //I am sending the wethAmountToTransfer to the contract to be swapped on
    //UniSwap V3 Pool for WBTC. The WBTC is then transferred back to the account
    //that sent the request.
    await uniSwapSingleSwap.swapExactInputSingle(web3.utils.toWei(wethAmountToTransfer.toString(), 'ether'), 0, WETH, DAI, 500, { from: accounts[2] })
    blocksIncrementedBorrowCheck++
    let DAICBal = await DAIcontract.methods.balanceOf(accounts[2]).call()
    assert.notEqual(DAICBal / 10 ** 8, 0)
  })

  it("Should repay all debt.", async function () {
    // Gets total repay amount to set allowance and adds a .001 extra allowance
    // to be withdraw
    let repayAmount = await nERC20Contract.getRepayAmount({ from: accounts[2] })
    repayAmount = BigNumber(repayAmount).plus(BigNumber(1).shiftedBy(15))

    // Approves transfer and pays full borrow amount
    await DAIcontract.methods.approve(nERC20Contract.address, repayAmount).send({ from: accounts[2] })
    await nERC20Contract.repayFullBorrowAmount({ from: accounts[2] })

    // Ensures repay amount is now 0 after repaying debt
    repayAmount = await nERC20Contract.getRepayAmount({ from: accounts[2] })
    assert.equal(repayAmount.toNumber(), 0)
  })

})
