const {interface,bytecode} = require('../compile');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const sjcl = require('sjcl')

module.exports = {

  deploy: async function deploy(sendingAddress) {
      const gasPrice = await web3.eth.getGasPrice();
      console.log("Gas Price is: " + gasPrice);

      const transart = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data:bytecode})
        .send({from: sendingAddress, gas:2000000});

      console.log('Request sent from: ',sendingAddress)
      console.log('Contract deployed to address: ',transart.options.address);
  },

  addRecord: async (sendingAddress, contractAddress, code, field1, field2, field3,
                    field4, field5)=>{
      let deployedContract= await new web3.eth.Contract(contract.abi,contractAddress);
      var to_hash = {
                      "code": code,
                      "field1": field1,
                      "field2": field2,
                      "field3": field3,
                      "field4": field4,
                      "field5": field5
                    };
      console.log("RECORD: ", to_hash);

      var out = sjcl.hash.sha256.hash(to_hash);
      var hash = sjcl.codec.hex.fromBits(out)
      console.log("Hash produced: ",hash);

      let reciept = await  deployedContract.methods.registerArtwork(code, to_hash)
            .send({from:sendingAddress,gas:2000000})

      console.log("Hash successfully pushed to contract at address: ", contractAddress);
    }

}
