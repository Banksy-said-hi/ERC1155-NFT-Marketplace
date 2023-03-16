const { expect } = require("chai");
const { BigNumber } = require("ethers");
const { hexValue } = require("ethers/lib/utils.js");
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

        const [ minter, buyer] = await ethers.getSigners();

        let tokenId = await NFT.tokenIds()
        console.log(`Current Token id is: ${tokenId.toNumber()}`);

        console.log("Minting 50 tokens for the minter...");
        await NFT.mint(50, 'www.google.com', []);
        console.log("Done");

        console.log("========================================================");

        tokenId = await NFT.tokenIds()
        console.log(`Token id increased to: ${tokenId.toNumber()}`);
        let balance = await NFT.balanceOf(minter.address, tokenId.toNumber());
        console.log(`Minter's balance for token id ${tokenId.toNumber()}: ${balance.toNumber()}`);

        console.log("========================================================");

        console.log("Minting 150 tokens again for minter...");
        await NFT.mint(150, 'www.varzesh3.com', [])
        console.log("Done");

        console.log("========================================================");

        tokenId = await NFT.tokenIds()
        console.log(`Token id increased to: ${tokenId.toNumber()}`);

        balance = await NFT.balanceOf(minter.address, tokenId.toNumber());
        console.log(`Minter's balance for token id ${tokenId.toNumber()}: ${balance.toNumber()}`);

        console.log("========================================================");

        console.log('Listing 50 tokens of token id 1 for minter...')
        await market.createMarketItem(NFT.address, 1, 50, 2)
        console.log('Done');

        console.log("========================================================");

        console.log('Listing 150 tokens of token id 2 for minter...')
        await market.createMarketItem(NFT.address, 2, 150, 4)
        console.log('Done');

        console.log("========================================================");

        console.log("Let's check Marketplace's balance after listing")
        balance = await NFT.balanceOf(market.address, 1);
        console.log(`Balance of token Id 1 : ${balance.toNumber()} tokens`)

        balance = await NFT.balanceOf(market.address, 2);
        console.log(`Balance of token Id 2 : ${balance.toNumber()} tokens`)

        console.log("========================================================");

        console.log("Now let's see whether our marketplace's listing function works properly...");
        let pricePerToken1 = await market.pricePerTokenGetter(1);
        console.log(`Price per token for Token Id 1 : ${pricePerToken1.toNumber()} Matic`)

        const pricePerToken2 = await market.pricePerTokenGetter(2);
        console.log(`Price per token for Token Id 2 : ${pricePerToken2.toNumber()} Matic`)

        console.log("========================================================");

        console.log("Buying 20 tokens of token id 1 for the buyer...")

        let price = pricePerToken1.toNumber() * 20
        price = price.toString()
        price = ethers.utils.parseEther(price)

        await market.connect(buyer).createMarketSale(NFT.address, 1, 20, {value: price});
        console.log("Done")
        console.log("========================================================");

        console.log("Again checking balance of buyer for token id 1");
        balance = await NFT.balanceOf(buyer.address, 1);
        console.log(`Balance of the buyer for token Id 1 : ${balance.toNumber()} tokens`)

        console.log("========================================================");

        console.log("Buying 30 more tokens of token id 1 for the buyer...")

        price = pricePerToken1.toNumber() * 30
        price = price.toString()
        price = ethers.utils.parseEther(price)

        await market.connect(buyer).createMarketSale(NFT.address, 1, 30, {value: price});
        console.log("Done")

        console.log("========================================================");

        console.log("Again checking balance of buyer for token id 1");
        balance = await NFT.balanceOf(buyer.address, 1);
        console.log(`Balance of the buyer for token Id 1 : ${balance.toNumber()} tokens`)

    })
})