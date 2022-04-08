// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.5.0) (token/ERC20/ERC20.sol)

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "./InterestModel.sol";

import "hardhat/console.sol";

/**
    nERC20 token TODO: implement accrued interest based on totalSupply amount.
    TODO: implement method to find current unrealized interest for account holder.
    TODO: implement method for account holder to withdraw unrealized interest gained.
    TODO: implement method for borrowing DAI for NFT collateral

    Current idea of implementing interest calculation for users

    Store current sum of interest on contract. 
    Store unclaimed token amount to be claimed by function for user.
    Store current Block Number to use for interest calculation.

    In AccountInterest struct store:
        sum of interest when struct was created
        block number of when struct was created

    The idea is to do currentSumOfInterest - AccountInterest.currentSumOfInterets
    to get the total interest gained for an account so far.

    Then, we will need to do currentBlockNumber-AccountInterest.currentBlockNumber
    to get the amount of blocks to divide the delta sum of interest by.

    This will give us an average amount of interest per block since the user has
    held nERC20 token. Then, we can take that based on what the current balance
    of their nERC20 token to determine what piece of the total currentUnclaimedTokenAmount
    the user is entitled to.

    This above approach could allow for dynamic interest rate per block using supply and
    demand curve.
 */

contract NERC20 is ERC20, InterestModel {
    // Variables needed to store contract state
    uint8 immutable _decimals;
    IERC20 immutable erc20Token;

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
    function supplyTokens(uint256 amount) external {
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
    }

    /**
        Function that deposits nERC20 token and gets out
        the original token deposited for investors
     */
    function withdrawTokens(uint256 amount) external {
        accrueInterest();
        updateAccountInterestMapping();
        require(
            balanceOf(msg.sender) > amount,
            "You do not have enough collateral tokens to withdraw this amount."
        );

        SafeERC20.safeTransfer(erc20Token, msg.sender, amount);
        _burn(msg.sender, amount);
    }

    /**
        Claims token for user account
      */
    function claimAccruedTokens() public {
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
        AccountInterestMapping[msg.sender] = AccountInterest(
            currentSumOfInterest,
            currentBlockNumber,
            0
        );
    }

    /**
        Borrows tokens
        TODO: implement the nftCollateral transfer
     */
    function borrowTokens(uint256 amount, uint256 nftCollateral) external {
        accrueInterest();
        require(
            erc20Token.balanceOf(address(this)) >= amount,
            "We do not have enough funds to fund this loan."
        );
        updateBorrowInterestMapping(amount);
        borrowAmount += amount;
        SafeERC20.safeTransfer(erc20Token, msg.sender, amount);
    }

    /**
        Repay full amount of borrowed tokens
      */
    function repayFullBorrowAmount() public {
        accrueInterest();
        updateBorrowInterestMapping(0);

        BorrowInterest memory borrowInterestMapping = BorrowInterestMapping[
            msg.sender
        ];
        uint256 fullAmountToRepay = borrowInterestMapping
            .borrowAmountNotCompounded + borrowInterestMapping.borrowAmount;

        require(
            erc20Token.balanceOf(msg.sender) >= fullAmountToRepay,
            "You do not have enough to repay all of your debt"
        );

        SafeERC20.safeTransferFrom(
            erc20Token,
            msg.sender,
            address(this),
            fullAmountToRepay
        );

        borrowAmount -= fullAmountToRepay;
        delete BorrowInterestMapping[msg.sender];
    }

    /**
        Repay a portion of the borrowed tokens
       */
    function repayBorrowAmount(uint256 amount) external {
        accrueInterest();
        updateBorrowInterestMapping(0);

        require(
            erc20Token.balanceOf(msg.sender) >= amount,
            "You do not have enough ERC20 token to pay this amount."
        );

        BorrowInterest memory borrowInterestMapping = BorrowInterestMapping[
            msg.sender
        ];

        if (
            borrowInterestMapping.borrowAmount +
                borrowInterestMapping.borrowAmountNotCompounded <
            amount
        ) {
            repayFullBorrowAmount();
        } else {
            SafeERC20.safeTransferFrom(
                erc20Token,
                msg.sender,
                address(this),
                amount
            );
            BorrowInterestMapping[msg.sender] = BorrowInterest(
                currentSumOfBorrowInterest,
                currentBlockNumber,
                0,
                borrowInterestMapping.borrowAmount - amount
            );
            borrowAmount -= amount;
        }
    }
}
