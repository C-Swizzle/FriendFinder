var express=require("express");
var path=require("path");

var app = express();

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








app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  