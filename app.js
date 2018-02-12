var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var clients = require('./routes/clients');
var admin   = require('./routes/admin');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/clients', clients);
app.use('/admin', admin);
var port = process.env.PORT || 8000;
app.listen(port, function() {
    console.log("App is running on port " + port);
});
module.exports = app;
