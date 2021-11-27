import { web3, account, secondAccount, networkGas } from "./network.js"
import { Interactor, contractAddress } from "./contract.js"

let accWei = await web3.eth.getBalance(account.address)
let conWei = await web3.eth.getBalance(contractAddress)
console.log('before', web3.utils.fromWei(accWei), web3.utils.fromWei(conWei))

// await Interactor.incr(secondAccount, 10)
await web3.eth.sendTransaction({
    from: account.address,
    gas: networkGas,
    to: contractAddress,
    value: web3.utils.toWei(`10`),
})
console.log(await Interactor.get())
accWei = await web3.eth.getBalance(account.address)
conWei = await web3.eth.getBalance(contractAddress)

console.log('after', web3.utils.fromWei(accWei), web3.utils.fromWei(conWei))