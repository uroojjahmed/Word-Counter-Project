#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Welcome message
console.log(chalk.bold("=".repeat(70)));
console.log(chalk.bold.blue("\n \t\t-Word Counter- by Urooj Ahmed"));
console.log(chalk.bold("=".repeat(70)));
// User  Enter a Sentences
let answer = await inquirer.prompt([
    {
        name: "sentences",
        type: "input",
        message: "- Please Enter a Sentence: ",
    }
]);
//use trim and split it into waords based on "spaces"
let words = answer.sentences.trim().split(" ");
//User input Sentence
console.log("_".repeat(70));
console.log(chalk.bold("- Sentence Words: "));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.redBright(words.length)}`));
console.log("_".repeat(70));
