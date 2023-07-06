require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");
require('dotenv').config();
require("xdeployer");
//require('hardhat-dependency-compiler'); // extra (e.g. test) contract compilation

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 
 module.exports = {
  networks: {
    localhost: {
      //Requires start of local network at port:
      url: "http://127.0.0.1:8545"
    },
    hardhat: {},
    polygon: {
      url: "https://polygon-rpc.com/",
      //Consider any address posted here to be compromised
      //accounts: [""]
    },
/*
    ropsten: {
      url: process.env.ROPSTEN_URL,
      //Consider any address posted here to be compromised
      accounts: [process.env.PRIVATE_KEY_1,process.env.PRIVATE_KEY_2]
    }
*/
  },
/*
  xdeploy: {
    contract: "CErc20Delegator",
    constructorArgsPath: "./scripts/verificationArgs/bdUSDCArguments.js",
    salt: "UwU",
    signer: process.env.PRIVATE_KEY_1,
    networks: ["ropsten"],
    rpcUrls: [process.env.ROPSTEN_URL],
    gasLimit: 6 * 10 ** 6,
  },
*/
  solidity: {
    compilers: [
      {
        version: "0.8.10",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        },
      },
      {
        version: "0.8.1",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        },
      },
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        },
      }
    ],
  },
  paths: {
    tests: './test', //default
    sources: './contracts',  //default
  },
  /*
  dependencyCompiler: {
    paths: [ // relative to a subdirectory of 'sources' directory above
      'test/ComptrollerHarness.sol',
    ]
  },
  */
  mocha: {
    timeout: 10000000000
  },
  gasReporter: {
    enabled: false,
    currency: 'USD',
    gasPriceApi: "https://api.etherscan.io/api?module=proxy&action=eth_gasPrice"
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY
  }
};
