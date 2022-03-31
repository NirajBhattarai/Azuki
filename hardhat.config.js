require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/7cd4731a3be74a6ab7c32fe799ab3177",
      accounts: ["8c8788b949844cc4ad74f2e1c214c2b6b3b923f0941924b7b1c87605df64bd3a"],
      chainId: 4,
      live: true,
      saveDeployments: true,
      // tags: ["staging"],
      // gasPrice: 5000000000,
      // gasMultiplier: 2,
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/7cd4731a3be74a6ab7c32fe799ab3177`,
      accounts: ["1f8701c77fa5038ff7b0297d81ba331cc1039788624235f7f3ec75d08c41e5e2"],
      gasPrice: 120 * 1000000000,
      // chainId: 1,
    },
  },
  solidity: {
    version: "0.8.1",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    // tests: "./test",s
    cache: "./cache",
    artifacts: "./artifacts"
  },
  etherscan: {
    apiKey: "6F2QV99DME1GBEHFT668GJ64M948SMT75N",
  },
  mocha: {
    timeout: 20000
  }
};