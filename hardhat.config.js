// require("@nomicfoundation/hardhat-toolbox");
// require("@nomicfoundation/hardhat-chai-matchers");
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

const { POLYGONSCAN_API_KEY } = process.env;

const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/LyM0bTSwrI9D3Y9d2FbR62Guwf1LAO9B",
      accounts: [privateKey]
    },
    mainnet: {
      url: "https://polygon-mainnet.g.alchemy.com/v2/aOKMrN1_cPG7h2iR0FBMm_xVb402Fkg3",
      accounts: [privateKey]
    }
  },
  solidity: {
    compilers: [
      {version: "0.8.4"},
      {version: "0.8.9"}
    ]
  },
  etherscan: {
    apiKey: POLYGONSCAN_API_KEY,
  }
};
