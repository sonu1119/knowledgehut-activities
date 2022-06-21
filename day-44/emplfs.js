let fs = require('fs');

let checkFileExists = () => {
    if(!fs.existsSync('emp.json')){
        let arr = [];
        let arrString = JSON.stringify(arr);
        fs.writeFileSync('emp.json', arrString);
    }
    return true;
}
let readEmp = () => {
    if(checkFileExists()){
        let dataText = fs.readFileSync('emp.json').toString();
        let jsArr = JSON.parse(dataText);
        return jsArr;
    }
}
let writeEmp = (emp) => {
    let jsArr = readEmp();
    jsArr.push(emp);
    fs.writeFileSync('emp.json', JSON.stringify(jsArr));
}

module.exports = {checkFileExists,writeEmp,readEmp};  