const pr = require('prompt-sync');

const prompt = pr();

let n1 = parseInt(prompt("Enter First Number: "));
let n2 = parseInt(prompt("Enter Second Number: "));

const total = n1 + n2;
console.log("Total :" + total);
