const express = require("express");
const https = require("https");
const path = require('path');

const app = express();
const parser = express.urlencoded({extended: false});
const jsonParser = express.json();

// TODO: configure the express server
app.use(parser);
app.use(jsonParser); 
app.use(express.static('public'))

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));


const longContent =
  "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";

let posts = [];
let name;

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/login", (req, res) =>{
  const name = req.body.name;
  res.render('index', {  name } );
});

app.listen(3000, (err) => {
  console.log("Listening on port 3000");
});
