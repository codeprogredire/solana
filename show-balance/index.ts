import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

export const showBalance = async (publicKey: PublicKey) => {
    const connection = new Connection("https://api.devnet.solana.com", "confirmed");
    const response = await connection.getBalance(publicKey);

    // Use optional chaining and nullish coalescing to handle null response
    return response/LAMPORTS_PER_SOL
};

(async()=>{
    const publicKey=new PublicKey("AdhnHMhTjtpxRqptKEhNsXcYMKBycqwoCoc6ycXQE5AD")
    const balance=await showBalance(publicKey)
    console.log(`The balance for the key ${publicKey} is ${balance} SOL`)
})()
