/*var http = require('http');
var fs = require('fs');

//The index.html must be the same name as the opening page as this is our way into the app 
fs.readFile('index.html', function (err, html) 
{
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) { 
        response.writeHeader(200, {"Content-Type": "text/html"});  // <-- HERE!
        response.write(html);  // <-- HERE!
        response.end();  
    }).listen(80);
});
*/
var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/';



router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/OpeningPage",function(req,res){
  res.sendFile(path + "OpeningPage.html");
});



router.get("/Review",function(req,res){
  res.sendFile(path + "Review.html");
});

router.get("/AccountSettings",function(req,res){
  res.sendFile(path + "AccountSettings.html");
});

router.get("/Home",function(req,res){
  res.sendFile(path + "Home.html");
});

router.get("/.well-known/acme-challenge/UiYhI43NIIe91f1c9oL9onOeGI4ohqdY9S7C11A9wE8",function(req,res){
  res.sendFile(path + "/.well-known/acme-challenge/UiYhI43NIIe91f1c9oL9onOeGI4ohqdY9S7C11A9wE8");
});

app.use("/",router);

app.use("/logo.png", express.static("/"));

app.listen(80,function(){
  console.log("Live at Port 80");
});

