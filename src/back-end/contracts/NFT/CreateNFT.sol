// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.5.0) (token/ERC20/ERC20.sol)

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

contract CreateNFT is ERC721 {
    string[] public CryptoNFTs;
    uint256 private id;
    string private baseURI;

    /**
        Cont
    */
    constructor(
        string memory name_,
        string memory symbol_,
        string memory _baseURI
    ) ERC721(name_, symbol_) {
        baseURI = _baseURI;
    }

    /**
        Mints NFT with a specific name
    */
    function mint(string memory name) external {
        CryptoNFTs.push(name);
        _safeMint(msg.sender, id, "");
        id += 1;
    }

    /**
        Returns the amount of NFTs that have been create on this contract
    */
    function CryptNFTsAmountCreated() external view returns (uint256 amount) {
        amount = id;
    }

    /**
        Function to overide base URI
    */
    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
    }

    /**
        Function to view base URI
    */
    function getBaseURI() external view returns (string memory baseURI) {
        baseURI = _baseURI();
    }
}
