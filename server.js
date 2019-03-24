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
    res.send(checkFriends(friends,req.body.questions));
    friends.push(req.body);
});

app.get("/api/friends",function(req,res){
    console.log(req.body);
    res.json(friends);
});

function checkFriends(friendsArrOfObj,reqinputArr){
    var tempArr=[];
for (var i=0;i<friendsArrOfObj.length;i++){
    var count=0;
        for (var j=0;j<reqinputArr.length;j++){
            count += Math.abs(Number(reqinputArr[j])-Number(friendsArrOfObj[i].questions[j]));
        }
        tempArr.push(count);
}
var thingToCheckNow=doBigThingsWithCallbacksAndSuchVeryExciting(sortArr,tempArr,friendsArrOfObj);
return thingToCheckNow;
};

function sortArr(arr){
    var tempArr=arr;
    for (var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length;j++){
            if(tempArr[j+1]<tempArr[j]){
                var temp=tempArr[j];
                tempArr[j]=tempArr[j+1];
                tempArr[j+1]=temp;
            }
        }
    }
    return tempArr;
};
console.log(sortArr([1,67,8,9,4,5,6,88,7]));

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
function doBigThingsWithCallbacksAndSuchVeryExciting(sortFunc,Arr,friendsArrOfObj){
    var newArr= sortFunc(Arr);
    var index=Arr.indexOf(newArr[0]);
    return friendsArrOfObj[index];
}