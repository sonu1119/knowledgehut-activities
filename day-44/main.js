let read = require('readline-sync');
let store = require('./store');
let retrieveAll = require('./retrieveAll');
let retrieveById = require('./retrieveById');
let deleteById = require('./delete');
const { questionInt } = require('readline-sync');

while(true)
{
    let choice = read.questionInt('Enter your choice: ');

    console.log('Enter 1 to Store');
    console.log('Enter 2 to RetrieveAll');
    console.log('Enter 3 to Retrieve By Id');
    console.log('Enter 4 to Delete By Id');
    console.log('Enter 5 to Quit');

    switch(choice)
    {
        case 1: store();
                break;
        case 2: retrieveAll();
                break;
        case 3: let lookId = read.questionInt('Enter the Id to be retrived : ');
                retrieveById(lookId);
                break;
        case 4: let deleteId = read.questionInt('Enter the Id to be deleted:  ');
                deleteById(deleteId);
                break;
        case 5: quit();
        default: 
                console.log('Entered a wrong choice..');
    }
} 