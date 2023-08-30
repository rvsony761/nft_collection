async function main() {
     const MyNFT = await ethers.getContractFactory("MyNFT");
   
     // Start deployment, returning a promise that resolves to a contract object
     const myNFT = await MyNFT.deploy();
     console.log("Contract deployed to address:", myNFT.address);
   }
   
   main()
     .then(() => process.exit(0))
     .catch((error) => {
       console.error(error);
       process.exit(1);
     });
     //on mumbai 0xE9fA898aB637200Ab98aAcc942e9D5C5bAcFDf40
     // on local 0x5FbDB2315678afecb367f032d93F642f64180aa3