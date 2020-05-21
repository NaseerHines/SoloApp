const express = require("express");
const morgan = require("morgan");
const path = require("path");
const parse = require("body-parser");
const dotenv = require("dotenv");
// Load env
dotenv.config({
  path: "./config.env",
});
const app = express();
// Dev logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
const { apiRouter } = require("./routes/profile.js");
// Handle production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static(__dirname + "/public/"));
  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}
const PORT = process.env.PORT || 8085;
const CLIENT_PATH = path.join(__dirname, "../client/dist");
app.use(express.static(CLIENT_PATH));
app.use(parse.json());
app.use("/api", apiRouter);
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} Listening on port:${PORT} 🚀`
  );
});
