// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.5.0) (token/ERC20/ERC20.sol)

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "./InterestModel.sol";

import "hardhat/console.sol";

/**
    TODO: Need to test to ensure interest is making
    sense for total interest calulations
    
    ---- Future Improvements could be ----
    1.) Create a delegatecall to ineterst model in case of emergency we can
    fix the logic on the InterestModel contract and start back NERC20
        * Requires decoupling the contracts completely
    2.) Impelment automatic interest calculation based on supply and demand
*/
contract NERC20 is ERC20, InterestModel, IERC721Receiver {
    // Variables needed to store contract state
    uint8 immutable _decimals;
    bool isOperational;
    IERC20 immutable erc20Token;
    uint256 minimumDividor;

    // Sales mapping that maps NFT contract and tokenId to a
    // set amount for the NFT to be sold.
    mapping(address => mapping(uint256 => uint256)) NFTSalesMapping;

    // Should create an emit on liquidation for
    // information to be parsed and picked up
    // by outside to implement sale.
    event NFTLiquidated(address indexed NFTContract, uint256 tokenId);

    // Should emit for borrowing and payment of loans
    event BorrowedToken(address indexed borrower, uint256 amountBorrowed);
    event PayedOnLoan(address indexed borrower, uint256 amountPaid);

    // Should emit for investing and withdrawing investment tokens
    event InvestedToken(address indexed investor, uint256 amountInvested);
    event InvestedTokenClaimed(
        address indexed investor,
        uint256 amountInvested
    );
    event WithdrawInvestedTokens(
        address indexed investor,
        uint256 amountWithdrawn
    );

    // Emits when liquid NFT has been sold
    event NFTLiquiditySold(
        address purchaser,
        uint256 purchaseAmount,
        address NFTContract,
        uint256 tokenId
    );

    mapping(address => NFTOwnerInfo) public NFTOwnerMapping;

    struct NFTOwnerInfo {
        IERC721 NFTContract;
        uint256 tokenId;
        uint256 nftCollateralAmount;
    }

    /**
        Constructor for nERC20 token, passes values to ERC20 parent
     */
    constructor(
        string memory name_,
        string memory symbol_,
        uint8 decimals_,
        IERC20 tokenAddress_
    ) ERC20(name_, symbol_) {
        _decimals = decimals_;
        erc20Token = tokenAddress_;
        currentBlockNumber = block.number;
        isOperational = true;
        minimumDividor = 2;
    }

    /**
        Overrides the default deciaml amount for ERC20 parent contract
     */
    function decimals() public view virtual override returns (uint8) {
        return _decimals;
    }

    /**
        Increases total supply. Requires user to transfer original token
        to receive collateral token.
     */
    function supplyTokens(uint256 amount) external isContractOperational {
        accrueInterest();
        updateAccountInterestMapping();
        require(
            erc20Token.balanceOf(msg.sender) >= amount,
            "You do not have enough ERC20 token to make this transaction."
        );
        SafeERC20.safeTransferFrom(
            erc20Token,
            msg.sender,
            address(this),
            amount
        );
        _mint(msg.sender, amount);
        emit InvestedToken(msg.sender, amount);
    }

    /**
        Function that deposits nERC20 token and gets out
        the original token deposited for investors
     */
    function withdrawTokens(uint256 amount) external isContractOperational {
        accrueInterest();
        updateAccountInterestMapping();
        require(
            balanceOf(msg.sender) > amount,
            "You do not have enough collateral tokens to withdraw this amount."
        );

        SafeERC20.safeTransfer(erc20Token, msg.sender, amount);
        _burn(msg.sender, amount);
        emit WithdrawInvestedTokens(msg.sender, amount);
    }

    /**
        Claims token for user account
    */
    function claimAccruedTokens() external isContractOperational {
        accrueInterest();
        AccountInterest memory accountInterestMapping = AccountInterestMapping[
            msg.sender
        ];
        // Subtract from unclaimed pool
        subTotalUnclaimedTokens(
            accountInterestMapping.unclaimedInterestTokenAmount
        );
        // Send user unclaimed tokens
        _mint(msg.sender, accountInterestMapping.unclaimedInterestTokenAmount);
        emit InvestedTokenClaimed(
            msg.sender,
            accountInterestMapping.unclaimedInterestTokenAmount
        );

        AccountInterestMapping[msg.sender] = AccountInterest(
            currentSumOfInterest,
            currentBlockNumber,
            0
        );
    }

    /**
        Borrows tokens function. Requires owner to make the call
        to ensure NFT collateral amount is accurate i.e. stops 
        users from borrowing money and just passing a high
        nftCollateralAmount value to get a loan that isn't
        supported by actual value of NFT. 

        The nftCollateralAmount will be calculated using
        the open sea API to get latest price of NFT.
     */
    function borrowTokens(
        address borrower,
        uint256 amount,
        uint256 nftCollateralAmount,
        IERC721 NFTContract,
        uint256 tokenId
    ) external onlyOwner isContractOperational {
        accrueInterest();

        require(
            address(NFTOwnerMapping[borrower].NFTContract) == address(0),
            "You already have a NFT as collateral."
        );
        require(
            amount >= nftCollateralAmount / 4,
            "NFT Collateral Amount is not high enough for request loan"
        );
        require(
            erc20Token.balanceOf(address(this)) >= amount,
            "We do not have enough funds to fund this loan."
        );

        updateBorrowInterestMapping(borrower, amount);
        NFTOwnerMapping[borrower] = NFTOwnerInfo(
            NFTContract,
            tokenId,
            nftCollateralAmount
        );

        NFTContract.safeTransferFrom(borrower, address(this), tokenId);

        SafeERC20.safeTransfer(erc20Token, borrower, amount);
        emit BorrowedToken(borrower, amount);
    }

    /**
        Repay full amount of borrowed tokens
      */
    function repayFullBorrowAmount(address borrower)
        public
        isContractOperational
    {
        accrueInterest();
        updateBorrowInterestMapping(borrower, 0);

        BorrowInterest memory borrowInterestMapping = BorrowInterestMapping[
            borrower
        ];
        uint256 fullAmountToRepay = borrowInterestMapping
            .borrowAmountNotCompounded + borrowInterestMapping.borrowAmount;

        uint256 erc20Balance = erc20Token.balanceOf(borrower);

        NFTOwnerInfo memory nftOwnerInfo = NFTOwnerMapping[borrower];

        // Require enough token to repay the full amount
        require(
            erc20Balance >= fullAmountToRepay,
            "You do not have enough to repay all of your debt"
        );

        // Transfer ERC20 token to this address
        SafeERC20.safeTransferFrom(
            erc20Token,
            borrower,
            address(this),
            fullAmountToRepay
        );

        // Transfers NFT back on full repaymnet
        nftOwnerInfo.NFTContract.safeTransferFrom(
            address(this),
            borrower,
            nftOwnerInfo.tokenId
        );

        // Remove borrow amount and delete mappings
        decreaseBorrowAmount(fullAmountToRepay);
        delete BorrowInterestMapping[borrower];
        delete NFTOwnerMapping[borrower];

        // Convert to int256 for checking due to possibility that the
        // borrow amount - amount could be less than 0
        if (
            int256(nftOwnerInfo.nftCollateralAmount) / int256(minimumDividor) <
            (int256(borrowInterestMapping.borrowAmount) - int256(erc20Balance))
        ) {
            liquidateNFT(borrower, erc20Balance);
        }

        emit PayedOnLoan(borrower, fullAmountToRepay);
    }

    /**
        Repay a portion of the borrowed tokens
       */
    function repayBorrowAmount(address borrower, uint256 amount)
        external
        isContractOperational
    {
        accrueInterest();
        updateBorrowInterestMapping(borrower, 0);

        // Set memory variables needed
        NFTOwnerInfo memory nftOwnerInfo = NFTOwnerMapping[borrower];
        BorrowInterest memory borrowInterestMapping = BorrowInterestMapping[
            borrower
        ];

        // Ensure user has enough to repay balance
        require(
            erc20Token.balanceOf(borrower) >= amount,
            "You do not have enough ERC20 token to pay this amount."
        );

        // If the amount is enough to repay full amount,
        // we call the repayFullBorrowAmount function.
        // Else continue with a portion of the payment
        if (
            borrowInterestMapping.borrowAmount +
                borrowInterestMapping.borrowAmountNotCompounded <
            amount
        ) {
            repayFullBorrowAmount(borrower);
        } else {
            SafeERC20.safeTransferFrom(
                erc20Token,
                borrower,
                address(this),
                amount
            );
            decreaseBorrowInterestMapping(borrower, amount);
            emit PayedOnLoan(borrower, amount);
        }
        // Convert to int256 for if statement check due to possibility
        // that the borrow amount - amount could be less than 0
        if (
            int256(nftOwnerInfo.nftCollateralAmount) / int256(minimumDividor) <
            (int256(borrowInterestMapping.borrowAmount) - int256(amount))
        ) {
            liquidateNFT(borrower, amount);
        }
    }

    /**
        Function needed to perform safe transfer of NFTs to this contract
    */
    function onERC721Received(
        address operator,
        address from,
        uint256 tokenId,
        bytes calldata data
    ) external pure returns (bytes4) {
        return
            bytes4(
                keccak256("onERC721Received(address,address,uint256,bytes)")
            );
    }

    /**
        Function to liquidate position and put NFT in list for sale
    */
    function liquidateNFT(address nftOwner, uint256 amount)
        internal
        isContractOperational
    {
        BorrowInterest memory borrowInterestMapping = BorrowInterestMapping[
            nftOwner
        ];
        // Subtract borrow amount that the payment does not cover
        decreaseBorrowAmount(borrowInterestMapping.borrowAmount - amount);
        NFTOwnerInfo memory nftOwnerInfo = NFTOwnerMapping[nftOwner];

        // Ensures we get something above 0 for NFT Liquidation Value
        uint256 nftLiquidationValue = calculateLiquidValue(
            nftOwnerInfo.nftCollateralAmount,
            minimumDividor
        );
        require(
            NFTSalesMapping[address(nftOwnerInfo.NFTContract)][
                nftOwnerInfo.tokenId
            ] == 0,
            "Error NFT is already on sale"
        );
        //Map liquid value to the contract and token id
        NFTSalesMapping[address(nftOwnerInfo.NFTContract)][
            nftOwnerInfo.tokenId
        ] = nftLiquidationValue;

        emit NFTLiquidated(
            address(nftOwnerInfo.NFTContract),
            nftOwnerInfo.tokenId
        );
        delete BorrowInterestMapping[nftOwner];
        delete NFTOwnerMapping[nftOwner];
    }

    /**
        Force liquidation is something anyone could call on
        an idle account that has not repayed the loan amount.
        This will force the NFT to be liquidated only if certain
        conditions are met.
    */
    function forceLiquidateIdleNFT(address nftOwner)
        external
        isContractOperational
    {
        accrueInterest();
        updateBorrowInterestMapping(nftOwner, 0);
        uint256 borrowAmount = getBorrowedRepayAmount(nftOwner);
        NFTOwnerInfo memory nftOwnerInfo = NFTOwnerMapping[nftOwner];
        // Convert to int256 for checking due to possibility that the
        // borrow amount - amount could be less than 0
        require(
            int256(nftOwnerInfo.nftCollateralAmount) / int256(minimumDividor) <
                (int256(borrowAmount)),
            "Amount owed is not enough to liquidate NFT."
        );
        liquidateNFT(nftOwner, 0);
    }

    /**
        View minimum Amount to purchase NFT
    */
    function nftPurchasePrice(address nftContract, uint256 tokenId)
        public
        view
        returns (uint256)
    {
        uint256 nftCollateralAmount = NFTSalesMapping[nftContract][tokenId];
        require(
            nftCollateralAmount > 0,
            "NFT is not listed in NFTSalesMapping."
        );
        return nftCollateralAmount;
    }

    /**
        Function to adjust minimum prchase price
    */
    function setMinimumDividor(uint256 amount)
        external
        onlyOwner
        isContractOperational
    {
        minimumDividor = amount;
    }

    /**
        Calculates the liquid value of NFT
    */
    function calculateLiquidValue(uint256 nftAmount, uint256 dividor)
        internal
        pure
        returns (uint256 resultAmount)
    {
        resultAmount = (nftAmount / dividor);
        if (resultAmount == 0) {
            resultAmount = 1;
        }
    }

    /**
        Sells the liquidated NFT to purchaser.
        I gated this behind onlyOwner to be able to 
        implement an auction before selling NFT.
    */
    function sellLiquidNFT(
        address purchaser,
        uint256 purchaseAmount,
        IERC721 nftContract,
        uint256 tokenId
    ) external onlyOwner isContractOperational {
        uint256 nftCollateralAmount = nftPurchasePrice(
            address(nftContract),
            tokenId
        );
        require(
            nftContract.ownerOf(tokenId) == address(this),
            "Contract is not the owner of this NFT"
        );

        require(
            purchaseAmount >= nftCollateralAmount,
            "You did not provide enough to purchase this NFT"
        );

        uint256 erc20Balance = erc20Token.balanceOf(purchaser);
        require(
            erc20Balance >= purchaseAmount,
            "You do not have enough ERC20 token to complete this purchase."
        );
        // Transfer money to this account before transfer of NFT to buyer
        SafeERC20.safeTransferFrom(
            erc20Token,
            purchaser,
            address(this),
            purchaseAmount
        );
        // Transfer NFT to purchaser
        nftContract.safeTransferFrom(address(this), purchaser, tokenId);
        emit NFTLiquiditySold(
            purchaser,
            purchaseAmount,
            address(nftContract),
            tokenId
        );
        delete NFTSalesMapping[address(nftContract)][tokenId];
    }

    /**
        Emergency shutdown
    */
    function shutdownContract() external onlyOwner {
        isOperational = false;
    }

    /**
        Restarts contract 
    */
    function startContract() external onlyOwner {
        isOperational = true;
    }

    /**
        Modifier to ensure emergency stop has not happened.
    */
    modifier isContractOperational() {
        require(
            isOperational,
            "The smart contract has been shutdown for the time being."
        );
        _;
    }
}
