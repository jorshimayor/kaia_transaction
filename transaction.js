const ethers = require("ethers");
const { Wallet, JsonRpcProvider, TxType, parseKaia } = require("@kaiachain/ethers-ext");

const recieverAddr = "0x71be1ed5a10c502ce95fb66651d145664acd1716";
const senderAddr = "0xc2385c40c1f2105f238b22489eb7497ba6221bf7";
const senderPriv = "0x380b1b0b3d1568b68a68fecaf769ef647066998e756b6a4903291a891eb15fd8";

const provider = new JsonRpcProvider(
  "https://public-en-kairos.node.kaia.io"
);
const wallet = new Wallet(senderPriv, provider);

async function main() {
  try {
    const tx = {
      type: TxType.ValueTransfer,
      from: senderAddr,
      to: recieverAddr,
      value: parseKaia("0.1"),
    };

    console.log("Sending transaction...");
    const sentTx = await wallet.sendTransaction(tx);
    console.log("Transaction sent. Hash:", sentTx.hash);

    console.log("Waiting for transaction confirmation...");
    const receipt = await sentTx.wait();
    console.log("Transaction confirmed. Receipt:", receipt);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();
