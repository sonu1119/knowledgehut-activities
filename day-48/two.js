let express = require("express");
let app = express();
let port = 9093;

app.listen(port, () => console.log(`Server started at ${port}`));

app.post("/store/:id/:name/:salary", (request, response) => {
    let empId = parseInt(request.params.id);
    let empName = request.params.name;
    let empSalary = request.params.salary;
    let emp = {id : empId, name : empName, salary : empSalary};
    response.json(emp);
});

app.get("/fetch/:id", (request, response) => {
    let id = parseInt(request.params.id);
    response.json({message:`Fetching ${id} details`});
});
//remaining two methods(put,delete)are mentioned in activity.js