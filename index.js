var server = require("http").createServer();
var fs = require('fs')
server.on('request',(req, res)=> {
  switch (req.url) {
    case '/api':
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write("hello owlrd")
        res.end(JSON.stringfy([{name:"HariprasadNuttu"}]));
      break;
    // case '/':
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.end(fs.readFileSync('./public/index.html'));
    //   break;
    default:
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(fs.readFileSync('./public/index.html'));

  }
  // res.writeHead(200, {'Content-Type': 'text/plain'});
  // res.write('Hello World!');
  // res.end();
}).listen(8080);
