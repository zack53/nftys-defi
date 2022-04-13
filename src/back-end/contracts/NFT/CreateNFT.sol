// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.5.0) (token/ERC20/ERC20.sol)

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

contract CreateNFT is ERC721 {
    string[] private CryptoNFTs;
    uint256 private id;
    string private baseURI;

    event MintNFT(address minter, uint256 id);

    /**
        Cont
    */
    constructor(
        string memory name_,
        string memory symbol_,
        string memory baseURI_
    ) ERC721(name_, symbol_) {
        baseURI = baseURI_;
    }

    /**
        Mints NFT with a specific name
    */
    function mint(string memory name) external returns (uint256) {
        CryptoNFTs.push(name);
        id += 1;
        _safeMint(msg.sender, id, "");
        emit MintNFT(msg.sender, id);
        return id;
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
    function getBaseURI() external view returns (string memory baseNFTURI) {
        baseNFTURI = _baseURI();
    }

    function getNFTById(uint256 _id)
        external
        view
        returns (string memory CryptoNFT)
    {
        require(_id >= 1, "This id number is too low");
        require(_id <= id, "This id number is too high");
        return CryptoNFTs[_id - 1];
    }
}
