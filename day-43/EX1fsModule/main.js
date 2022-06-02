//importing fs module 
let fs = require('fs');
//reading the file message.txt 
let data = fs.readFileSync('message.txt');
//printing the data which is read
console.log(data);
//converting to text format using toString()
let textData = data.toString();
console.log('---------------------------');
console.log(textData);