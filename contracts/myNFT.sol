// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MyNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenId;

    constructor() ERC721("Rohit", "ROH") {}

    function mintNFT(address receiver, string memory tokenlink)
        public
        onlyOwner
        returns (uint256)
    {
        _tokenId.increment();

        uint256 newItemId = _tokenId.current();
        _mint(receiver, newItemId);
        _setTokenURI(newItemId, tokenlink);
        return newItemId;
    }
}
