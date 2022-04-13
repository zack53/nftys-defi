//https://trufflesuite.com/docs/truffle/getting-started/interacting-with-your-contracts.html
//The link above is a good resource for everything related to truffle contracts.

const { web3, assert } = require("hardhat")
const { ERC20ABI, DAI, WETH, UniSwapV3RouterAddress } = require('../EVMAddresses/evmAddresses')
const { wrapToken } = require('../util/TokenUtil')
const { BigNumber } = require('bignumber.js')
//Creates a truffe contract from compiled artifacts.
const CreateNFT = artifacts.require("CreateNFT")

// Vanilla Mocha test. Increased compatibility with tools that integrate Mocha.
describe("CreateNFT contract", function () {
    let accounts
    let baseURI = 'test'
    before(async function () {
        accounts = await web3.eth.getAccounts()
        //Checks to see if the first account has ETH
        let balance = await web3.eth.getBalance(accounts[0])
        assert.notEqual(balance, 0)
        //deploy contract
        createNFTContract = await CreateNFT.new('NFTY Loans Platform', 'NFTY', baseURI)
    })

    it("Should deploy with the name NFTY Loans Platform", async function () {
        assert.equal(await createNFTContract.name(), 'NFTY Loans Platform')
    })

    it("Should deploy with the symbol NFTY", async function () {
        assert.equal(await createNFTContract.symbol(), 'NFTY')
    })

    it("Should have base URI", async function () {
        assert.equal(await createNFTContract.getBaseURI(), baseURI)
    })

    it("Should mint NFT", async function () {
        await createNFTContract.mint('Zack')
        let event = await createNFTContract.getPastEvents('MintNFT', { fromBlock: BigNumber(await web3.eth.getBlockNumber()).minus(1).toString(), toBlock: 'latest' })
        let id = 0
        let amountCreated = await createNFTContract.CryptNFTsAmountCreated()
        for (let i = 0; i < event.length; i++) {
            if (event[i].returnValues.minter == accounts[0]) {
                id = event[i].returnValues.id
                break
            }
        }
        assert.equal(id.toString(), amountCreated.toString())
    })

    // it("Should mint NFT", async function () {
    //     assert.equal(await createNFTContract.mint('Zack'), baseURI)
    // })
})