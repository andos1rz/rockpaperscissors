// make computer randomly return string "rock", "paper", or "scissors" ---DONE---
// get human input of either "rock", "paper", or "scissors" ---DONE---
// write a system to keep score between rounds ---DONE---
// write the logic to play a single round ---DONE---
// write the logic to play an entire game of x rounds 

function playGame() {
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
    const computerChoice = getComputerChoice();
    
    function getHumanChoice() {
        return humanChoice.toLowerCase();
    }
    const humanChoice = prompt("Choose rock, paper, or scissors:  ");
    
    function singleRound() { 
        const win = "win";
        const lose = "lose";
        const draw = "draw"; 
        const error = "error";
        
        if (getHumanChoice() == "rock" && computerChoice == "scissors") {
            return win     
        } if (getHumanChoice() == "paper" && computerChoice == "rock") {
            return win
        } if (getHumanChoice() == "scissors" && computerChoice == "paper") {
            return win
        } if (getHumanChoice() == computerChoice) {
            return draw
        } if (getHumanChoice() != "rock" && getHumanChoice() != "paper" && getHumanChoice() != "scissors") {
            return error 
        } else 
            return lose
    }
    function scoring() {
        // on a human win increment the humanScore by 1, on a loss increment computerScore by 1
        // output both scores
        const result = singleRound();
        let message = "";
        if (result == "win") {
            humanScore ++;
            message = `${getHumanChoice()} vs. ${computerChoice}. You win!`;
        } if (result == "lose") {
            computerScore ++;
            message = `${getHumanChoice()} vs. ${computerChoice}. You lose.`;
        } if (result == "draw") {
            message = `${getHumanChoice()} vs. ${computerChoice}. Draw! Try again.`;
        } if (result == "error") {
            message = "Please input a vaild choice - rock, paper, or scissors."
        }
        let totalScore = `Score: ${humanScore} - ${computerScore}`;   
        return `${message} ${totalScore}`
    }
    let humanScore = 0;
    let computerScore = 0;
    console.log(scoring());

    
}    