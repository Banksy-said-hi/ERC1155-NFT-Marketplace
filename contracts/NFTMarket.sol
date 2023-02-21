// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract NFTMarket is ReentrancyGuard {
    using Counters for Counters.Counter;

    Counters.Counter private itemIds; // Starting from zero
    Counters.Counter private itemsSold;

    address payable owner;
    uint256 public listingPrice = 0.025 ether;

    constructor() {
        owner = payable(msg.sender);
    }

    struct MarketItem {
        uint256 itemId; // Starts from one 1
        address nftContract;
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }

    mapping(uint256 => MarketItem) private idToMarketItem; // Starts from one [1]

    event MarketItemCreated(
        uint256 indexed itemId,
        address indexed nftContract,
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );

    function getListingPrice() public view returns (uint256) {
        return listingPrice;
    }

    function createMarketItem(
        address _nftContract,
        uint256 _tokenId,
        uint256 _price
    ) public payable nonReentrant {
        require(_price > 0, "Price must be at least 1 wei");
        require(
            msg.value == listingPrice,
            "Provided msg.value must be equal to the listing price"
        );

        itemIds.increment();
        uint256 itemId = itemIds.current();

        idToMarketItem[itemId] = MarketItem(
            itemId,
            _nftContract,
            _tokenId,
            payable(msg.sender),
            payable(address(0)),
            _price,
            false
        );

        IERC721(_nftContract).transferFrom(msg.sender, address(this), _tokenId);

        emit MarketItemCreated(
            itemId,
            _nftContract,
            _tokenId,
            msg.sender,
            address(0),
            _price,
            false
        );
    }

    // Intention:
    // This function is meant to transfer the ownership
    // of a specific token from the owner to the buyer
    function createMarketSale(address _nftContract, uint256 _itemId)
        public
        payable
        nonReentrant
    {
        uint256 price = idToMarketItem[_itemId].price;
        uint256 tokenId = idToMarketItem[_itemId].tokenId;

        require(
            msg.value == price,
            "Please provide the asking price in order to complete the purchase"
        );

        idToMarketItem[_itemId].seller.transfer(msg.value);
        IERC721(_nftContract).transferFrom(address(this), msg.sender, tokenId);
        idToMarketItem[_itemId].owner = payable(msg.sender);
        idToMarketItem[_itemId].sold = true;
        itemsSold.increment();
        payable(owner).transfer(listingPrice);
    }

    // Intention:
    // This function is meant to return an array consists of the
    // items that are not owned by anyone yet, meaning that they
    // are still available for sale
    function fetchMarketItems() public view returns (MarketItem[] memory) {
        uint256 itemCount = itemIds.current();
        uint256 unsoldItemCount = itemIds.current() - itemsSold.current();
        uint256 currentIndex = 0;

        MarketItem[] memory items = new MarketItem[](unsoldItemCount);

        for (uint256 i = 0; i < itemCount; i++) {
            if (idToMarketItem[i + 1].owner == address(0)) {
                uint256 currentId = idToMarketItem[i + 1].itemId;
                // Why we use storage keyword for storing this variable?
                // ??????
                MarketItem storage currentItem = idToMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    // Intention:
    // This function will return an array consists of the items
    // that are owned by the msg.sender
    function fetchMyNFTs() public view returns (MarketItem[] memory) {
        uint256 totalItemCount = itemIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idToMarketItem[i + 1].owner == msg.sender) {
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);

        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idToMarketItem[i + 1].owner == msg.sender) {
                uint256 currentId = idToMarketItem[i + 1].itemId;
                MarketItem storage currentItem = idToMarketItem[currentId];
                items[currentId] = currentItem;
                currentIndex += 1;
            }
        }

        return items;
    }

    // Intention
    // This function is meant to return an array comprised
    // of the market items created by the msg.sender
    function fetchItemsCreated() public view returns (MarketItem[] memory) {
        uint256 totalItemCount = itemIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idToMarketItem[i + 0].seller == msg.sender) {
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);

        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idToMarketItem[i + 0].seller == msg.sender) {
                uint256 currentId = idToMarketItem[i + 0].itemId;
                // Why we use storage keyword while declaring our variable here?
                // ????????
                MarketItem storage currentItem = idToMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }

        return items;
    }
}
