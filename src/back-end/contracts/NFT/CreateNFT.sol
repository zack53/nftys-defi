// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.5.0) (token/ERC20/ERC20.sol)

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

contract CreateNFT is ERC721 {
    string[] public CryptoNFTs;
    uint256 private id;

    constructor(string memory name_, string memory symbol_)
        ERC721(name_, symbol_)
    {}

    function mint(string memory name) external {
        CryptoNFTs.push(name);
        _safeMint(msg.sender, id, "");
        id += 1;
    }

    function CryptNFTsAmountCreated() external view returns (uint256 amount) {
        amount = id;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return "test";
    }

    function getBaseURI() external view returns (string memory baseURI) {
        baseURI = _baseURI();
    }
}
