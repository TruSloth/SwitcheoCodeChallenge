import { ethers } from "ethers";

const CONTRACT = "0xc0ecb8499d8da2771abcbf4091db7f65158f1468";
const ADDRESSES = [
    "0xb5d4f343412dc8efb6ff599d790074d0f1e8d430",
    "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
    "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392"
];
const CONNECTION_URL = "https://bsc-dataseed1.binance.org/";

const retrieveHolders = async (contractAddress: string, addresses: Array<string>, connectionUrl: string) => {
    const abi = [
        "function balanceOf(address owner) view returns (uint256)",
        "function decimals() view returns (uint8)"
    ];

    const provider = new ethers.providers.JsonRpcProvider(connectionUrl);

    const contract = new ethers.Contract(contractAddress, abi, provider);

    const units = await contract.decimals();

    for (const address of addresses) {
        const balance = await contract.balanceOf(address);

        const formattedBalance = ethers.utils.commify(ethers.utils.formatUnits(balance, units));

        console.log(`${address} ${formattedBalance}`);
    }
}

retrieveHolders(CONTRACT, ADDRESSES, CONNECTION_URL);