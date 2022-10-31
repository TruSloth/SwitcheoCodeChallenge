"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const CONTRACT = "0xc0ecb8499d8da2771abcbf4091db7f65158f1468";
const ADDRESSES = [
    "0xb5d4f343412dc8efb6ff599d790074d0f1e8d430",
    "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
    "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392"
];
const CONNECTION_URL = "https://bsc-dataseed1.binance.org/";
const retrieveHolders = (contractAddress, addresses, connectionUrl) => __awaiter(void 0, void 0, void 0, function* () {
    const abi = [
        "function balanceOf(address owner) view returns (uint256)",
        "function decimals() view returns (uint8)"
    ];
    const provider = new ethers_1.ethers.providers.JsonRpcProvider(connectionUrl);
    const contract = new ethers_1.ethers.Contract(contractAddress, abi, provider);
    const units = yield contract.decimals();
    for (const address of addresses) {
        const balance = yield contract.balanceOf(address);
        const formattedBalance = ethers_1.ethers.utils.commify(ethers_1.ethers.utils.formatUnits(balance, units));
        console.log(`${address} ${formattedBalance}`);
    }
});
retrieveHolders(CONTRACT, ADDRESSES, CONNECTION_URL);
