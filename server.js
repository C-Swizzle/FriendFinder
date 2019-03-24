var express=require("express");
var path=require("path");

var app = express();
var friends=require("./app/data/friends.js");
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"/app/public/home.html"));
});
app.get("/survey",function(req,res){
    res.sendFile(path.join(__dirname,"/app/public/survey.html"));
})
app.post("/api/friends",function(req,res){
    console.log(req.body);
    friends.push(req.body);
});

app.get("/api/friends",function(req,res){
    console.log(req.body);
    res.json(friends);
});






app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  