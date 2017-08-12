var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var api = require('./routes/api');
var apprentice = require('./routes/apprentice');
var master = require('./routes/master');
// var user = 'zachFrantz';
// var password = 'skillsite';


mongoose.connect("mongodb://zachFrantz:skillsite@ds015750.mlab.com:15750/learnt", { useMongoClient: true });
// mongoose.connect('mongodb://localhost:27017/skills-app-db', { useMongoClient: true });

// const db = 'localhost:27017/skills-app-db';
// mongoose.Promise = global.Promise;
// mongoose.connect(db, (err)=> {
//   if(err) {
//     console.log("Error you stupie!" + err);
//   }
// })


var app = express();


// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(express.static(path.join(__dirname, './dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/api', api);
app.use('/apprentice', apprentice);
app.use('/master', master);

// Send Dist

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
