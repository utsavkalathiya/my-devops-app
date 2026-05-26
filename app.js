const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to DevOps!</h1>
    <p>This app is why not running in a Docker container.</p>
    <p>Version: 1.0</p>
  `);
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});