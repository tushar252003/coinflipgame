require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.0",
  networks: {
    bsctestnet: {
      url: `https://data-seed-prebsc-1-s1.binance.org:8545/`,
      accounts: [`0x13f918023029e64f25a755326c92fe69913fcf2c5df7d9faadb09fd4e2e09546`]

    }
  }
};
