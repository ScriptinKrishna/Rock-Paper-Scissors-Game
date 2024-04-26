let userScore = 0;
let compScore = 0;
let userWin; // Declared here to make it accessible in both functions
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore
        msg.innerText = `You win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore
        msg.innerText = `You lost ! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const drawGame = (userChoice) => {    
    msg.innerText = `Game was draw. you and computer both picked ${userChoice}` ;
    msg.style.backgroundColor = "#1a2a57";
};

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const playGame = (userChoice) => {    //generate comp choices
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        drawGame(userChoice);
    } else {
        userWin = true; // Assume user wins initially
        if (userChoice === "rock") {
            //paper , scissors
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock , scissors
            userWin = compChoice === "scissors" ? false : true;
        } else if (userChoice === "scissors") {
            //rock , paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});