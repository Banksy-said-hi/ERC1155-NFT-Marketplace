// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract Marketplace is ReentrancyGuard {
    // using Counters for Counters.Counter;

    // Counters.Counter private itemIds; // Starting from one
    // Counters.Counter private itemsSold;

    mapping(uint256 => MarketItem) private tokenIdToMarketItem; // Starts from one [1]

    struct MarketItem {
        // uint256 itemId; // Starts from one 1
        address nftContract;
        address payable seller;
        uint256 tokenId;
        uint256 amount;
        uint256 pricePerToken;
        // address payable owner;
        // bool sold;
    }

    function pricePerTokenGetter(uint _tokenId) public view returns (uint) {
        return tokenIdToMarketItem[_tokenId].pricePerToken;
    }

    function createMarketItem(
        address _nftContract,
        uint256 _tokenId,
        uint256 _amount,
        uint256 _pricePerToken
    ) public nonReentrant {
        // itemIds.increment();
        // uint256 itemId = itemIds.current();

        tokenIdToMarketItem[_tokenId] = MarketItem(
            _nftContract,
            payable(msg.sender),
            _tokenId,
            _amount,
            // payable(address(0)),
            _pricePerToken
            // false
        );

        IERC1155(_nftContract).safeTransferFrom(
            msg.sender,
            address(this),
            _tokenId,
            _amount,
            ""
        );

        // emit MarketItemCreated(
        //     itemId,
        //     _nftContract,
        //     _tokenId,
        //     _amount,
        //     msg.sender,
        //     address(0),
        //     _price,
        //     false
        // );

        // // Sine Design
        // pricePerTokenId[_nftContract][_tokenId] = _price;
    }

    function createMarketSale(
        address _nftContract,
        uint256 _tokenId,
        uint256 _amount
    ) public payable nonReentrant {
        // Getting price of each token for that specified token Id
        uint256 pricePerToken = tokenIdToMarketItem[_tokenId].pricePerToken;

        // Making sure the provided money is enough to buy all mentioned tokens
        require(
            msg.value >= pricePerToken * _amount,
            "Provided msg.value is not enough for buying that amount of token"
        );

        // (1) Transferring money from buyer to the owner
        tokenIdToMarketItem[_tokenId].seller.transfer(msg.value);

        // (2) Transferring tokens from the marketplace to the buyer
        ERC1155(_nftContract).safeTransferFrom(
            address(this),
            msg.sender,
            _tokenId,
            _amount,
            ""
        );

        // (3) Applying side effects of the transferships
        tokenIdToMarketItem[_tokenId].amount -= _amount;

        // idToMarketItem[_itemId].owner = payable(msg.sender);
        // idToMarketItem[_itemId].sold = true;
        // itemsSold.increment();
        // Sina Design
        // pricePerTokenId[_nftContract][tokenId] = 0;
    }

    function onERC1155Received(
        address,
        address,
        uint256,
        uint256,
        bytes memory
    ) public virtual returns (bytes4) {
        return this.onERC1155Received.selector;
    }

    // Sina Design
    // mapping(address => mapping(uint => uint)) public pricePerTokenId; // contract address => token ID => price

    // event MarketItemCreated(
    //     uint256 indexed itemId,
    //     address indexed nftContract,
    //     uint256 indexed tokenId,
    //     uint256 amount,
    //     address seller,
    //     address owner,
    //     uint256 price,
    //     bool sold
    // );

    // function fetchMarketItems() public view returns (MarketItem[] memory) {
    //     uint256 itemCount = itemIds.current();
    //     uint256 unsoldItemCount = itemIds.current() - itemsSold.current();
    //     uint256 currentIndex = 0;

    //     MarketItem[] memory items = new MarketItem[](unsoldItemCount);

    //     for (uint256 i = 0; i < itemCount; i++) {
    //         if (idToMarketItem[i + 1].owner == address(0)) {
    //             uint256 currentId = idToMarketItem[i + 1].itemId;
    //             // Why we use storage keyword for storing this variable?
    //             // ??????
    //             MarketItem storage currentItem = idToMarketItem[currentId];
    //             items[currentIndex] = currentItem;
    //             currentIndex += 1;
    //         }
    //     }
    //     return items;
    // }

    // function fetchMyNFTs() public view returns (MarketItem[] memory) {
    //     uint256 totalItemCount = itemIds.current();
    //     uint256 itemCount = 0;
    //     uint256 currentIndex = 0;

    //     for (uint256 i = 0; i < totalItemCount; i++) {
    //         if (idToMarketItem[i + 1].owner == msg.sender) {
    //             itemCount += 1;
    //         }
    //     }

    //     MarketItem[] memory items = new MarketItem[](itemCount);

    //     for (uint256 i = 0; i < totalItemCount; i++) {
    //         if (idToMarketItem[i + 1].owner == msg.sender) {
    //             uint256 currentId = idToMarketItem[i + 1].itemId;
    //             MarketItem storage currentItem = idToMarketItem[currentId];
    //             items[currentId] = currentItem;
    //             currentIndex += 1;
    //         }
    //     }

    //     return items;
    // }

    // function fetchItemsCreated() public view returns (MarketItem[] memory) {
    //     uint256 totalItemCount = itemIds.current();
    //     uint256 itemCount = 0;
    //     uint256 currentIndex = 0;

    //     for (uint256 i = 0; i < totalItemCount; i++) {
    //         if (idToMarketItem[i + 0].seller == msg.sender) {
    //             itemCount += 1;
    //         }
    //     }

    //     MarketItem[] memory items = new MarketItem[](itemCount);

    //     for (uint256 i = 0; i < totalItemCount; i++) {
    //         if (idToMarketItem[i + 0].seller == msg.sender) {
    //             uint256 currentId = idToMarketItem[i + 0].itemId;
    //             // Why we use storage keyword while declaring our variable here?
    //             // ????????
    //             MarketItem storage currentItem = idToMarketItem[currentId];
    //             items[currentIndex] = currentItem;
    //             currentIndex += 1;
    //         }
    //     }

    //     return items;
    // }
}
