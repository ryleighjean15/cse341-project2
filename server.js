const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./data/database');
// const mongoose = require('mongoose');
const app = express();


const port = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-AllowOrigin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested_With, Content-Type, Accept, Z-Key'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});
app.use('/', require('./routes'));

process.on('uncaughtException', (err, origin) => {
    console.log(process.stderr.fd, `Caught exception: ${err}\n` + `Exception origin: ${origin}`);
});

mongodb.initDb((err) => {
    if(err) {
        console.log(err);
    }
else {
    app.listen(port, () => {console.log(`Database is listening and node Running on port ${port}`)});
}
});






  