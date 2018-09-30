const Block  = require('./Block.js')
const Blockchain  = require('./Blockchain.js')

let savjeeCoin = new Blockchain();
savjeeCoin.addBlock(new Block(1, "09/30/2018", { amount: 4 }));
savjeeCoin.addBlock(new Block(2, "09/25/2018", { amount: 10 }));
console.log('Is blockchain valid? ' + savjeeCoin.isChainValid());

savjeeCoin.chain[1].data = { amount: 100 };
savjeeCoin.chain[1].hash = savjeeCoin.chain[1].calculateHash();

console.log('Is blockchain valid? ' + savjeeCoin.isChainValid());

//console.log(JSON.stringify(savjeeCoin, null, 4));