// import express
const express = require("express");
const app = express();

// set the path
const path = require("path");

// set views directory
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jsx");

// export routes
const routes = require("./routes.js");
app.use("/", routes);

// start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});
