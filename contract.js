import { readFileSync } from "fs"
import { web3, networkGas } from "./network.js"

export const contractAddress = JSON.parse(readFileSync(`gen/contract.json`)).contractAddress

export const abi = JSON.parse(readFileSync(`gen/SmartContract_sol_SimpleStorage.abi`))
export const bin = `${readFileSync(`gen/SmartContract_sol_SimpleStorage.bin`).toString()}`
export const contract = new web3.eth.Contract(abi, contractAddress)

export const Interactor = {
    get: async () => await contract.methods.get().call(),
    incr: async (from, val) => await contract.methods.incr(val).send({
        from: from,
        gas: networkGas,
        val: web3.utils.toWei(`${val}`)
    }),
    set: async (from, val) => await contract.methods.set(val).send({
        from: from,
        gas: networkGas,
        val: web3.utils.toWei(`${val}`)
    })
}