let fs = require('fs');
let checkFileExists = require('./emplfs').checkFileExists;

let dltById = (id) => {
    if(checkFileExists()){
        let b = "";
        let indexArr = [];
        let dataText = fs.readFileSync('emp.json').toString();
        let jsonArr = JSON.parse(dataText);
        if(jsonArr.length == 0){
            console.log('Nothing to delete.');
            return;
        } else {
            for(let i=0; i<jsonArr.length; i++){
                if(jsonArr[i].id == id){
                    jsonArr.splice(i,1);
                    b = b+1;
                    i--;
                }
            }
            fs.writeFileSync('emp.json', JSON.stringify(jsonArr));
        }
        if(b==0)
            console.log('Id is not found');
    }
}

module.exports = dltById; 