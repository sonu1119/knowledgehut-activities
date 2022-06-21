let fs = require('fs');
let checkFileExists = require('./emplfs').checkFileExists;

let retrieveById = (id) => {
    let a=0;
    if(checkFileExists()){
        let dataText = fs.readFileSync('emp.json').toString();
        let jsonArr = JSON.parse(dataText);
        if(jsonArr.length == 0){
            console.log('record is empty');
            return;
        }
        else{
            jsonArr.forEach((user,index) => {
            if(user.id == id){
                console.log('\n'+JSON.stringify(user));
                a = a + 1;
            }
            });
        }
        if(a==0)
            console.log("Id: ${id} isn't found ");
    }
}

module.exports = retrieveById;