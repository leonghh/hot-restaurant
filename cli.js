var express = require("express");
var path = require("path");
var app = express();
var PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let tables = [];
let waitList = [];


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/table", function (req, res) {

    res.sendFile(path.join(__dirname, "view.html"));
});
app.get("/reserve", function (req, res) {

    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function (req, res) {
    return res.json(tables);
});

app.get("/api/waitlist", function (req, res) {
    return res.json(waitList);
});

app.post("/api/reserver", function (req, res) {
    let newTable = req.body;
    if (tables.length < 5) {
        tables.push(newTable);
        res.json(tables);
    }
    else{
        waitList.push(newTable);
        res.json(waitList);
    }
    console.log(tables,waitList);

});

app.listen(PORT,function(){
    console.log("App listening on port "+PORT);
});