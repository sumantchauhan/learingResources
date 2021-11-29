const express = require("express");
const path = require("path");
var bodyParser = require("body-parser");
const members = require("./Members");
const logger = require("./midleware/logger");

const app = express();

app.use(bodyParser.json());
/**
 * parse requests of content-type - application/x-www-form-urlencoded
 */
app.use(bodyParser.urlencoded({ extended: false }));

// app.get("/", (req, res) => {
//   res.send(`<h1>Hello world</h1>`);
// });

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.use(logger);

app.get("/api/members", (req, res) => res.json(members));

// Make public is a static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
