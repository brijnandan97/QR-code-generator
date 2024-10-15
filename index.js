const express = require("express");
const path = require("path");
const urlRoute = require("./routes/url");

const app = express();
const PORT = 8000;

// Set the view engine
app.set("view engine", "ejs");

// Set the views directory (if not in default location)
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/home", urlRoute);
app.listen(PORT, () => console.log("Server started"));
