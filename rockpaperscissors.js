// make computer randomly return string "rock", "paper", or "scissors" ---DONE---
// get human input of either "rock", "paper", or "scissors" ---DONE---
// write a system to keep score between rounds
// write the logic to play a single round
// write the logic to play an entire game of x rounds

function getComputerChoice() {
    switch (Math.floor(Math.random() * 3) + 1) {
        case 1:
            return "rock"
        case 2:
            return "paper"
        case 3:
            return "scissors"
    }
}
console.log(getComputerChoice())

function getHumanChoice() {
    return humanChoice.toLowerCase();
}
let humanChoice = prompt("Rock, paper, scissors!");
console.log(getHumanChoice());

function scoring() {
    
}