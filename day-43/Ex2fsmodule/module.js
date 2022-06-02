// importing the fs file
let fs =  require('fs');
// content to write 
let content = "This is my another content \n";
//writing the file content uing writeFileSync
fs.writeFileSync("simple.txt", content, {flag:"a+"});//using {flag:'a+'} we can keep old content awa new
console.log("*********** DONE **********");