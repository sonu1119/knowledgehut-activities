
let fileReader = require('./emplfs').readEmp;

let getAll = () => {
    let jsonArr = fileReader();
    console.log('\n'+JSON.stringify(jsonArr));
}
module.exports = getAll;