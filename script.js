// print hello world to the console
console.log("hello world");

// get the computer choice

function getComputerChoice() {
    let computerChoice;
    const computerChoiceNumber = Math.floor(Math.random() * 3);
    console.log(computerChoiceNumber);

    switch (computerChoiceNumber) {
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        case 2:
            computerChoice = "Scissor";
            break;
    }
}