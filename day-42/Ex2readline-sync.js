//import read line sync
let read = require('readline-sync');
 //use a question() to wait for the input from the user
let name = read.question('Enter your name:');
 //use a questionInt() to wait for the input from the user it must be init
let age = read.questionInt('Enter your age:');

console.log(`Hello ${name}, your age is ${age}`);
