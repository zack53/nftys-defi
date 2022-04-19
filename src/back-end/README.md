# NFT Loan Platform Smart Contracts
The NFT Loan platform ERC20 tokens to be invested for earning interest and borrow the ERC20 tokens by providing an NFT as collateral. The current limitation at the moment is that only one loan can be provided per account. The one loan per account is an intentional limitation. The idea would be that one contract would need to be deployed per ERC20 token that would be supported. 

The NFT collateral provided is currently hard coded to only accept one NFT. Future improvements would be to implement the OpenSea API in a server side back-end call to get the last NFT sell price. The loan amount has to be lower or equal to 25% of the NFT collateral. The position will be liquidated once the NFT loan amount has gained an interest that is half of the collateral last sold value. There is a tool in place that will allow to force liquidate a position if it is over the threshold. To implement this force liquidation, you would need to parse through the logs on chain to find borrowers. You can check borrowed amounts via calls to the smart contract. The loan amount ca be force liquidated only when the loan amount has reached 2x the initial value.


## Future plans
Implement OpenSea API for latest sell price to allow for any NFT collateral to be provided. Create a factory contract that can deploy and keep track of the NERC20 smart contracts. The factory contract should contain a mapping of ERC20 token to the respective NERC20 counterpart.

## Deployed Contracts
The AdvancedCollectible smart contract is mentioned here due to the dependency at the moment for borrowing ERC20 tokens. This is the only NFT contract supported at the moment for borrowing until the OpenSea API can be implemented.

| **Polygon Mumbai Address** | |
| ----------- | ----------- |
| **NERC20** | [0x7B427D442d5cCe45b9e6FB984206605B3c97f64D](https://mumbai.polygonscan.com/address/0x7B427D442d5cCe45b9e6FB984206605B3c97f64D) |
| **AdvancedCollectible** | [0xae87e56a9dF1Baf99F77B7A75F6EFDFD03bc41e5](https://mumbai.polygonscan.com/address/0xae87e56a9dF1Baf99F77B7A75F6EFDFD03bc41e5) |

### NERC20
| Write Functions | Functions that anyone can call on the contract |
| ----------- | ----------- |
| createNewFlashLoanContract | Allows caller to create a new Flash Loan contract and assigns the owner to the caller. The Flash Loan contract created from this function allows the caller to execute a flash loan and either go from UniSwap to SushiSwap or vice versa depending on the dirction the caller give. |

| Read Functions | Functions that anyone can read on the contract |
| ----------- | ----------- |
| getFlashLoanContract | This allows for someone to pass in an address to get the flash loan deployment address linked the input. This is used in case the caller lost the contract address from the createNewFlashLoanContract function. The caller can input the address the caller used to create the contract and get the deployed Flash Loan location. |
| getMaticValueNeededForNewContract | The caller can call this to figure out the amount of matic value the caller need to send with the createNewFlashLoanContract function for the process to succeed. |
| getAmountOfFlashLoansCreated | The amount of created flash loan contracts via the createNewFlashLoanContract function |
| addressProvider | Address for the Aave Flash Loan Provider |
| getOwner | Address for the owner of the AaveFlashLoanV3Factory |
| sushiRouter | Address for the Sushi Router used |
| uniSwapRouter | Address for the UniSwap Router used |

### AdvancedCollectible

| Write Functions | Functions that owner can call on the contract |
| ----------- | ----------- |
| myFlashLoanCall | Requires token0, token1, direction: 1 for token0 -> token1 using UniSwap and token1 -> token0 using SushiSwap 0 for SushiSwap to UniSwap, poolFee (required for UniSwap), amountIn, amountOut, deadline (required for SushiSwap). Executing this function will call a flash loan for the amountIn and start a trade from token0 to token1 and then from token1 back to token0 using the other exchange depending on the direction. Leaving the amountOut as 0 will ensure a trade happens. The trade will fail if there isn't enough token0 left on the contract for the premium Aave charges + the loan amount to be withdrawn. Only the owner of the Flash Loan contract will be able to execute this function. |
| transferOwnership | Transfers ownership to the address provided during the call. Only the owner of the contract can call this function. |
| withdraw | Withdraws any matic token on the account. Only the owner of the contract can call this function. |
| withdrawERC20Token | Withdraws provided ERC20 token address if there is any on the contract. Only the owner of the contract can call this function. |
| setMinimumProfitDividor | Allows capability to set a minimum profit dividor value. Dividing by 400 would require a 25% minimum profit for the trade to execute. Dividing by 40000 would give you a .25% minimum profit for the trade to execute. |

| Read Functions | Functions that anyone can read on the contract |
| ----------- | ----------- |
| ADDRESSES_PROVIDER | The Aave contract address that provides the POOL address |
| POOL | The pool contract address that the flashLoan is called on |
| getOwner | The current Owner of the Flash Loan Contract |

# Useful Resources

## How to set-up hardhat
https://hardhat.org/getting-started/

I am using hardhat to fork polygon mainnet for testing swapping contracts. The hardhat also provides good documentation for automating testing and deployment, which I am using in this project.

I was able to easily verify my smart contract on polygonscan by following the steps located [here at coinsbench](https://coinsbench.com/verify-smart-contract-on-polygonscan-using-hardhat-9b8331dbd888).
