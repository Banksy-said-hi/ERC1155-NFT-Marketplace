const hre = require("hardhat");
const { ethers } = require("hardhat");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

// Make sure to use localhost while runnning this script to prevent chaos
// Also pay attention to the node terminal
// *******


async function main() {
  // const NFTMarket = await hre.ethers.getContractFactory("NFTMarket");
  // const nftmarket = await NFTMarket.deploy();
  // await nftmarket.deployed();
  // console.log("*************************************");
  // console.log(`NFT Marketplace is deployed on the address below: \n \n ${nftmarket.address} \n `);

  console.log("*************************************");
  const Marketplace = await ethers.getContractFactory("Marketplace");
  const marketplace = await Marketplace.deploy();
  await marketplace.deployed();
  console.log(`Marketplace smart contract is deployed on the address below: \n \n ${marketplace.address} \n `);

  console.log("*************************************");
  const F_NFT = await ethers.getContractFactory("F_NFT");
  const f_nft = await F_NFT.deploy(marketplace.address);
  await f_nft.deployed();
  console.log(`Fractional NFT minting smart contract is deployed on the address below: \n \n ${f_nft.address} \n `);

  console.log("*************************************");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
