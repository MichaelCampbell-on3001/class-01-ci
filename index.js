'use strict';

const app = require('./server/app.js');

const PORT = process.env.PORT || 3000; // make sure you use the environment varaible for port.

app.listen(PORT, () => {
  console.log('Server listening');
});