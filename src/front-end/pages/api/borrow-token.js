
import HDWalletProvider from '@truffle/hdwallet-provider'
import Web3 from 'web3'
import { EVMAddresses } from '../../next.config'
import { BigNumber } from 'bignumber.js'
const nERC20ABI = EVMAddresses.NERC20ABI
const advancedCollectibleABI = EVMAddresses.AdvancedCollectibleABI
const web3 = new Web3(new HDWalletProvider(process.env.PRIVATE_KEY_1, process.env.MUMBAI_URL))
const nERC20Contract = new web3.eth.Contract(nERC20ABI, EVMAddresses.NFTLoanAddress)
const advancedCollectible = new web3.eth.Contract(advancedCollectibleABI, EVMAddresses.AdvancedCollectibleAddress)

const breedValue = {
    0: 4,
    1: 10,
    2: 8
}

export default async function handler(req, res) {
    const { borrower, amount, nftAddress, tokenId } = req.body
    if (borrower == undefined || amount == undefined || nftAddress == undefined || tokenId == undefined) {
        res.status('400').json({ message: "Required body parameters are not present!" })
    } else {
        let breed = await advancedCollectible.methods.tokenIdToBreed(tokenId).call()
        let collateralValue = breedValue[breed]
        if (collateralValue / 4 >= amount) {
            try {
                await nERC20Contract.methods.borrowTokens(borrower, BigNumber(amount).shiftedBy(18).toString(), collateralValue, nftAddress, tokenId).send({ from: process.env.PUBLIC_KEY_1 })
                res.json({ message: "Borrow amount has been accepted." })
            } catch (error) {
                res.status('400').json(error)
                console.log(error)
            }
        } else {
            res.status('400').json({ message: "NFT Collateral is not high enough for loan." })
        }
    }
}
