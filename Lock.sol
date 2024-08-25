// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CoinFlip {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function flip(bool _guess) public payable {
        require(msg.value > 0, "You need to send some BNB to play");

        // Generate a random number
        bool result = (block.timestamp % 2) == 0;

        // If guess is correct, send back double the amount
        if (_guess == result) {
            payable(msg.sender).transfer(msg.value * 2);
        }
    }

    // To withdraw funds from the contract
    function withdraw() public {
        require(msg.sender == owner, "Only the owner can withdraw funds");
        payable(owner).transfer(address(this).balance);
    }

    // Fallback function to receive BNB
    receive() external payable {}
}
