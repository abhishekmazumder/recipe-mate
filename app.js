const express = require("express");
const expressLayouts = require("express-ejs-layouts");
require("dotenv").config();

const routes = require("./server/routes/recipeRoutes.js");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(expressLayouts);

app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.use("/", routes);

app.listen(port, () => console.log(`Listening to port ${port}`));
