const dotenv = require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

// middleware
const staticPath = path.join(__dirname, "../public")
app.use(express.urlencoded({ extends: false }));
app.use(express.static(staticPath));


app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");


// routes
app.get("/", (req, res) => {
  res.send("Welcome")
});
app.post("/resumebuilder", (req, res) => {
  const body = req.body;
  // console.log(body);
  res.render("index" , {body});
});


// listen 
app.listen(PORT, () => {
  console.log(`Server is running...`);
});
