let read = require('readline-sync');
let store = require('./Service').writeFile;
let retrieveAll = require('./Service').readFile;
let retrieveById = require('./Service').retrieveById;
let deleteById = require('./Service').deleteById;

while(true) {
    console.log("Enter 1 to store");
    console.log("Enter 2 to Retrieve All");
    console.log("Enter 3 to Retrieve by Id");
    console.log("Enter 4 to Delete by Id");00
    console.log("Enter 5 to Quit");
    let choice = read.questionInt("\nEnter your choice: ");
    switch(choice) {
        case 1:let empId = read.questionInt("Enter Your Id: ");
               let empName = read.question('Enter Your Name: ');
               let empSalary = read.questionFloat("Enter Your Salary: ");
               let emp = {id: empId, name: empName, salary: empSalary};
               store(emp);
               console.log("information is recorded");
               break;
        case 2: let jsonArr = retrieveAll();
                jsonArr.forEach((employee,index) => {
                console.log(`\n-----Employee ${index+1}-----`);
                console.log(`Id: ${employee.id} \nName: ${employee.name} \nSalary: ${employee.salary}`);
    b           });
                break;
        case 3:  let empArr = retrieveById(searchId);
                 if(empArr == -1)
                console.log('Employee records are empty');
                  else if(empArr == 0)
                console.log(`\nId: ${searchId} not found in the records`);
                  else {
                 console.log(`\nDetails of employee with Id: ${searchId} -`);
                 empArr.forEach((employee, index) => {
                        console.log(`\nId: ${employee.id} \nName: ${employee.name} \nSalary: ${employee.salary} `);
                 });
                 }
                  break;
        case 4:  let flag = deleteById(deleteId);
                 if(flag == -1)
                 console.log(`\nEmployee record is empty..`);
                  else if(flag == 0)
                 console.log(`\nId: ${deleteId} not found in employee records nothing's deleted.`);
                   else
                  console.log(`\nEmployee record deleted`);
                  break;
        case 5: process.exit(0);
                default: console.log('\nInvalid choice');
    }
}