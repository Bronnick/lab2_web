const http = require("http");
const fs = require("fs");
    
http.createServer(function(request, response){
      
    if(request.url == "/hello"){
        response.end("");
    }
    else{
        fs.readFile("index.html", (error, data) => response.end(data));
    }
}).listen(3000, ()=>console.log("http://localhost:3000"));