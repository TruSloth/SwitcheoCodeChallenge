const { ethers } = require("ethers");
const GetBalancesUtility = require("../build/contracts/Utility.json");

const ADDR = GetBalancesUtility.networks[1].address;   // your contract address
const ABI = GetBalancesUtility.abi;    // your contract ABI

const ADDRESS = "0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe"; // some wallet address with token balance
const TOKENS = [    // token contract addresses
	"0x70c18F2fDcb00d27494f767503874788e35c9940", // lenusd.shop
	"0x34748FEDAd669C788aaBe4fb325A4587941F7B48", // TOSA INU 
    "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07" // OMG Network
];

// you can use your own RPC provider url (no need to deploy to mainnet)
const provider = ethers.providers.getDefaultProvider("http://localhost:8545");

const test = async () => {
	const contract = new ethers.Contract(ADDR, ABI, provider);

    const balances = await contract.getBalances(ADDRESS, TOKENS);
	
	return balances;
};

test().then(console.log);