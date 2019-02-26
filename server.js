// dependencies
var express = require("express");
var bodyParser = require("body-parser");

// set up express app
var app = express();
var PORT = process.env.PORT || 8080;

// express middleware to access public files
app.use(express.static("./public"));

// express middleware to handle data parsing
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// set up handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// require controller routes
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

// start server listening
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});