# NFT Loan Platform

### The website [can be viewed here](https://nftys-defi.vercel.app/)

## Front-end Usage
The front-end is dividing into sections one a one pager. I put together this as an MVP to showcase the NERC20 smart contract. I am not a front-end developer so forgive me for such a basic layout.

There are four sections. Contract State Read Functions, Investment Functions, Mint NFT Functions, and Borrow Functions.

### Contract State Read Functions
These are the functions that are generic for the smart contract and show the overall state.

| Button | Functionality |
| ----------- | ----------- |
| View Decimals | Calls the **decimals** view function on the NERC20 smart contract. Returns the decimals used for the NERC20 token. |
| View Total Supply | Calls the **totalAmountInvested** view function on the NERC20 smart contract. Returns the total amount invested on the smart contract. |
| Total Earned Interest | Calls the **totalAmountInvestedInterest** view function on the NERC20 smart contract. Returns the total interest amount accrued on the smart contract. |
| Total Borrowed | Calls the **totalAmountBorrowed** view function on the NERC20 smart contract. Returns the total amount of ERC20 tokens borrowed on the smart contract. |
| Total Borrowed Interest | Calls the **totalBorrowedInterest** view function on the NERC20 smart contract. Returns the total borrowed interest amount accrued on the smart contract. | 

### Investment Functions

| Button | Functionality |
| ----------- | ----------- |
| View Amount Invested | Calls the **getAmountInvested** view function on the NERC20 smart contract. Returns the amount invested for msg.sender. |
| View Interest Earned | Calls the **viewAccruedTokensAmount** view function on the NERC20 smart contract. Returns the amount of interest accrued for msg.sender. |
| Claim Accrued Tokens | Calls the **claimAccruedTokens** function on the NERC20 smart contract. Claims the value of **viewAccruedTokensAmount** and adds to the **getAmountInvested** value. |
| Trade MATIC for DAI | Calls smart contract to trade MATIC for DAI. Takes in amount. Transfers MATIC for WMATIC before swapping for DAI. This may fail due to limited DAI availability in test. Future improvements would be to implement my own ERC20 token for testing. |
| Supply Tokens | Calls the **supplyTokens** function on the NERC20 smart contract. Takes in amount. Trades DAI for NDAI. The NDAI you have can be refunded for DAI. | 
| Withdraw Tokens | Calls the **withdrawTokens** function on the NERC20 smart contract. Takes in amount. Withdraws DAI tokens in exchange for NDAI. The NDAI is burned. | 

### Mint NFT Functions

| Button | Functionality |
| ----------- | ----------- |
| Total Doggies | Calls the **tokenCounter** view function on the AdvancedCollectible smart contract. Returns the total number of minted Doggies. |
| View Owned Doggies | Calls the **balanceOf** view function on the AdvancedCollectible smart contract. Takes in owner address. Returns the total amount owned by the address provided. |
| Mint Random Dog NFT | Calls the **CreateDoggies** function on the AdvancedCollectible smart contract. Starts the minting process by calling the **requestRandomness** function. Listeners are created that will automatically update the two text fields **Mint Request Id for ChainLink Random number:** and **Doggies newly Minted OpenSea NFT URL:** values. The process will take a while to complete, but if there is an issue, I have provided the **Set Doggie Token URI** button that will allow you to manually set the Token URI. |
| View Minted Dog Token Id | Calls the **requestIdToTokenId** view function on the AdvancedCollectible smart contract. Takes in request id. Returns the token id related to the request id. |
| View Dog Breed | Calls the **tokenIdToBreed** view function on the AdvancedCollectible smart contract. Takes in token id. Returns the total borrowed interest amount accrued on the smart contract. | 
| View Doggie Token URI | Calls the **tokenURI** view function on the AdvancedCollectible smart contract. Takes in token id. Returns the token URI for the provided token Id. | 
| Set Doggie Token URI | Calls the **setTokenURI** function on the AdvancedCollectible smart contract. Takes in token id. Sets the tokenURI for the provided token id. | 

### Borrow Functions
Due to the MetaMask bug MetaMask/metamask-extension#14459 I have not been able to fully test the Borrow DAI form. I have tested the borrowing capability on the smart contract with test scripts, but I am not sure if the Borrow DAI buttons is 100% functional at the moment. I tested individual pieces of the button successfully, but I will continue to monitor the bug to finish testing.

| Button | Functionality |
| ----------- | ----------- |
| View Amount Borrowed | Calls the **getAmountBorrowed** view function on the NERC20 smart contract. Returns the amount borrowed by user. |
| View Borrowed Interest | Calls the **viewBorrowAccruedTokensAmount** view function on the NERC20 smart contract. Returns the total accrued interest on the loan for the user. |
| View Repayment Amount | Calls the **getBorrowedRepayAmount** view function on the NERC20 smart contract. Returns the total repayment amount needed to receive the NFT token back. |
| Borrow DAI Form | Calls the **borrowTokens** function on the NERC20 smart contract. Takes in borrow amount, NFT address, and token id. Transfers the NFT to the smart contract in return for the ERC20 token linked to the NERC20 smart contract. |


## Next JS Getting Started
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
