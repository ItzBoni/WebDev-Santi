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

let posts = [{id:1, title: "My first post", content: longContent }];
let userName = "";

app.get("/", (req, res) => {
  if (userName === ""){
      res.render("start.ejs", { userName: userName || "" });
  } else {
      res.render("home.ejs", { userName: userName || "" , posts: posts });
  }
});

app.get("/home", (req, res) => {
  if (!userName) {
    return res.render("start.ejs", { userName: "" });
  }
  res.render('home.ejs', { userName: userName, posts: posts });
});

app.get("/edit_post", (req, res) => {
  if (!userName) {
    return res.render("start.ejs", { userName: "" });
  }
  const id = parseInt(req.query.id, 10);
  const post = posts.find(p => p.id === id);
  if (!post) {
    return res.status(404).send("Post not found");
  }
  res.render('post.ejs', { userName: userName, post });
});

app.post("/add_post", (req, res) => {
  if (!userName) {
    return res.render("start.ejs", { userName: "" });
  }
  const data = req.body;
  const { title, content } = data;
  if (!title || !content) {
    return res.status(400).send("Title and content are required");
  }
  posts.unshift({id: posts.length + 1, title, content });
  res.redirect('/home');
});

app.post("/login", (req, res) =>{
  userName = req.body.name;
  res.redirect('/home');
});

app.post("/post_edit", (req, res) => {
  if (!userName) {
    return res.render("start.ejs", { userName: "" });
  }
  const data = req.body;
  const { id, title, content } = data;
  if (!id || !title || !content) {
    return res.status(400).send("ID, Title and content are required");
  }
  const postIndex = posts.findIndex(p => p.id === parseInt(id));
  if (postIndex === -1) {
    return res.status(404).send("Post not found");
  }
  posts[postIndex] = { id: parseInt(id), title, content };
  res.redirect('/home');
});

app.delete("/delete_post", (req, res) => {
  if (!userName) {
    return res.status(401).send("Unauthorized");
  }
  const id = parseInt(req.query.id);
  const postIndex = posts.findIndex(p => p.id === id);
  if (postIndex !== -1) {
    posts.splice(postIndex, 1);
    return res.status(200).send("Post deleted");
  } else {
    return res.status(404).send("Post not found");
  }
});

app.listen(3000, (err) => {
  console.log("Listening on port 3000");
});
