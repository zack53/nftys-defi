// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.5.0) (token/ERC20/ERC20.sol)

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

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

contract nERC20 is ERC20{

    uint8 immutable _decimals;
    uint8 currentInterestRatePerBlock = 5;
    IERC20 immutable erc20Token;
    uint256 currentBlockNumber;
    uint256 currentSumOfInterest;
    uint256 currentUnclaimedTokenAmount;
    uint256 constant divideInterestPerBlock = 100*2628000;

    struct AccountInterest {
        uint256 currentSumOfInterest;
        uint256 currentBlockNumber;
    }

    enum AccrueInterestState { calculatingInterest, readyToCalculate }
    AccrueInterestState currentState = AccrueInterestState.readyToCalculate;

    mapping(address => AccountInterest) private AccountInterestMapping;

    constructor(string memory name_, string memory symbol_, uint8 decimals_, IERC20 tokenAddress_) ERC20(name_, symbol_){
        _decimals = decimals_;
        erc20Token = tokenAddress_;
        currentBlockNumber = block.number;
    }


    function mint(uint256 amount) external{
        accrueInterest();
        console.log(currentUnclaimedTokenAmount);
        // Need to apply accrued interest to account before allowing to mint more.
        AccountInterestMapping[msg.sender] = AccountInterest(currentSumOfInterest, block.number);
        SafeERC20.safeTransferFrom(erc20Token, msg.sender, address(this), amount);
        _mint(msg.sender,amount);
    }

    
    function decimals() public view virtual override returns (uint8) {
        return _decimals;
    }

    function depositCollateral(uint256 amount) external{

        // TODO: Need to accrue interest on current tokens
        // and update mapping block number
        accrueInterest();

        // Need to check if all collateral has been request to be
        // given back if so delete AccountInterestMapping
        if(balanceOf(msg.sender)==amount){
            delete AccountInterestMapping[msg.sender];
            uint256 interestAmount = 0; // Need to implement getUnclaimedAmount
            amount += interestAmount;
        }
        
        SafeERC20.safeTransfer(erc20Token,msg.sender,amount);
        _burn(msg.sender, amount);
    }

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



        // Ensures no interest is accrued if DAI tokens on contract is 0
        if(totalSupply() == 0){
            currentBlockNumber = block.number;
            currentState = AccrueInterestState.readyToCalculate;
            return 0;
        }

        uint256 totalBlocksOfInterest = (block.number - currentBlockNumber);
        // Multiply 100 by average number of blocks a year to give appropriate amount of interest
        accruedInterestAmount = (totalBlocksOfInterest*totalSupply()*currentInterestRatePerBlock)/divideInterestPerBlock;
        currentSumOfInterest += (totalBlocksOfInterest*currentInterestRatePerBlock);
        addTotalUnclaimedTokens(accruedInterestAmount);
        currentState = AccrueInterestState.readyToCalculate;
        currentBlockNumber = block.number;
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
         currentUnclaimedTokenAmount -= amount;
     }

     /**
        Claims token for user account
      */
    function claimAccruedTokens() public{
        accrueInterest();

        AccountInterest memory currentAccount = AccountInterestMapping[msg.sender];
        // Get delta information to calculate current account portion
        uint256 deltaInterestGained = currentSumOfInterest - currentAccount.currentSumOfInterest;
        uint256 deltaBlockNum = currentBlockNumber - currentAccount.currentBlockNumber;
        uint256 deltaAvgInterest = deltaInterestGained/deltaBlockNum;

        // Get current account tokens invested
        uint256 unclaimedTokenAmount = deltaAvgInterest*deltaBlockNum*balanceOf(msg.sender)/divideInterestPerBlock;
        console.log(unclaimedTokenAmount);
        // Subtract from unclaimed pool
        subTotalUnclaimedTokens(unclaimedTokenAmount);
        // Send user unclaimed tokens
        _mint(msg.sender,unclaimedTokenAmount);
        // Update current account information to latest data
        AccountInterestMapping[msg.sender] = AccountInterest(currentSumOfInterest, currentBlockNumber);

    }

}
