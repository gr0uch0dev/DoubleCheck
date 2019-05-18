// require imports the library i need
const path = require('path'); // path is to avoid problems with different machines
const fs = require('fs');
const solc = require('solc');

// __dirname is the working directory in JS
const tokenizeDB = path.resolve(__dirname,'contracts','nonERC.sol');
console.log(tokenizeDB);
const source = fs.readFileSync(tokenizeDB,'utf8');
console.log(source);
// give the source to solc.compile and specify how many contracts to compile

// export the bytecode and ABI inside module export
console.log(solc.compile(source,1));
console.log("OUT Compilation: ", solc.compile(source,1).contracts[':nonERC'])
module.exports = solc.compile(source,1).contracts[':nonERC'];
// in this way we can use the statement: const {interface,bytecode} = require('./compile');
