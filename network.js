import Web3 from "web3"
import { readFileSync } from "fs"

let ganache
try {
    ganache = JSON.parse(readFileSync(`gen/ganache.json`))
} catch(e) {
    ganache = {}
}

const privateKeys = Object.keys(ganache.private_keys)
    .map(e => ganache.private_keys[e])
    .map(e => `0x${e}`)

export const web3 = new Web3(`http://localhost:8545`)
export const account = web3.eth.accounts.privateKeyToAccount(privateKeys[0])
export const secondAccount = web3.eth.accounts.privateKeyToAccount(privateKeys[1])
export const networkGas = 6721975