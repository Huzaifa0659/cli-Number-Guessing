#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
  {
    message: "Select Any Number Between 1-6",
    type: "number",
    name: "userGuessedNumber",
  },
]);

if (answer.userGuessedNumber === randomNumber) {
  console.log("Congratulations You Have Guessed A Right Number");
} else console.log("Better Luck Next Time");
