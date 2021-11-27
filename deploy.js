import { web3, account, networkGas } from "./network.js"
import { bin, Interactor } from "./contract.js"
import { writeFileSync } from "fs"

(async () => {
    const contract = await web3.eth.sendTransaction({
        from: account.address,
        gas: networkGas,
        data: bin,
    })

    writeFileSync(`gen/contract.json`, JSON.stringify(contract))
})()