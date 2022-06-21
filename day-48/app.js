let express = require("express");
let app = express();
let port = 9091;

app.listen(port, () => console.log(`Server started at ${port}`));

app.get("/", (request, response) => {
    response.json({message: "Hello Everyone this is GET"});
});
app.post("/", (request, response) => {
    response.json({message: "Hello Everyone this is POST"});
});
app.put("/", (request, response) => {
    response.json({message: "Hello Everyone this is PUT"});
});
app.delete("/", (request, response) => {
    response.json({message: "Hello Everyone this is DELETE"});
});
