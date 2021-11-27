// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.10;

contract SimpleStorage {
    uint storedData;

    // receive() needed for receiving coin
    receive() external payable {

    }

    function set(uint val) public {
        storedData = val;
    }

    function incr(uint val) public {
        storedData+=val;
    }

    function get() public view returns (uint) {
        return storedData;
    }
}