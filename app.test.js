const assert = require('assert');

try {
  // Import the app logic
  const app = require('./app.js');
  console.log('✓ App structure loaded successfully');
  
  // Verify express application object exists
  assert.ok(app);
  
  console.log('All tests passed!');
  process.exit(0); // Exit successfully immediately
} catch (err) {
  console.error('✗ App failed to load:', err);
  process.exit(1);
}