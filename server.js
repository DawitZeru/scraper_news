//dependencies
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var logger = require("morgan");

//initialize Express App
var express = require("express");
var app = express();

app.use(logger("dev"));
app.use(
bodyParser.urlencoded({
    extended: false
})
);

app.use(express.static(process.cwd() + "/public"));
//require set up handlebars
var exphbs = require("express.handlebars");
app.engine(
    "handlebars",
    exphbs({
        defaultLayout: "main"
    })
);
app.set("view engine", handlebars);

//connecting to MongoDB
//mongoose.connect("mongodb://localhost/scraped_news");
const MONGODB_URI = 
process.env.MONGODB_URI || "mongo://localhost/scraped_news";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

var routes = require("./controller/controller");
app.use("/", routes);

//create localhost port
var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("listening on PORT" + port);
});