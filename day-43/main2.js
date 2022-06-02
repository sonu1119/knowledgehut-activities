// importing the fs module
let fs = require('fs');
let Employee = require("./Employee");
let data = fs.readFileSync("./employee.txt");
let dataString = data.toString();
let splitString = dataString.split("|");
let obj = new Employee(...splitString);

obj.display();