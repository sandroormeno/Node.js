var http = require("http");

//This is the callback method, is called every time a user makes a request
//Request object has info about their request, response object is what we send back to them
function onRequest(request, response) {
    console.log("Un usuario hizo un requerimiento " + request.url);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Soy un servidor simple!");
    response.end();
}

//Create a server and listen for requests on this port
http.createServer(onRequest).listen(process.env.PORT);
console.log("Servidor corriendo...");

//Now open Chrome and go to http://localhost:8888
//Saying that user made request twice because browser also makes a request for the favicon