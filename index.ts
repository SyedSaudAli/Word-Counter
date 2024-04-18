#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.yellowBright.bold.underline("\n\tWords Counter.\n\t"));

const answers: {
  sentance: string;
} = await inquirer.prompt([
  {
    name: "sentance",
    type: "input",
    message: chalk.red.bold("Please enter your sentance and counter to word: "),
  },
]);

const words = answers.sentance.trim().split(" ");

console.log("\nYour Sentence", words);
console.log(
  chalk.bold.blueBright(`\nYour sentence word count is = ${words.length}`)
);
