const { ethers, web3, network } = require("hardhat")
const { DAI } = config.EVMAddresses[network.name]
const { UniSwapV3RouterAddress } = config.EVMAddresses

/**
 * Script to deploy contracts using hardhat
 */
async function main() {
  // Get needed accounts
  const accounts = await web3.eth.getAccounts()

  // Get contract factory and deploy.
  const NERC20 = await ethers.getContractFactory("NERC20")
  const nERC20Contract = await NERC20.deploy('NFTYS DAI', 'NDAI', 18, DAI)


  const uniSwapSingleSwap = await ethers.getContractFactory("UniSwapSingleSwap")
  const uniSwapSingleSwapContract = await uniSwapSingleSwap.deploy(UniSwapV3RouterAddress)


  // Log deployed contract addresses to console
  console.log("NERC20 deployed to:", nERC20Contract.address)
  console.log("UniSwapSingleSwapContract deployed to:", uniSwapSingleSwapContract.address)
}

// Call the main function to run
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

