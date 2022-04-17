// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.5.0) (token/ERC20/ERC20.sol)

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

/**
    Interest Model contract responsible for storing the interest
    of both borrowers and investors.
 */

contract InterestModel is Ownable {
    // Variables needed to store contract state
    uint8 internal currentInterestRatePerBlock = 5;
    uint8 internal currentBorrowInterestRatePerBlock = 12;
    uint256 internal borrowAmount;

    uint256 internal constant divideInterestPerBlock = 100 * 2628000;
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
    enum AccrueInterestState {
        calculatingInterest,
        readyToCalculate
    }
    AccrueInterestState currentState = AccrueInterestState.readyToCalculate;

    // Mapping variable to keep up with AccountInterest on account basis
    mapping(address => AccountInterest) internal AccountInterestMapping;
    mapping(address => BorrowInterest) internal BorrowInterestMapping;

    /**
        Accrue interest function. Calculates whenever account action happens that affects
        the supply of the current token.
    */
    function accrueInterest() internal returns (uint256 accruedInterestAmount) {
        // Checks to ensure we can accrue interest
        if (currentState == AccrueInterestState.calculatingInterest) {
            return 0;
        }
        currentState = AccrueInterestState.calculatingInterest;

        if (currentBlockNumber == block.number) {
            currentState = AccrueInterestState.readyToCalculate;
            return 0;
        }

        // calculation is delta block * interest rate
        uint256 currentSumOfInterestCalc = getCurrentSumOfInterestAmount(
            currentInterestRatePerBlock
        );

        // calculates accrued interest
        accruedInterestAmount =
            (currentSumOfInterestCalc * collateralToken.totalSupply()) /
            divideInterestPerBlock;

        addTotalUnclaimedTokens(accruedInterestAmount);

        // calculation is delta block * interest rate
        uint256 currentSumOfBorrowInterestCalc = getCurrentSumOfInterestAmount(
            currentBorrowInterestRatePerBlock
        );

        // calculates accrued borrow interest
        uint256 accruedBorrowInterestAmount = (currentSumOfBorrowInterestCalc *
            borrowAmount) / divideInterestPerBlock;

        // Set the current state variables
        currentBlockNumber = block.number;
        currentSumOfInterest += currentSumOfInterestCalc;
        currentSumOfBorrowInterest += currentSumOfBorrowInterestCalc;
        borrowAmountNotCompounded += accruedBorrowInterestAmount;
        currentState = AccrueInterestState.readyToCalculate;
    }

    /**
        Function to get currentSumOfInterestAmount
    */
    function getCurrentSumOfInterestAmount(uint8 interestRate)
        internal
        view
        returns (uint256 currentSumOfInterestCalc)
    {
        uint256 deltaBlockNum = (block.number - currentBlockNumber);

        currentSumOfInterestCalc = (deltaBlockNum * interestRate);
    }

    /**
        adds to unclaimed amount of interest
    */
    function addTotalUnclaimedTokens(uint256 amount) internal {
        currentUnclaimedTokenAmount += amount;
    }

    /**
        subtracts to unclaimed token amount
    */
    function subTotalUnclaimedTokens(uint256 amount) internal {
        require(
            amount <= currentUnclaimedTokenAmount,
            "The amount of unclaimed tokens are not available"
        );
        currentUnclaimedTokenAmount -= amount;
    }

    /**
        get unclaimed tokens for user AccountInterest
    */

    function getAccruedTokensAmount()
        internal
        view
        returns (uint256 accruedTokenAmount)
    {
        AccountInterest memory accountInterestMapping = AccountInterestMapping[
            msg.sender
        ];
        // Get delta information to calculate current account portion
        (uint256 deltaBlockNum, uint256 deltaAvgInterest) = abi.decode(
            getAccountInterestDelta(),
            (uint256, uint256)
        );
        // This is calculating delta from last deposit / withdrawl of account to last accruedInterest
        accruedTokenAmount =
            ((deltaAvgInterest *
                deltaBlockNum *
                collateralToken.balanceOf(msg.sender)) /
                divideInterestPerBlock) +
            accountInterestMapping.unclaimedInterestTokenAmount;
    }

    /**
        Function to get total amount invested for
        user that calls function
      */
    function getAmountInvested()
        external
        view
        returns (uint256 amountInvested)
    {
        amountInvested = collateralToken.balanceOf(msg.sender);
    }

    /**
        get unclaimed tokens for user AccountInterest
     */

    function getBorrowAccruedTokensAmount(address borrower)
        internal
        view
        returns (uint256 borrowAccruedTokenAmount)
    {
        BorrowInterest memory borrowInterestMapping = BorrowInterestMapping[
            borrower
        ];
        // Get delta information to calculate current account portion
        (uint256 deltaBlockNum, uint256 deltaAvgInterest) = abi.decode(
            getBorrowInterestDelta(borrower),
            (uint256, uint256)
        );
        // This is calculating delta from last deposit / withdrawl of account to last accruedInterest
        borrowAccruedTokenAmount =
            ((deltaAvgInterest *
                deltaBlockNum *
                borrowInterestMapping.borrowAmount) / divideInterestPerBlock) +
            borrowInterestMapping.borrowAmountNotCompounded;
    }

    /**
        Function to get amount borrowed
      */
    function getAmountBorrowed(address borrower)
        external
        view
        returns (uint256 amountBorrowed)
    {
        amountBorrowed = BorrowInterestMapping[borrower].borrowAmount;
    }

    /**
        Function to show full repay amount
     */
    function getBorrowedRepayAmount(address borrower)
        public
        view
        returns (uint256 repayAmount)
    {
        repayAmount =
            BorrowInterestMapping[borrower].borrowAmount +
            viewBorrowAccruedTokensAmount(borrower);
    }

    /**
        View unclaimed tokens for user AccountInterest
     */
    function viewAccruedTokensAmount()
        external
        view
        returns (uint256 accruedTokenAmount)
    {
        // This is calculating delta from last deposit / withdrawl of account to last accruedInterest
        accruedTokenAmount = getAccruedTokensAmount();
        // This is the delta from last accruedInterest() to current block should be 0 when
        // accrued is called before getAccruedTokensAmount()
        accruedTokenAmount +=
            (getCurrentSumOfInterestAmount(currentInterestRatePerBlock) *
                collateralToken.balanceOf(msg.sender)) /
            divideInterestPerBlock;
    }

    /**
        View unclaimed tokens for user BorrowInterest
     */
    function viewBorrowAccruedTokensAmount(address borrower)
        public
        view
        returns (uint256 accruedTokenAmount)
    {
        BorrowInterest memory borrowInterestMapping = BorrowInterestMapping[
            borrower
        ];
        // This is calculating delta from last deposit / withdrawl of account to last accruedInterest
        accruedTokenAmount = getBorrowAccruedTokensAmount(borrower);
        // This is the delta from last accruedInterest() to current block should be 0 when
        // accrued is called before getAccruedTokensAmount()
        accruedTokenAmount +=
            (getCurrentSumOfInterestAmount(currentBorrowInterestRatePerBlock) *
                borrowInterestMapping.borrowAmount) /
            divideInterestPerBlock;
    }

    /**
        Function to calculate user AccountInterest delta variables right after a
        accrueInterest() function
     */
    function getAccountInterestDelta()
        internal
        view
        returns (bytes memory params)
    {
        AccountInterest memory currentAccount = AccountInterestMapping[
            msg.sender
        ];

        uint256 deltaBlockNum = currentBlockNumber -
            currentAccount.currentBlockNumber;
        uint256 deltaAvgInterest;
        if (deltaBlockNum != 0) {
            uint256 deltaInterestGained = currentSumOfInterest -
                currentAccount.currentSumOfInterest;
            deltaAvgInterest = deltaInterestGained / deltaBlockNum;
        }

        params = abi.encode(deltaBlockNum, deltaAvgInterest);
    }

    /**
        Function to calculate user AccountInterest delta variables right after a
        accrueInterest() function
     */
    function getBorrowInterestDelta(address borrower)
        internal
        view
        returns (bytes memory params)
    {
        BorrowInterest memory borrowInterestMapping = BorrowInterestMapping[
            borrower
        ];

        uint256 deltaBlockNum = currentBlockNumber -
            borrowInterestMapping.currentBlockNumber;
        uint256 deltaAvgInterest;
        if (deltaBlockNum != 0) {
            uint256 deltaInterestGained = currentSumOfBorrowInterest -
                borrowInterestMapping.currentSumOfBorrowInterest;
            deltaAvgInterest = deltaInterestGained / deltaBlockNum;
        }
        params = abi.encode(deltaBlockNum, deltaAvgInterest);
    }

    /**
        Updates account interest mapping for specific investor
     */
    function updateAccountInterestMapping() internal {
        // Update current account information to latest data
        AccountInterestMapping[msg.sender] = AccountInterest(
            currentSumOfInterest,
            currentBlockNumber,
            getAccruedTokensAmount()
        );
    }

    /**
        Updates borrow interest mapping on specific borrower
     */
    function updateBorrowInterestMapping(address borrower, uint256 amount)
        internal
    {
        BorrowInterest memory borrowInterestMapping = BorrowInterestMapping[
            borrower
        ];
        // Update current account information to latest data
        uint256 borrowAmountToCompound = getBorrowAccruedTokensAmount(borrower);
        BorrowInterestMapping[borrower] = BorrowInterest(
            currentSumOfBorrowInterest,
            currentBlockNumber,
            0,
            borrowInterestMapping.borrowAmount + amount + borrowAmountToCompound
        );
        increaseBorrowAmount(borrowAmountToCompound + amount);
        // During testing there was rounding to the .0000000000001 place
        // To prevent an error message, I allow for rounding up to
        // .00001
        if (borrowAmountNotCompounded >= borrowAmountToCompound) {
            borrowAmountNotCompounded -= borrowAmountToCompound;
        } else {
            uint256 checkAmount = borrowAmountToCompound -
                borrowAmountNotCompounded;
            require(
                checkAmount < 10**13,
                "Error with compounding borrowAmount."
            );
            borrowAmountNotCompounded += checkAmount;
            borrowAmountNotCompounded -= borrowAmountToCompound;
        }
    }

    /**
        update borrow interest mapping when paying off loan
    */
    function decreaseBorrowInterestMapping(address borrower, uint256 amount)
        internal
    {
        BorrowInterest memory borrowInterestMapping = BorrowInterestMapping[
            borrower
        ];
        BorrowInterestMapping[borrower] = BorrowInterest(
            currentSumOfBorrowInterest,
            currentBlockNumber,
            0,
            borrowInterestMapping.borrowAmount - amount
        );
        decreaseBorrowAmount(amount);
    }

    /**
        Get current borrowAmount
    */
    function totalAmountBorrowed() external view returns (uint256) {
        return borrowAmount;
    }

    /**
        Increase the borrowAmount on contract
    */
    function increaseBorrowAmount(uint256 amount) internal {
        borrowAmount += amount;
    }

    /**
        Decrease the borrowAmount on contract
    */
    function decreaseBorrowAmount(uint256 amount) internal {
        borrowAmount -= amount;
    }

    /**
        Function to view current outstanding borrowed interest
    */
    function totalBorrowedInterest() external view returns (uint256) {
        return borrowAmountNotCompounded;
    }

    /**
        Gets total amount invested 
    */
    function totalAmountInvested() external view returns (uint256) {
        return collateralToken.totalSupply();
    }

    /**
        Gets total amount interest for investors
    */
    function totalAmountInvestedInterest() public view returns (uint256) {
        return
            currentUnclaimedTokenAmount +
            (getCurrentSumOfInterestAmount(currentInterestRatePerBlock) *
                collateralToken.totalSupply()) /
            divideInterestPerBlock;
    }

    /**
        Sets the current borrowing interest rate
    */
    function setCurrentBorrowInterestRatePerBlock(uint8 amount)
        public
        onlyOwner
    {
        currentBorrowInterestRatePerBlock = amount;
    }

    /**
        Sets the current investing ineterst reate
    */
    function setCurrentInterestRatePerBlock(uint8 amount) public onlyOwner {
        currentInterestRatePerBlock = amount;
    }
}
