import { web3, account, networkGas } from "./network.js"
import { bin } from "./contract.js"
import { writeFileSync } from "fs"

(async () => {
    // deploying contract to local network
    const contract = await web3.eth.sendTransaction({
        from: account.address,
        gas: networkGas,
        data: bin,
    })

    // write the result to be fetched later
    writeFileSync(`gen/contract.json`, JSON.stringify(contract))
})()