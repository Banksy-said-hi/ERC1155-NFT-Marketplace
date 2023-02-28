const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Marketplace", () => {
    it("Should create items and execute market sales", async () => {
        console.log("========================================================");
        const Market = await ethers.getContractFactory("Marketplace");
        const market = await Market.deploy()
        await market.deployed();
        console.log(`Marketplace smart contract => ${market.address}`);

        const nft = await ethers.getContractFactory("F_NFT");
        const NFT = await nft.deploy(market.address)
        await NFT.deployed();
        console.log(`NFT creation smart contract => ${NFT.address}`);

        console.log("========================================================");

        const [minter, buyer] = await ethers.getSigners();
        const auctionPrice = ethers.utils.parseUnits('100', 'ether');
        let tokenId = await NFT.tokenIds()
        console.log(`Current Token id is: ${tokenId.toNumber()}`);

        console.log("Minting 50 tokens for the minter...");
        await NFT.mint(50, 'www.google.com', []);
        console.log("Minted");

        tokenId = await NFT.tokenIds()
        console.log(`Token id increased to: ${tokenId.toNumber()}`);

        let balance = await NFT.balanceOf(minter.address, tokenId.toNumber());
        console.log(`Minter's balance for token id ${tokenId.toNumber()}: ${balance.toNumber()}`);

        console.log("Minting 150 tokens again for minter...");
        await NFT.mint(150, 'www.varzesh3.com', [])
        console.log("Minted");

        tokenId = await NFT.tokenIds()
        console.log(`Token id increased to: ${tokenId.toNumber()}`);

        balance = await NFT.balanceOf(minter.address, tokenId.toNumber());
        console.log(`Minter's balance for token id ${tokenId.toNumber()}: ${balance.toNumber()}`);

        console.log("========================================================");

        console.log('Listing 50 tokens of token id 1 for minter...')
        await market.createMarketItem(NFT.address, 1, 50, auctionPrice)
        console.log('done');

        console.log('Listing 150 tokens of token id 2 for minter...')
        await market.createMarketItem(NFT.address, 2, 150, auctionPrice)
        console.log('done');

        console.log("========================================================");
        console.log("Buying all the tokens of the marketplace with token id 1 for the buyer...")
        await market.connect(buyer).createMarketSale(NFT.address, 1, {value: auctionPrice})
        console.log("Bought");

        console.log("========================================================");
        console.log("Now buyer's balance should be 50 for the token id 1, but 0 for token id 2...")

        balance = await NFT.balanceOf(buyer.address, tokenId.toNumber());
        console.log(`buyer's balance for token id ${tokenId.toNumber()}: ${balance.toNumber()}`);


        balance = await NFT.balanceOf(buyer.address, 1);
        console.log(`However, buyer's balance for token id 1: ${balance.toNumber()}`);
        console.log("========================================================");
        console.log("Fetching the price of marketplace items... \n");
        let response = await market.pricePerTokenId(NFT.address, 2)
        console.log("Token id 2: ",ethers.utils.formatEther(response), "Matic \n")

        response = await market.pricePerTokenId(NFT.address, 1);
        console.log("Token id 1: ", ethers.utils.formatEther(response), "Matic \n")


        // let items = await market.fetchMarketItems()

        // items = await Promise.all(items.map(async i => {
        //     const tokenUri = await NFT.uri(i.tokenId);
        //     let item = {
        //         price: i.price.toString(),
        //         tokenId: i.tokenId.toString(),
        //         seller: i.seller,
        //         owner: i.owner,
        //         tokenUri
        //     }
        //     return item
        // }))


        // console.log("items:", items)
    })
})