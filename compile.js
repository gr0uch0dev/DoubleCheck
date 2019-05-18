// require imports the library i need
const path = require('path'); // path is to avoid problems with different machines
const fs = require('fs');
const solc = require('solc');

// __dirname is the working directory in JS
const doubleCheck = path.resolve(__dirname,'contracts','DoubleCheck.sol');
const source = fs.readFileSync(doubleCheck,'utf8');
// give the source to solc.compile and specify how many contracts to compile

// export the bytecode and ABI inside module export
module.exports = solc.compile(source,1).contracts[':DoubleCheck'];
// in this way we can use the statement: const {interface,bytecode} = require('./compile');
