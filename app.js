// const fs = require("fs");
// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/html");

//   let path = "./";
//   console.log(req.url);
//   switch (req.url) {
//     case "/":
//       path += "index.html";
//       res.statusCode = 200;
//       break;
//     case "/about.html":
//       path += "about.html";
//       res.statusCode = 200;
//       break;
//     case "/contact-me":
//       path += "contact-me.html";
//       res.statusCode = 200;
//       break;
//     default:
//       path += "404.html";
//       res.statusCode = 404;
//       break;
//   }

//   fs.readFile(path, (err, data) => {
//     console.log(path);
//     if (err) {
//       console.log(err);
//       res.end();
//     } else {
//       res.write(data);
//       res.end();
//     }
//   });
// });

// server.listen(8080);

// Load HTTP module

//.......................................................

// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", function (req, res) {
//   res.send("Hello World!");
// });

// app.listen(port, function () {
//   console.log(`Example app listening on port ${port}!`);
// });

// mdn example below....................................

//Load HTTP module
const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {
  //Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
