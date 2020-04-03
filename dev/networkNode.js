const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const Blockchain = require("./Blockchain");
const uuid = require("uuid/v1");
const port = 3000;

const nodeAddress = uuid()
  .split("-")
  .join("");

const edcoin = new Blockchain();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {
  res.send(nodeAddress);
});

app.get("/blockchain", function(req, res) {
  res.send(edcoin);
});

app.post("/transaction", function(req, res) {
  const blockIndex = edcoin.createNewTransaction(
    req.body.amount,
    req.body.sender,
    req.body.recipient
  );
  res.json({ note: `Transaction will be added in block ${blockIndex}.` });
});

app.get("/mine", function(req, res) {
  const lastBlock = edcoin.getLastBlock();
  const previousBlockHash = lastBlock["hash"];
  const currentBLockData = {
    transactions: edcoin.pendingTransactions,
    index: lastBlock["index"] + 1
  };
  const nonce = edcoin.proofOfWork(previousBlockHash, currentBLockData);
  const blockHash = edcoin.hashBlock(
    previousBlockHash,
    currentBLockData,
    nonce
  );

  //edcoin.createNewTransaction(12.5, "00", nodeAddress);

  const newBlock = edcoin.createNewBlock(nonce, previousBlockHash, blockHash);

  res.json({
    note: "New block mined successfully",
    block: newBlock
  });
});

// register a node and broadcast it to the network
app.post("/register-and-broadcast-node", function(req, res) {
  const newNodeUrl = req.body.newNodeUrl;
});

// register a node with the network
app.post("/register-node", function(req, res) {});

// register multiple nodes at once
app.post("/register-nodes-bulk", function(req, res) {});

app.listen(port, function() {
  console.log(`Listening on port ${port}...`);
});
