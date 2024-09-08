import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js"


export const airdrop =async (address:string, amount:number)=>{
    const publicKey=new PublicKey(address)
    const connection=new Connection("https://api.devnet.solana.com","confirmed")

    //Request an airdrop
    const signature=await connection.requestAirdrop(publicKey,amount*LAMPORTS_PER_SOL)
                    await connection.confirmTransaction(signature)


}

airdrop("AdhnHMhTjtpxRqptKEhNsXcYMKBycqwoCoc6ycXQE5AD",1)