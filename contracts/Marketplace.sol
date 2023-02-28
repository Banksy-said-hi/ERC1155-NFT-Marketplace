// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract Marketplace is ReentrancyGuard {
    using Counters for Counters.Counter;

    Counters.Counter private itemIds; // Starting from one
    Counters.Counter private itemsSold;

    mapping(uint256 => MarketItem) private idToMarketItem; // Starts from one [1]

    // Sina Design
    mapping(address => mapping(uint => uint)) public pricePerTokenId; // contract address => token ID => price

    function priceGetter(
        address _contract,
        uint _tokenId
    ) public view returns (uint) {
        return pricePerTokenId[_contract][_tokenId];
    }

    struct MarketItem {
        uint256 itemId; // Starts from one 1
        address nftContract;
        uint256 tokenId;
        uint256 amount;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }

    event MarketItemCreated(
        uint256 indexed itemId,
        address indexed nftContract,
        uint256 indexed tokenId,
        uint256 amount,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );

    function onERC1155Received(
        address,
        address,
        uint256,
        uint256,
        bytes memory
    ) public virtual returns (bytes4) {
        return this.onERC1155Received.selector;
    }

    function createMarketItem(
        address _nftContract,
        uint256 _tokenId,
        uint256 _amount,
        uint256 _price
    ) public nonReentrant {
        itemIds.increment();
        uint256 itemId = itemIds.current();

        idToMarketItem[itemId] = MarketItem(
            itemId,
            _nftContract,
            _tokenId,
            _amount,
            payable(msg.sender),
            payable(address(0)),
            _price,
            false
        );

        IERC1155(_nftContract).safeTransferFrom(
            msg.sender,
            address(this),
            _tokenId,
            _amount,
            ""
        );

        emit MarketItemCreated(
            itemId,
            _nftContract,
            _tokenId,
            _amount,
            msg.sender,
            address(0),
            _price,
            false
        );

        // Sine Design
        pricePerTokenId[_nftContract][_tokenId] = _price;
    }

    function createMarketSale(
        address _nftContract,
        uint256 _itemId
    ) public payable nonReentrant {
        uint256 price = idToMarketItem[_itemId].price;
        uint256 tokenId = idToMarketItem[_itemId].tokenId;
        uint256 amount = idToMarketItem[_itemId].amount;

        require(
            msg.value == price,
            "Please provide the asking price in order to complete the purchase"
        );

        idToMarketItem[_itemId].seller.transfer(msg.value);
        ERC1155(_nftContract).safeTransferFrom(
            address(this),
            msg.sender,
            tokenId,
            amount,
            ""
        );
        idToMarketItem[_itemId].owner = payable(msg.sender);
        idToMarketItem[_itemId].sold = true;
        itemsSold.increment();

        // Sina Design
        pricePerTokenId[_nftContract][tokenId] = 0;
    }

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
