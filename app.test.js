// Simple test file
const assert = require('assert');

// Test 1: Check if app file exists
try {
  require('./app.js');
  console.log('✓ App loads successfully');
} catch (err) {
  console.error('✗ App failed to load');
  process.exit(1);
}

console.log('All tests passed!');