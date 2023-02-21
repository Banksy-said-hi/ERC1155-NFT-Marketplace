// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";

contract F_NFT is ERC1155 {
    using Counters for Counters.Counter;
    Counters.Counter public tokenIds;

    mapping(uint256 => uint256) public idToQuantity;
    mapping(uint256 => string) private uris;

    string public name = "KHAASTEH";

    address public marketplace;

    constructor(address _marketplace) ERC1155("") {
        marketplace = _marketplace;
    }

    function mint(
        uint256 _amount,
        string memory _uri,
        bytes memory _data
    ) public {
        tokenIds.increment();
        uint256 newTokenId = tokenIds.current();

        _mint(msg.sender, newTokenId, _amount, _data);
        setApprovalForAll(marketplace, true);

        idToQuantity[newTokenId] = _amount;
        uris[newTokenId] = _uri;
    }

    function uri(
        uint256 _tokenId
    ) public view override returns (string memory) {
        return (uris[_tokenId]);
    }

    // function list(uint _tokenId, uint _price) public {
    //     bytes memory data = abi.encodePacked(_price);
    //     uint amount = balanceOf(msg.sender, _tokenId);
    //     safeTransferFrom(msg.sender, marketplace, _tokenId, amount, data);
    // }
}
