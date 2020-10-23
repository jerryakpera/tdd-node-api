const express = require('express');
const responseTime = require('response-time');

const app = express();

// *** RESPONSE-TIME ***
app.use(responseTime());

app.get('/', (req, res) => {
  res.json('OK');
});

module.exports = app;
