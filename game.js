import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
import gradient from "gradient-string";
const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));
let systemnum = Math.floor(Math.random() * 10 + 1);
let numtries = 3;
let play = true;
let welcome = async () => {
    const rainbowtotle = (chalkAnimation.rainbow("Lets play a number guessing game"));
    await sleep();
    console.log(gradient.passion(`
    ____________________________________________________
    |                                                   |
    |                                                   |
    |               _____________________               |
    |               |                   |               |
    |               |  NUMBER GUESSING  |               |
    |               |       GAME        |               |
    |               |___________________|               |
    |                                                   |
    |          GUESS THE NUMBER BETWEEN 1 TO 10         |
    |                                                   |
    |                   -------------                   |
    |                   |   GUESS   |                   |
    |                   -------------                   |
    |                   | 1 | 2 | 3 |                   |
    |                   -------------                   |
    |                   | 4 | 5 | 6 |                   |
    |                   -------------                   |
    |                   | 7 | 8 | 9 |                   |
    |                   -------------                   |
    |                   ||||  10  |||                   |
    |                   -------------                   |
     |___________________________________________________|`));
    console.log(chalk.yellow("Guess a number between 1 and 10"));
};
welcome();
while (play) {
    while (numtries > -1) {
        const Answers = await inquirer.prompt([
            {
                name: "YourGuess",
                message: "",
                type: "number",
            },
        ]);
        if (Answers.YourGuess === systemnum) {
            console.log(chalk.red(`Hurrah! Your guess is correct.Game ends.\n You won `));
            numtries = 0;
            play = false;
        }
        else {
            console.log(chalk.yellow("Your Guess is incorrect."));
            console.log(chalk(`You have ${numtries} ${numtries > 1 ? "tries" : "try"} left`));
            if (Answers.YourGuess < systemnum) {
                console.log(chalk.blueBright("Think Higher"));
            }
            else if (Answers.YourGuess > systemnum) {
                console.log(chalk.blueBright("Think Lowerr"));
            }
        }
        numtries--;
    }
    const playAgain = await inquirer.prompt([
        {
            name: "Again",
            message: "Do You want to play again?",
            type: "confirm",
        },
    ]);
    if (playAgain.Again) {
        numtries = 3;
        play = true;
        systemnum = Math.floor(Math.random() * 10 + 1);
        //actualAnswer = systemnum;
    }
    else {
        console.log(chalk.red("Exiting game......."));
        play = false;
    }
}
