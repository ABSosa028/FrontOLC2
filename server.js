//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/Fronted'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/Fronted/'}),
);

const port = process.env.PORT || '8080';
app.listen(port, () => {
  console.log('Express server listening on port', port)
});