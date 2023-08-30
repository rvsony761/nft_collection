require("dotenv").config();
const API_URL = process.env.API_URL;

const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");

//console.log(JSON.stringify(contract.abi));
const contractAddress = "0xE9fA898aB637200Ab98aAcc942e9D5C5bAcFDf40";
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

const ipfsUrls = [
     "https://amber-evil-echidna-338.mypinata.cloud/ipfs/QmZdy62Fvk9Q54qhM49so9SjKkZt2HxarJnP4H2FDB847h?_gl=1*1usxue7*_ga*MTQ1Mzc2MTUyMC4xNjkzNDEzNTEw*_ga_5RMPXG14TE*MTY5MzQxMzUxOC4xLjEuMTY5MzQxNTY4Ni4xNS4wLjA.",
     "https://amber-evil-echidna-338.mypinata.cloud/ipfs/QmYxw8tG9q3dYfC25gkm82X6ZcUHyBUJ2gHj1NLYJSz8p2?_gl=1*1usxue7*_ga*MTQ1Mzc2MTUyMC4xNjkzNDEzNTEw*_ga_5RMPXG14TE*MTY5MzQxMzUxOC4xLjEuMTY5MzQxNTY4Ni4xNS4wLjA.",
     "https://amber-evil-echidna-338.mypinata.cloud/ipfs/QmYmQ9pGWPjeCrW29GcDaHfK7jh8tJDBJcCTkvXVgwpZgk?_gl=1*1usxue7*_ga*MTQ1Mzc2MTUyMC4xNjkzNDEzNTEw*_ga_5RMPXG14TE*MTY5MzQxMzUxOC4xLjEuMTY5MzQxNTY4Ni4xNS4wLjA.",
     "https://amber-evil-echidna-338.mypinata.cloud/ipfs/QmXMWhCJi8WPbZCd8QzHCHMjJjiq3t5WkQkPtizUwdR2XU?_gl=1*1usxue7*_ga*MTQ1Mzc2MTUyMC4xNjkzNDEzNTEw*_ga_5RMPXG14TE*MTY5MzQxMzUxOC4xLjEuMTY5MzQxNTY4Ni4xNS4wLjA.",
   ];
   
//create transaction
async function mintNFT(tokenURI) {
     try {
       const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest"); //get latest nonce
     
       // Create a contract instance
       const MyNft = new web3.eth.Contract(contract.abi, contractAddress);
   
       //the transaction
       const tx = {
         from: PUBLIC_KEY,
         to: contractAddress,
         nonce: nonce,
         gas: 500000,
         data: MyNft.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI(), 
         
       };
     
       const signedTx = await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
       const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
     
       console.log(
         "The transaction was successful. Transaction hash:",
         receipt.transactionHash
       );
     } catch (error) {
       console.log("Something went wrong:", error);
     }
   }
   
   async function mintNFTs() {
     for (let i = 0; i < ipfsUrls.length; i++) {
       await mintNFT(ipfsUrls[i]);
     }
   }  
   mintNFTs();
