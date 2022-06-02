let Person = require('./main');
let read = require('readline-sync');
let a = " ";
let userData = [];
let question = 'Y';
do {
    let name = read.question('Enter your name: ');
    let age = read.question('Enter your age: ');
    let gender = read.question('Enter your gender: ');
    let user = new Person(name, age, gender);
    userData[a] = user;
    a = a + 1;
    question = read.question('Do you want to continue y/n ');

} while (question != "quit")
userData.forEach((value) => {
    console.log(`name : ${value.name}, age:${value.age}, gender:${value.gender}`)
});



