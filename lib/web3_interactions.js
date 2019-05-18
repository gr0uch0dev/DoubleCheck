const fs = require('fs');
const contract = JSON.parse(fs.readFileSync('./build/contracts/TransArt.json', 'utf8'));
const {interface,bytecode} = require('../compile');
const utils = require('./utils.js')
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

module.exports = {

  deploy: async function deploy(sendingAddress) {
      const gasPrice = await web3.eth.getGasPrice();
      console.log("Gas Price is: " + gasPrice);

      const transart = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data:bytecode})
        .send({from: sendingAddress, gas:2000000});

      console.log('Request sent from: ',sendingAddress)
      console.log('Contract deployed to address: ',transart.options.address);
  }

}
