let fs = require('fs');
let read = require('readline-sync');

let checkFileExists = () => {
    if(!fs.existsSync('emp.json')){
        let arr = [];
        let arrStr = JSON.stringify(arr);
        fs.writeFileSync('emp.json', arrStr);
    }
    return true;
}
let readFile = () => {
    if(checkFileExists()){
        let dataText = fs.readFileSync('emp.json').toString();
        let jsArr = JSON.parse(dataText);
        return jsArr;
    }
}
let writeFile = (emp) => {
    let jsArr = readFile();
    jsArr.push(emp);
    fs.writeFileSync('emp.json', JSON.stringify(jsArr));
}

let retrieveById = (id) => {
    let  c = 0;
    let empArr = [];
    if(checkFileExists()){
        let dataText = fs.readFileSync('emp.json').toString();
        let jsArr = JSON.parse(dataText);
        if(jsArr.length == 0){
            return -1;
        } else {
            jsArr.forEach((employee, index) => {
            if(employee.id == id){
                empArr.push(employee);
                c++;
            }
            });
        }
        if(c==0)
            return 0;
        else
            return empArr;
    }
}

let deleteById = (id) => {
    if(checkFileExists()){
        let b = 0;
        let indexArr = [];
        let dataText = fs.readFileSync('emp.json').toString();
        let jsArr = JSON.parse(dataText);
        if(jsArr.length == 0){
            return -1;
        } else {
            for(let i=0; i<jsArr.length; i++){
                if(jsArr[i].id == id){
                    jsArr.splice(i,1);
                    b++;
                    i--;
                }
            }
            fs.writeFileSync('emp.json', JSON.stringify(jsArr));
        }
        if(b==0)
            return 0;
        else
            return 1;
    }
}

module.exports = {retrieveById, writeFile, readFile, deleteById};