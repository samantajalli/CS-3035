
var fs = require("fs");
fs.readFile("./toRead.txt", "utf8", function(error, text){
  if (error)
    throw error;
  console.log(text);
})

var http = require("http");
fs = null;
var fs = require("fs");
var server = http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h1>Hello!</h1><p>You asked for <code>"
    + request.url + "</code></p>");
  response.end();
});
server.listen(8000);
