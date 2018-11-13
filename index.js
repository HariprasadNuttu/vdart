var serverRequest = {};
var server = require("http").createServer();
var fs = require('fs')
server.on('request',(req, res)=> {
  serverRequest.unifiedServer(req,res);
  if (req.method === 'POST') {
        // Handle post info...
        console.log(req.method)
        console.log("hello inside function")
    }
    else {
      res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(fs.readFileSync('./public/index.html'));
    }
  // switch (req.url) {
  //   case '/api':
  //       res.writeHead(200, {'Content-Type': 'application/json'});
  //       res.write("hello owlrd")
  //       res.end(JSON.stringfy([{name:"HariprasadNuttu"}]));
  //     break;
  //   // case '/':
  //   //     res.writeHead(200, {'Content-Type': 'text/html'});
  //   //     res.end(fs.readFileSync('./public/index.html'));
  //   //   break;
  //   default:
  //   res.writeHead(200, {'Content-Type': 'text/html'});
  //   res.end(fs.readFileSync('./public/index.html'));
  //
  // }
  // res.writeHead(200, {'Content-Type': 'text/plain'});
  // res.write('Hello World!');
  // res.end();
}).listen(8080);


serverRequest.unifiedServer = function(req,res){
console.log(req);
   // Parse the url
   var parsedUrl = url.parse(req.url, true);

   // Get the path
   var path = parsedUrl.pathname;
   var trimmedPath = path.replace(/^\/+|\/+$/g, '');

   // Get the query string as an object
   var queryStringObject = parsedUrl.query;

   // Get the HTTP method
   var method = req.method.toLowerCase();

   //Get the headers as an object
   var headers = req.headers;

   // Get the payload,if any
   var decoder = new StringDecoder('utf-8');
   var buffer = '';
   req.on('data', function(data) {
       buffer += decoder.write(data);
   });
   req.on('end', function() {
       buffer += decoder.end();

       // Check the router for a matching path for a handler. If one is not found, use the notFound handler instead.
       var chosenHandler = typeof(serverRequest.router[trimmedPath]) !== 'undefined' ? serverRequest.router[trimmedPath] : handlers.notFound;

       // Construct the data object to send to the handler
       var data = {
         'trimmedPath' : trimmedPath,
         'queryStringObject' : queryStringObject,
         'method' : method,
         'headers' : headers,
         // 'payload' : helpers.parseJsonToObject(buffer)
       };

       // Route the request to the handler specified in the router
       chosenHandler(data,function(statusCode,payload){

         // Use the status code returned from the handler, or set the default status code to 200
         statusCode = typeof(statusCode) == 'number' ? statusCode : 200;

         // Use the payload returned from the handler, or set the default payload to an empty object
         payload = typeof(payload) == 'object'? payload : {};

         // Convert the payload to a string
         var payloadString = JSON.stringify(payload);

         // Return the response
         res.setHeader('Content-Type', 'application/json');
         res.writeHead(statusCode);
         res.end(payloadString);
         console.log(trimmedPath,statusCode);
       });

   });
 };

 // Define the request router
serverRequest.router = {
   'ping' : handlers.ping,
   'users' : handlers.users,
   'tokens' : handlers.tokens,
   'checks' : handlers.checks
 };
