// print hello world to the console
console.log("hello world");

const NUM_ROUNDS = 5;

// create a function to randomly generate a computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    const randIndex = Math.floor(Math.random() * 3);
    return choices[randIndex];
}

// create a function to get the human choice as input
function getHumanChoice() {
    // define a list of valid choices for the person
    const validChoices = ["rock", "paper", "scissor"];

    // ensure correct usage
    let humanChoice;
    do {
        humanChoice = prompt("Rock... paper... scissor!");
    }
    while (!validChoices.includes(humanChoice));
    return humanChoice;
}

function playGame() {
    // initialize the empty scores
    let humanScore = 0;
    let computerScore = 0;

    // locally declare the function expression for a single round
    const playRound = (humanChoice, computerChoice) => {
        // map out winners and losers
        const outcomes = {
            "rock": "scissor",
            "scissor": "paper",
            "paper": "rock"
        };

        // if we pick the same as the machine, tie
        if (humanChoice === computerChoice) {
            console.log("Tie this round!");
            return;
        }
        // outcomes[humanChoice] returns the string that human choice beats
        // if that is equal to the computer choice, the human wins
        if (outcomes[humanChoice] === computerChoice) {
            humanScore++;
            console.log("Human wins this round!");
        // otherwise, computer wins
        } else {
            computerScore++;
            console.log("Computer wins this round!");
        }
    };

    // iterate for the specified number of rounds
    for (let i = 0; i < NUM_ROUNDS; i++) {
        // get the choices of the player and the computer
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log("Computer choice: ", computerChoice);
        console.log("Human choice: ", humanChoice);

        // play a round
        playRound(humanChoice, computerChoice);
        console.log("Computer score: ", computerScore);
        console.log("Human score: ", humanScore);
    }

    // determine the winner and print it to the screen
    if (humanScore > computerScore) {
        console.log("Human wins the game!");
    } else if (humanScore < computerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("Game is a tie!");
    }
    return;
}

playGame();