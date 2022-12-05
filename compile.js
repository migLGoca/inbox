// compile code will go here

const path = require('path'); // constroi um path do compile.js para o Inbox.sol
const fs = require('fs');
const solc = require('solc');


const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol'); // gera um path para o Inbox.sol na pasta contracts
const source = fs.readFileSync(inboxPath, 'utf8');

module.exports = solc.compile(source,1).contracts[':Inbox'];

