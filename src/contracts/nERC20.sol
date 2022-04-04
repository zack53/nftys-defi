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
 */

contract nERC20 is ERC20{

    uint8 _decimals;
    IERC20 tokenAddress;
    uint8 currentInterestRatePerBlock = 5;
    uint256 currentBlock;

    struct AccountInterest {
        uint256 lastAccruedBlockNumber;
        uint256 amountOfUnrealizedInterest;
    }

    mapping(address => AccountInterest) private AccountInterestMapping;

    constructor(string memory name_, string memory symbol_, uint8 decimals_, IERC20 tokenAddress_) ERC20(name_, symbol_){
        _decimals = decimals_;
        tokenAddress = tokenAddress_;
        currentBlock = block.number;
    }


    function mint(uint256 amount) external{
        // Need to apply accrued interest to account before allowing to mint more.
        AccountInterestMapping[address(msg.sender)] = AccountInterest(block.number, 0);
        SafeERC20.safeTransferFrom(tokenAddress, address(msg.sender), address(this), amount);
        _mint(address(msg.sender),amount);
    }

    
    function decimals() public view virtual override returns (uint8) {
        return _decimals;
    }

    function depositCollateral(uint256 amount) external{

        // TODO: Need to accrue interest on current tokens
        // and update mapping block number
        uint256 interestAmount = accrueInterest(address(msg.sender));

        // Need to check if all collateral has been request to be
        // given back if so delete AccountInterestMapping
        if(balanceOf(address(msg.sender))==amount){
            delete AccountInterestMapping[address(msg.sender)];
            SafeERC20.safeTransfer(tokenAddress,address(msg.sender),amount+interestAmount);
            _burn(address(msg.sender), amount+interestAmount);
        }else{
            SafeERC20.safeTransfer(tokenAddress,address(msg.sender),amount);
            _burn(address(msg.sender), amount);

        }
    }

    /**
        Accrue interest function. Calculates whenever account action happens that affects
        the supply of the current token.
     */
    function accrueInterest(address account) public returns(uint256 accruedInterestAmount){
        AccountInterest memory accountInterestInfo = AccountInterestMapping[address(msg.sender)];
        if(accountInterestInfo.lastAccruedBlockNumber == block.number){
            return 0;
        }

        uint256 totalBlocksOfInterest = (block.number - accountInterestInfo.lastAccruedBlockNumber);
        // Multiply 100 by average number of blocks a year to give appropriate amount of interest
        accruedInterestAmount = (totalBlocksOfInterest*balanceOf(account)*currentInterestRatePerBlock)/(100*2628000);
        _mint(address(this),accruedInterestAmount);
        AccountInterestMapping[address(msg.sender)] = AccountInterest(block.number, accountInterestInfo.amountOfUnrealizedInterest+accruedInterestAmount);
    }

}
