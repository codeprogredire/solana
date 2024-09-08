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
exports.showBalance = void 0;
const web3_js_1 = require("@solana/web3.js");
const showBalance = (publicKey) => __awaiter(void 0, void 0, void 0, function* () {
    const connection = new web3_js_1.Connection("https://api.devnet.solana.com", "confirmed");
    const response = yield connection.getBalance(publicKey);
    // Use optional chaining and nullish coalescing to handle null response
    return response / web3_js_1.LAMPORTS_PER_SOL;
});
exports.showBalance = showBalance;
(() => __awaiter(void 0, void 0, void 0, function* () {
    const publicKey = new web3_js_1.PublicKey("AdhnHMhTjtpxRqptKEhNsXcYMKBycqwoCoc6ycXQE5AD");
    const balance = yield (0, exports.showBalance)(publicKey);
    console.log(`The balance for the key ${publicKey} is ${balance} SOL`);
}))();
