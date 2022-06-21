let express = require("express");
let test = express();
let port = 9093;

test.listen(port, () => console.log(`Server stared at ${port}`));

test.put("/update/:id/:salary", (request, response) => {
    let empId = parseInt(request.params.id);
    let empSalary = parseFloat(request.params.salary);
    let emp = {id : empId, salary : empSalary};
    response.json(emp);
});

test.delete("/remove/:id", (request, response) => {
    let id = parseInt(request.params.id);
    response.json({message : `${id} is deleted`});
})