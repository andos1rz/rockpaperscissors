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
let humanChoice = prompt("Choose rock, paper, or scissors:  ");
console.log(getHumanChoice());

function scoring() {
    
}

function singleRound() { 
   /* if (getHumanChoice() == "rock" && getComputerChoice() == "scissors") {
        return "Rock vs. scissors. You win! Play again?"        
    } if (getHumanChoice() == "paper" && getComputerChoice() == "rock") {
        return "Paper vs. rock. You win! Play again?"
    } if (getHumanChoice() == "scissors" && getComputerChoice() == "paper") {
        return "Scissors vs. paper. You win! Play again?"
    } if (getHumanChoice() == getComputerChoice()) 
        return "Draw. Play again?"
    //else 
      //  return "Oops! Something went wrong. Try again?"*/
}
console.log(scoring())