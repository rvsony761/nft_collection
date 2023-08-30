// /*
// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// /*
// module.exports = {
//   solidity: "0.8.19",
// };
// */

// /**
//  * @type import('hardhat/config').HardhatUserConfig
//  */
//  require("dotenv").config();
//  require("@nomiclabs/hardhat-ethers");
//  require("@nomiclabs/hardhat-etherscan");
//  const { PRIVATE_KEY } = process.env;
//  module.exports = {
//    solidity: "^0.8.9",
//    defaultNetwork: "Mumbai",
//    networks: {
//      hardhat: {},
//      Mumbai: {
//        url: "https://polygon-mumbai.g.alchemy.com/v2/WPuwn-vO7AmfAzsIpEQAsHRwoZ5f-WPC",
//        accounts: [`0x${PRIVATE_KEY}`]
//      },
//    },
//    etherscan: {
//      // Your API key for Etherscan
//      // Obtain one at https://etherscan.io/
//      apiKey: "WPuwn-vO7AmfAzsIpEQAsHRwoZ5f-WPC"
//    }
//  };
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require("dotenv").config();
 require("@nomiclabs/hardhat-ethers");
 const { API_URL, PRIVATE_KEY } = process.env;
 module.exports = {
   solidity: "0.8.9",
   defaultNetwork: "Mumbai",
   networks: {
     hardhat: {},
     Mumbai: {
       url: "https://polygon-mumbai.g.alchemy.com/v2/WPuwn-vO7AmfAzsIpEQAsHRwoZ5f-WPC",
       accounts: [`0x${PRIVATE_KEY}`]
     },
   },
 };