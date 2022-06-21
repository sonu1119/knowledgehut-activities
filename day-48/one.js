let express = require("express");
let app = express();
let port = 9092;

app.listen(port, () => console.log(`Server started at ${port}`));

app.get("/fetch", (request, response) => {
    response.json({message: "This is a call to GET"});
});
app.post("/store", (request, response) => {
    response.json({message: "This is a call to POST"});
});
app.put("/update", (request, response) => {
    response.json({message: "This is a call to PUT"});
});
app.delete("delete", (request, response) => {
    response.json({message: "This is a call to DELETE"});
});
