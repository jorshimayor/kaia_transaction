# Simple KAIA Transaction Script

This repository contains a simple script to perform a value transfer transaction on the Kaia Kairos blockchain network using the `@kaiachain/ethers-ext` library. The script demonstrates how to send KAIA from one address to another and how to handle transaction confirmation.

You can check out more about Kaia development on [kaia-sdk](https://github.com/kaiachain/kaia-sdk/tree/dev)

## Prerequisites

Before running this script, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or later)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Getting Started

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/jorshimayor/kaia-transaction-script.git
cd kaia_transaction
```

### 2. Install Dependencies

Navigate to the project directory and install the required Node.js packages:

```bash
npm install --save @kaiachain/ethers-ext ethers@5
```

### 3. Configure the Script

In the script, you need to provide:

- `recieverAddr`: The address that will receive the KAIA tokens.
- `senderAddr`: The address that will send the KAIA tokens.
- `senderPriv`: The private key of the sender address.
- `provider`: The RPC provider URL for the Kaia Kairos network.

These values are already set in the script for demonstration purposes, but you can modify them as needed.

### 4. Run the Script

After setting up the script, run it using Node.js:

```bash
node transaction.js
```

The script will:

1. Create a transaction to transfer KAIA from `senderAddr` to `recieverAddr`.
2. Send the transaction and log the transaction hash.
3. Wait for the transaction to be confirmed and log the receipt.

### Example Output

```
Sending transaction...
Transaction sent. Hash: 0x123abc...
Waiting for transaction confirmation...
Transaction confirmed. Receipt: { ... }
```

## Error Handling

The script includes basic error handling to catch and log any issues that occur during the transaction process.

## Acknowledgments

This project uses the following libraries:

- [ethers.js](https://github.com/ethers-io/ethers.js/)
- [@kaiachain/ethers-ext](https://www.npmjs.com/package/@kaiachain/ethers-ext)

Feel free to modify the script to suit your needs or contribute to its development!
