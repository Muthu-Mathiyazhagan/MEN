const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    console.log(req);

    res.write("Object", req);
    // res.write("Home Page");

    res.end();
  }
  if (req.url === "/api/contact") {
    console.log(req);
    res.write("Call me at 9786240343");
    res.end();
  }
});

server.listen(3010);
console.log("Listening at 3010");
