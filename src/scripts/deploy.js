const { ethers, web3 } = require("hardhat")
const { DAI} = require('../EVMAddresses/evmAddresses')

/**
 * Script to deploy contracts using hardhat
 */
async function main() {
  // Get needed accounts
  const accounts = await web3.eth.getAccounts()

  // Get contract factory and deploy.
  const NERC20 =  await ethers.getContractFactory("NERC20")
  const nERC20Contract = await NERC20.deploy('NFTYS DAI','NDAI',18,DAI)


  // Log deployed contract addresses to console
  console.log("NERC20 deployed to:", nERC20Contract.address)
}

// Call the main function to run
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

