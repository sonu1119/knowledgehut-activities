let fs = require('fs');
let read = require('readline-sync');
let writer1 = require('./emplfs').writeEmp;

let store = () => {
    let empId = read.questionInt('Enter your Id: ');
    let empName = read.question('Enter your name: ');
    let empSalary = read.questionFloat('Enter your salary: ');

    let emp = {id: empId, name: empName, salary: empSalary};
    writer1(emp);
}

module.exports = store;