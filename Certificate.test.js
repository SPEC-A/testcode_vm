require('dotenv').config({ path: '../.env' });

const assert = require('assert');
const ganache = require('ganache-cli');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const compileCert = require('../ethereum/build/certificate.json');

const Web3 = require('web3');
const provider = new Web3.providers.HttpProvider("http://192.168.35.166:8545");
const web3 = new Web3(provider);

/* current time */
const moment = require('moment');
const { SSL_OP_EPHEMERAL_RSA } = require('constants');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");

let accounts = [];
let certAddress = null;
let cert = null;
let aMoment;


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let myaccount_1, myaccount_2, gasValue;
beforeEach(async () => {

    console.log(moment().format('YYYY-MM-DD HH:mm:ss'));
    accounts = await web3.eth.getAccounts();
    console.log(accounts);
    myaccount_1 = accounts[1];
    myaccount_2 = accounts[2];
    gasValue = '5000000';

    const cert = new web3.eth.Contract(
        compiledCert.abi,
        '0x74ca7B27e7074Bd9051552AB6eC6770826dB231B' //attach abi hash
    );
    console.log("Gas Price: ")
    web3.eth.getGasPrice().then(console.log);

    console.log(myaccount_1);

    console.log(moment().format('YYYY-MM-DD HH:mm:ss'));
});
