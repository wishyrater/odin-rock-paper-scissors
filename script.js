// print hello world to the console
console.log("hello world");

NUM_ROUNDS = 5;

// create a function to randomly generate a computer choice
function getComputerChoice() {
    let randNumber = Math.floor(Math.random() * 3);
    let computerChoice;
    if (randNumber == 0){
        computerChoice = "Rock";
    } else if (randNumber == 1){
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissor";
    }
    return computerChoice;
}

// create a function to get the human choice as input
function getHumanChoice() {
    let humanChoice = prompt("Rock... paper... scissor!");
    return humanChoice;
}

function playGame() {
    // initialize the empty scores
    let humanScore = 0;
    let computerScore = 0;

    // define the function to play a single round
    function playRound(humanChoice, computerChoice) {

        // convert the choices to lowercase so we can reliably compare them
        let humanChoiceLower = humanChoice.toLowerCase();
        let computerChoiceLower = computerChoice.toLowerCase();
        
        // determine the winner of this roudn and increment their score
        if (humanChoiceLower == "rock" & computerChoiceLower == "scissor") {
            return humanScore++;
        } else if (humanChoiceLower == "scissor" & computerChoiceLower == "paper") {
            return humanScore++;
        } else if (humanChoiceLower == "paper" & computerChoiceLower == "rock") {
            return humanScore ++;
        } else if (humanChoiceLower == computerChoiceLower){
            return;
        } else {
            return computerScore ++;
        }
    }

    // iterate for the specified number of rounds
    for (let i = 0; i < NUM_ROUNDS; i++) {
        // get the choices of the player and the computer
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log("Computer choice: ", computerChoice);
        console.log("Human choice: ", humanChoice);

        // play a round
        playRound(humanChoice, computerChoice);
        console.log("Computer score: ", computerScore);
        console.log("Human score: ", humanScore);
    }

    // determine the winner and print it to the screen
    if (humanScore > computerScore) {
        console.log("Human wins!");
    } else if (humanScore < computerScore) {
        console.log("Computer wins!");
    } else {
        console.log("Tie!");
    }
    return;
}

playGame();