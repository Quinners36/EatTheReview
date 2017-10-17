var http = require('http');
var fs = require('fs');

//The OpeningPage.html must be the same name as the opening page as this is our way into the app 
fs.readFile('OpeningPage.html', function (err, html) 
{
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) { 
        response.writeHeader(200, {"Content-Type": "text/html"});  // <-- HERE!
        response.write(html);  // <-- HERE!
        response.end();  
    }).listen(8080);
});
