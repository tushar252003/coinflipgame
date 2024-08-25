let web3;
let contract;
const contractAddress = "YOUR_CONTRACT_ADDRESS";
const abi =[ {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": 
      {
        "internalType": "bool",
        "name": "_guess",
        "type": "bool"
      }
  }]

async function connectWallet() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        contract = new web3.eth.Contract(abi, contractAddress);
    } else {
        alert("Please install MetaMask!");
    }
}

async function flipCoin(guess) {
    const accounts = await web3.eth.getAccounts();
    const amount = web3.utils.toWei(document.getElementById('amount').value, 'ether');

    contract.methods.flip(guess).send({ from: accounts[0], value: amount })
        .on('receipt', function(receipt){
            console.log("Transaction successful", receipt);
        })
        .on('error', function(error){
            console.error("Transaction failed", error);
        });
}
