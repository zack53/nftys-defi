// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.5.0) (token/ERC20/ERC20.sol)

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
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

contract InterestModel {

    // Variables needed to store contract state
    uint8 internal currentInterestRatePerBlock = 5;
    uint8 internal currentBorrowInterestRatePerBlock = 12;
    uint256 internal borrowAmount;
    
    uint256 internal constant divideInterestPerBlock = 100*2628000;
    uint256 internal currentBlockNumber;
    
    uint256 internal currentSumOfInterest;
    uint256 internal currentSumOfBorrowInterest;

    uint256 internal currentUnclaimedTokenAmount;
    uint256 internal borrowAmountNotCompounded;
    IERC20 collateralToken = IERC20(address(this));

    // Struct to store user information needed to find
    // delta of interest gained for deposited amount.
    struct AccountInterest {
        uint256 currentSumOfInterest;
        uint256 currentBlockNumber;
        uint256 unclaimedInterestTokenAmount;
    }

    // Struct to store user information needed to find
    // delta of interest gained for deposited amount.
    struct BorrowInterest {
        uint256 currentSumOfBorrowInterest;
        uint256 currentBlockNumber;
        uint256 borrowAmountNotCompounded;
        uint256 borrowAmount;
    }

    // Enum information to stop calculating interest if we are not
    // ready to calculate
    enum AccrueInterestState { calculatingInterest, readyToCalculate }
    AccrueInterestState currentState = AccrueInterestState.readyToCalculate;

    // Mapping variable to keep up with AccountInterest on account basis
    mapping (address => AccountInterest) internal  AccountInterestMapping;
    mapping (address => BorrowInterest) internal  BorrowInterestMapping;

    /**
        Accrue interest function. Calculates whenever account action happens that affects
        the supply of the current token.
     */
    function accrueInterest() public returns(uint256 accruedInterestAmount){
        if(currentState == AccrueInterestState.calculatingInterest){
            return 0;
        }
        currentState = AccrueInterestState.calculatingInterest;

        if(currentBlockNumber == block.number){
            currentState = AccrueInterestState.readyToCalculate;
            return 0;
        }

        uint256 currentSumOfInterestCalc = getCurrentSumOfInterestAmount(currentInterestRatePerBlock);
        // Multiply 100 by average number of blocks a year to give appropriate amount of interest
        currentSumOfInterest += currentSumOfInterestCalc;
        accruedInterestAmount = currentSumOfInterestCalc*collateralToken.totalSupply()/divideInterestPerBlock;
        addTotalUnclaimedTokens(accruedInterestAmount);

        uint256 currentSumOfBorrowInterestCalc = getCurrentSumOfInterestAmount(currentBorrowInterestRatePerBlock);
        currentSumOfBorrowInterest += currentSumOfBorrowInterestCalc;

        uint256 accruedBorrowInterestAmount = currentSumOfBorrowInterestCalc*borrowAmount/divideInterestPerBlock;
        borrowAmountNotCompounded += accruedBorrowInterestAmount;

        
        currentBlockNumber = block.number;
        currentState = AccrueInterestState.readyToCalculate;
    }

    /**
        Function to get currentSumOfInterestAmount
     */
    function getCurrentSumOfInterestAmount(uint8 interestRate) view internal returns (uint256 currentSumOfInterestCalc){
        uint256 deltaBlockNum = (block.number - currentBlockNumber);
        
        currentSumOfInterestCalc = (deltaBlockNum*interestRate);
    }

    /**
        adds to unclaimed amount of interest
     */
     function addTotalUnclaimedTokens(uint256 amount) internal{
         currentUnclaimedTokenAmount += amount;
     }

    /**
        subtracts to unclaimed token amount
     */
     function subTotalUnclaimedTokens(uint256 amount) internal{
         require(amount <= currentUnclaimedTokenAmount,'The amount of unclaimed tokens are not available');
         currentUnclaimedTokenAmount -= amount;
     }

    /**
        get unclaimed tokens for user AccountInterest
     */

     function getAccruedTokensAmount() view internal returns(uint256 accruedTokenAmount){
        AccountInterest memory accountInterestMapping = AccountInterestMapping[msg.sender];
        // Get delta information to calculate current account portion
        (uint256 deltaBlockNum, uint256 deltaAvgInterest) = abi.decode(getAccountInterestDelta(), (uint256, uint256));
        // This is calculating delta from last deposit / withdrawl of account to last accruedInterest
        accruedTokenAmount = (deltaAvgInterest*deltaBlockNum*collateralToken.balanceOf(msg.sender)/divideInterestPerBlock) + accountInterestMapping.unclaimedInterestTokenAmount;
     }

    /**
        get unclaimed tokens for user AccountInterest
     */

     function getBorrowAccruedTokensAmount() view internal returns(uint256 borrowAccruedTokenAmount){
        BorrowInterest memory borrowInterestMapping = BorrowInterestMapping[msg.sender];
        // Get delta information to calculate current account portion
        (uint256 deltaBlockNum, uint256 deltaAvgInterest) = abi.decode(getBorrowInterestDelta(), (uint256, uint256));
        // This is calculating delta from last deposit / withdrawl of account to last accruedInterest
        borrowAccruedTokenAmount = (deltaAvgInterest*deltaBlockNum*borrowInterestMapping.borrowAmount/divideInterestPerBlock) + borrowInterestMapping.borrowAmountNotCompounded;
     }

    /**
        View unclaimed tokens for user AccountInterest
     */
     function viewAccruedTokensAmount() view external returns(uint256 accruedTokenAmount){
        // This is calculating delta from last deposit / withdrawl of account to last accruedInterest
        accruedTokenAmount = getAccruedTokensAmount();
        // This is the delta from last accruedInterest() to current block should be 0 when
        // accrued is called before getAccruedTokensAmount()
        accruedTokenAmount += getCurrentSumOfInterestAmount(currentInterestRatePerBlock)*collateralToken.balanceOf(msg.sender)/divideInterestPerBlock;
     }

    /**
        View unclaimed tokens for user AccountInterest
     */
     function viewBorrowAccruedTokensAmount() view external returns(uint256 accruedTokenAmount){
        BorrowInterest memory borrowInterestMapping =  BorrowInterestMapping[msg.sender];
        // This is calculating delta from last deposit / withdrawl of account to last accruedInterest
        accruedTokenAmount = getBorrowAccruedTokensAmount();
        // This is the delta from last accruedInterest() to current block should be 0 when
        // accrued is called before getAccruedTokensAmount()
        accruedTokenAmount += getCurrentSumOfInterestAmount(currentBorrowInterestRatePerBlock)*borrowInterestMapping.borrowAmount/divideInterestPerBlock;
     }

    /**
        Function to calculate user AccountInterest delta variables right after a
        accrueInterest() function
     */
     function getAccountInterestDelta() view internal returns(bytes memory params){
        AccountInterest memory currentAccount = AccountInterestMapping[msg.sender];

        uint256 deltaBlockNum = currentBlockNumber - currentAccount.currentBlockNumber;
        uint256 deltaAvgInterest;
        if(deltaBlockNum != 0){
            uint256 deltaInterestGained = currentSumOfInterest - currentAccount.currentSumOfInterest;
            deltaAvgInterest = deltaInterestGained/deltaBlockNum;
        }

        params = abi.encode(deltaBlockNum, deltaAvgInterest);
     }

    /**
        Function to calculate user AccountInterest delta variables right after a
        accrueInterest() function
     */
     function getBorrowInterestDelta() view internal returns(bytes memory params){
        BorrowInterest memory borrowInterestMapping = BorrowInterestMapping[msg.sender];

        uint256 deltaBlockNum = currentBlockNumber - borrowInterestMapping.currentBlockNumber;
        uint256 deltaAvgInterest;
        if(deltaBlockNum != 0){
            uint256 deltaInterestGained = currentSumOfBorrowInterest - borrowInterestMapping.currentSumOfBorrowInterest;
            deltaAvgInterest = deltaInterestGained/deltaBlockNum;
        }
        params = abi.encode(deltaBlockNum, deltaAvgInterest);
     }

    /**
        Updates account interest mapping if user deposits or withdraws collateral.
        If isClaimed == true, we set the unclaimedInterestTokenAmount to 0 because 
        we put those tokens to the account.
     */
     function updateAccountInterestMapping() internal {
        // Update current account information to latest data
        AccountInterestMapping[msg.sender] = AccountInterest(currentSumOfInterest, currentBlockNumber, getAccruedTokensAmount());
        
     }

    /**
        Updates account interest mapping if user deposits or withdraws collateral.
        If isClaimed == true, we set the unclaimedInterestTokenAmount to 0 because 
        we put those tokens to the account.
     */
     function updateBorrowInterestMapping(uint256 amount) internal {
        BorrowInterest memory borrowInterestMapping =  BorrowInterestMapping[msg.sender];
        // Update current account information to latest data
        BorrowInterestMapping[msg.sender] = BorrowInterest(currentSumOfBorrowInterest, currentBlockNumber, getBorrowAccruedTokensAmount(), borrowInterestMapping.borrowAmount+amount);
        
     }

     /**
        Get current borrowAmount
      */
    function totalAmountBorrowed() view external returns(uint256){
        return borrowAmount;
    }

}
