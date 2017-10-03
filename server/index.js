const express = require('express');
const path = require('path');
const {Client} = require('pg');

const app = express();
const PORT = process.env.PORT || 5000;
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Answer API requests.
app.get('/api', function (req, res) {
  res.set('Content-Type', 'application/json');
  res.send('{"message":"Hello from the custom server!"}');
});

app.get('/db', function (request, response) {
  client.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM test_table', function(err, result) {
      done();
      if (err)
      { console.error(err); response.send("Error " + err); }
      else {
        response.set('Content-Type', 'application/json');
        response.set('{"message":"Hello from the db!"}');
      }
    });
  });
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});