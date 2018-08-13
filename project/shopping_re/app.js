var express = require('express');
var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var path = require('path');
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log("mongodb connect");
});

var connect = mongoose.connect('mongodb://127.0.0.1:27017/fastcampus', { useMongoClient: true });
autoIncrement.initialize(connect);

var admin = require('./routes/admin');

var app = express();
var port = 3000;
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.get('/', function (req, res) {
    res.send('first app');
});

app.use('/admin', admin);

app.listen(port, function () {
    console.log('Express listening on port', port);
})