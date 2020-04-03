const Blockchain = require('./Blockchain');

const bitcoin = new Blockchain();

console.log(bitcoin);

// bitcoin.createNewBlock(234234234, 'L3K4ML5K3MLK4M34KL', 'O3J43I4J3JNJ3NK3J434N');

// bitcoin.createNewTransaction(100, 'JUAN343ML34MLK3ML4KM', 'PEDRO2K4MK32ML4KM3443');

// bitcoin.createNewBlock(543553454, 'KM4LKM55KML4M55LK454', '45KJHJ54JHB5JH45B54BJ4H5');

// bitcoin.createNewTransaction(50, 'JUAN343ML34MLK3ML4KM', 'PEDRO2K4MK32ML4KM3443');
// bitcoin.createNewTransaction(300, 'JUAN343ML34MLK3ML4KM', 'PEDRO2K4MK32ML4KM3443');
// bitcoin.createNewTransaction(2000, 'JUAN343ML34MLK3ML4KM', 'PEDRO2K4MK32ML4KM3443');

// bitcoin.createNewBlock(763452453, '345NK34N5K4JNJ3K5N34K', '34LKN3K4MLK3ML4KM3LKM');

// const previousBlockHash = '34KN34N3JN4KJN3KJ4NKJ3NJK43N43KJN3KJN4K3JN4KJ3NKJ4NK3JN4K3';
// const currentBlockData = [
//     {
//         amount: 10,
//         sender: 'JUAN343ML34MLK3ML4KM',
//         recipient: 'PEDRO2K4MK32ML4KM3443'
//     },
//     {
//         amount: 30,
//         sender: 'JUAN343ML34MLK3ML4KM',
//         recipient: 'PEDRO2K4MK32ML4KM3443'
//     }, {
//         amount: 200,
//         sender: 'JUAN343ML34MLK3ML4KM',
//         recipient: 'PEDRO2K4MK32ML4KM3443'
//     }
// ];

// console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, 49244));

// console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));

//console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));

// console.log(bitcoin);
// console.log(bitcoin.chain[2]);