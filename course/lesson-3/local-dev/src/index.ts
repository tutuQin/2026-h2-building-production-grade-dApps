import { ethers, JsonRpcProvider } from "ethers";


async function main() {

    const provider = new JsonRpcProvider("http://localhost:8545");
    const privateKey = "0x5fb92d6e98884f76de468fa3f6278f8807c48bebc13595d45af5bdc4da702133";
    const wallet = new ethers.Wallet(privateKey, provider);
    const address = wallet.address;
    const balance = await provider.getBalance(wallet.address);
    console.log(`Balance of ${address}: ${ethers.formatEther(balance)} ETH`);
}
main();
