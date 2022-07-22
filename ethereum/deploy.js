require('dotenv').config({ path: '../.env' });
 
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledACert = require('./build/certificate.json');
const provider = new HDWalletProvider(
  //'enter metamask pass phrase',
  // remember to change this to your own phrase!
  'http://192.168.35.33:8545'
  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    let txn;
    console.log('Attempting to deploy using account ' + accounts[0]);
    console.log('abi ' + compiledACert.abi); 
//    console.log('bytecode ' + compiledABox.evm.bytecode.object); 
    try{
      txn = await new web3.eth.Contract(compiledACert.abi)
          .deploy({ data: '0x' + compiledACert.evm.bytecode.object })
          .send({ from: accounts[0] });
    }
    catch(err){
      console.log(err.message);
    }
 
    console.log('Contract is at ' + txn.options.address);
    //provider.engine.stop();
};
deploy();
