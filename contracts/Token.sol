// SPDX-License-Identifier: MIT

pragma solidity >=0.4.22 <0.9.0;

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";



contract Token is ERC20 {
    address public owner;
    constructor(uint256 amount) ERC20("leprogrammeurmarocain","lprm") {
        owner = msg.sender;
        _mint(owner, amount);
    }

    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }
}

