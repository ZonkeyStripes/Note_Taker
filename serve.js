let express = require("express");
let path = require("path");

let app = express();
let PORT = 3000;

let noteObj = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//returns notes file
app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.listen(PORT, function() {
    console.log("Running on port " + PORT)
})

app.get("/api/notes", function(req, res){
    res.sendFile(path.join(__dirname, "./public/notes.html"))
})

app.post("/api/notes", function(req, res) {
 
    res.readFile(path.join(__dirname, "./db/db.json"))

    let newNote = req.body
    console.log("THIS IS: " + newNote)
    noteObj.push(newNote);
    res.json(newNote);
})

// app.get("/api/notes", function(req, res) {

// })

// app.delete("/api/notes", function(req, res){

// })