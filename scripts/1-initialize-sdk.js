import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import ethers from "ethers";

const nodeUrl = process.env['NODE_URL'];
const privateKey = process.env['PRIVATE_KEY'];
const walletAddress = process.env['WALLET_ADDRESS'];

// Some quick checks to make sure our .env is working.
if (!privateKey?.length) {
  console.log("🛑 Private key not found.");
}

if (!nodeUrl?.length) {
  console.log("🛑 Node [API] URL not found.");
}

if (!walletAddress?.length) {
  console.log("🛑 Wallet Address not found.");
}

// RPC URL, we'll use our QuickNode API URL from our .env file.
// const provider = new ethers.providers.JsonRpcProvider(process.env.QUICKNODE_API_URL);
const provider = new ethers.providers.JsonRpcProvider(nodeUrl);
// Your wallet private key. ALWAYS KEEP THIS PRIVATE, DO NOT SHARE IT WITH ANYONE, add it to your .env file and do not commit that file to github!
const wallet = new ethers.Wallet(privateKey, provider);
const sdk = new ThirdwebSDK(wallet);

(async () => {
  try {
    const address = await sdk.getSigner().getAddress();
    console.log("SDK initialized by address:", address)
  } catch (err) {
    console.error("Failed to get apps from the sdk", err);
    process.exit(1);
  }
})();

// We are exporting the initialized thirdweb SDK so that we can use it in our other scripts
export default sdk;