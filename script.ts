#!/usr/bin/node

import { $, ProcessOutput, chalk, question } from "zx";
const YES = "y";

$.verbose = false;
const list: ProcessOutput = await $`ls -la`;
console.log(chalk.magentaBright("This script has compiled by TypeScript."));
const answer = await question("To run the script, please type 'y'", {
  choices: ["y", "N"],
});

if (answer === YES) {
  console.log(list.stdout);
} else {
  console.log("bye.");
}
