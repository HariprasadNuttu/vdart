var http = require("http");
var path=require('path');
// app.post('/createPayload', (req, res) => {
//   store
//     .createUser({
//       username: req.body.username,
//       password: req.body.password
//     })
//     .then(() => res.sendStatus(200))
// })
// app.post('/login', (req, res) => {
//   store
//     .authenticate({
//       username: req.body.username,
//       password: req.body.password
//     })
//     .then(({ success }) => {
//       if (success) res.sendStatus(200)
//       else res.sendStatus(401)
//     })
// })
// app.listen(7555, () => {
//   console.log('Server running on http://localhost:7555')
// })


http.createServer(function (req, res) {
  // res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  // res.sendFile('../public/index.html');
  // res.sendFile('index.html', { root: path.join(__dirname, '../public') });

  res.end();
}).listen(8080);
