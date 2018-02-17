// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORTONE = 7000; //good
var PORTTWO = 7500;  //bad mouth
//diferent posts use different technologies

// Func for server1: Create a generic function to handle requests and responses
function handleRequestOne(request, response) { //whats the request? req to the url.

  // Send the below string to the client when the user visits the PORT URL
  response.end("You are a javascript wizard! " + request.url);
} //creates the strung & sends it back to the browser.
//this sends back to the html.  //end is

// Func for server2: Create a generic function to handle requests and responses
function handleRequestTwo(request, response) { //whats the request? req to the url.

  // Send the below string to the client when the user visits the PORT URL
  response.end("I guess javasccript is not your forte! " + request.url);
} //creates the strung & sends it back to the browser.
//this sends back to the html/browser.
=====================================

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

// Start our server so that it can begin listening to client requests.
//URL request from the browser
server.listen(PORTONE, function() {

  // Log (server-side) when our server has started. //its going to log to the terminal
  console.log("Server listening on: http://localhost:" + PORTONE);
});//when you use server &

  server.listen(PORTTWO, function() {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORTTWO);
});
