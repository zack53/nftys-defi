//https://trufflesuite.com/docs/truffle/getting-started/interacting-with-your-contracts.html
//The link above is a good resource for everything related to truffle contracts.

const { web3, assert } = require("hardhat")
const { ERC20ABI, DAI, WETH, UniSwapV3RouterAddress} = require('../EVMAddresses/evmAddresses')
const { wrapToken } = require('../util/TokenUtil')
const { BigNumber } = require('bignumber.js')
//Creates a truffe contract from compiled artifacts.
const nERC20 = artifacts.require("nERC20")
const UniSwapSingleSwap = artifacts.require("UniSwapSingleSwap")

const DAIcontract = new web3.eth.Contract(ERC20ABI, DAI)
const WETHContract = new web3.eth.Contract(ERC20ABI, WETH)

// Vanilla Mocha test. Increased compatibility with tools that integrate Mocha.
describe( "nERC20 contract", function () {
  let accounts
  let decimals = 18
  let nERC20Contract
  before(async function () {
    accounts = await web3.eth.getAccounts()
    //Checks to see if the first account has ETH
    let balance = await web3.eth.getBalance(accounts[0])
    assert.notEqual(balance, 0)
    //deploy contract
    nERC20Contract = await nERC20.new('NFTY DAI','NDAI',decimals,DAI)
    //deploy UniSwap contract
    uniSwapSingleSwap = await UniSwapSingleSwap.new(UniSwapV3RouterAddress)
  })

  it("Should deploy with the name", async function () {
    assert.equal(await nERC20Contract.name(),'NFTY DAI')
  })

  it("Should deploy with the symbol", async function () {
    assert.equal(await nERC20Contract.symbol(),'NDAI')
  })

  it("Should have 0 totalSupply", async function () {
    assert.equal(await nERC20Contract.totalSupply(),0)
  })

  it(`Should have ${decimals} for decimals`, async function () {
    assert.equal(await nERC20Contract.decimals(),decimals)
  })

  it("Should transfer WMATIC in exchange for DAI", async function (){

    let wethAmountToTransfer = 15
    //Send ETH to WETH contract in return for WETH
    await wrapToken(wethAmountToTransfer, accounts[0], WETHContract)
    //Sends WETH to the deployed contract and
    //checks the results.

    //await sendWrapEth(wethAmountToTransfer,uniSwapSingleSwap.address, accounts[0])
    //let contractWethBal = await WETHContract.methods.balanceOf(uniSwapSingleSwap.address).call()
    //assert.equal(web3.utils.fromWei(contractWethBal,'ether'),wethAmountToTransfer)

    await WETHContract.methods.approve(uniSwapSingleSwap.address, web3.utils.toWei(wethAmountToTransfer.toString(),'ether')).send({from: accounts[0]})

    //The link at the top of this file describes how to override 
    //the from value when dealing with transactions using truffle contracts.
    //I am sending the wethAmountToTransfer to the contract to be swapped on
    //UniSwap V3 Pool for WBTC. The WBTC is then transferred back to the account
    //that sent the request.
    await uniSwapSingleSwap.swapExactInputSingle(web3.utils.toWei(wethAmountToTransfer.toString(),'ether'),0,WETH,DAI,500, {from: accounts[0]})
    let DAICBal = await DAIcontract.methods.balanceOf(accounts[0]).call()
    assert.notEqual(DAICBal/10**8, 0)
  })

  it("Should have totalSupply of amount minted", async function () {
    let mintAmount = BigNumber(10).shiftedBy(decimals).toString()
    assert.equal(await  nERC20Contract.totalSupply(),0)
    await DAIcontract.methods.approve(nERC20Contract.address, mintAmount).send({from:accounts[0]})
    await nERC20Contract.mint(mintAmount)
    assert.equal(await nERC20Contract.totalSupply(),mintAmount)
    let DAICBal = await DAIcontract.methods.balanceOf(nERC20Contract.address).call()
    assert.equal(DAICBal,mintAmount)
  })

  it("Should deposit collateral and get DAI back", async function () {
    let depositAmount = BigNumber(1).shiftedBy(decimals).toString()
    let DAICBal = await DAIcontract.methods.balanceOf(nERC20Contract.address).call()
    let DAICAccountBalBefore = await DAIcontract.methods.balanceOf(accounts[0]).call()
    assert.equal(await  nERC20Contract.totalSupply(),DAICBal)
    
    await nERC20Contract.depositCollateral(depositAmount)
    let totalSupply = BigNumber(await nERC20Contract.totalSupply())
    
    let DAICAccountBal = await DAIcontract.methods.balanceOf(accounts[0]).call()
    assert.equal(depositAmount,(BigNumber(DAICAccountBal).minus(BigNumber(DAICAccountBalBefore))).toString())
  })

})
