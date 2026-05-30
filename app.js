/*const express = require("express");
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

*/

const express = require("express");
const path = require("path");
const app = express();

// Serve static files (CSS, images, etc.) from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>DevOps Pipeline</title>
      <link rel="stylesheet" href="/public/app.css" />
    </head>
    <body>
      <div class="container">
        <div class="tag">CI/CD Pipeline Active</div>
        <h1>Welcome to <span>DevOps</span></h1>
        <p class="subtitle">
          Fully automated pipeline is live and running. Continuous integration,
          delivery, and deployment — all systems operational.
        </p>
        <div class="status-bar">
          <div class="status-item">
            <span class="status-label">Status</span>
            <span class="status-value"><span class="pulse"></span>Online</span>
          </div>
          <div class="status-item">
            <span class="status-label">Version</span>
            <span class="status-value">1.0.0</span>
          </div>
          <div class="status-item">
            <span class="status-label">Build</span>
            <span class="status-value">Passing</span>
          </div>
          <div class="status-item">
            <span class="status-label">Environment</span>
            <span class="status-value">Production</span>
          </div>
        </div>
      </div>
    </body>
    </html>
  `);
});

// Export ONLY the app setup, don't listen here
module.exports = app;