const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

app.get('/ping', (req, res) => {
    console.log('got a /ping request');
    res.json({
        message: 'Pong',
    });
});

app.use(express.static(path.join(__dirname, 'build')));

let port = process.env.PORT || 9000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
