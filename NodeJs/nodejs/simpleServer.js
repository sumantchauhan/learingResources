const http = require("http");

// Create server

http
  .createServer((req, res) => {
    res.write("This is a simple server");
  })
  .listen(5000, () => console.log("Server running..."));
