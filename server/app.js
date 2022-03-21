'use strict';

// a framework for handling HTTP requests.
const express = require('express'); // needs to be npm installed first.

// we should only run this once.
const app = express(); // Creates our first 'singleton'

app.get('/hello', (request, response, next) => {
  response.send('Hello world');
});

module.exports = app;