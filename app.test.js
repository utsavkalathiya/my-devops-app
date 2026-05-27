const assert = require('assert');

try {
  // Import the running server instance from app.js
  const server = require('./app.js');
  console.log('✓ App loads successfully');
  
  // Gracefully shut down the server so the CI/CD pipeline can finish!
  server.close(() => {
    console.log('✓ Server closed gracefully');
    console.log('All tests passed!');
    process.exit(0); // Exit with code 0 (Success)
  });

} catch (err) {
  console.error('✗ App failed to load:', err);
  process.exit(1); // Exit with code 1 (Failure)
}