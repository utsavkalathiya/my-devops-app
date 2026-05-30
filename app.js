const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to DevOps!</h1>
    <p>Welcome to DevOps! My Fully Automated Pipeline is Live!</p>
    <p>Version: 1.0</p>
  `);
});
// Export ONLY the app setup, don't listen here
module.exports = app;