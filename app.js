/** Author: Roman Polonyankin & Express Generator
 * File Name: app.js
 * Website Name: Assignment 1
 * File Description: This is the main app.js file that makes the world go round.
 */


var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
//var contactRouter = require('./routes/contact'); //Optimizing & Redoing routes in a proper way in index via the help of a controller.
//var projectsRouter = require('./routes/projects');
//var servicesRouter = require('./routes/services');
//var aboutmeRouter = require('./routes/aboutme');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//app.use('/users', usersRouter);
//app.use('/contact', contactRouter); //Optimizing & Redoing routes in a proper way in index via the help of a controller.
//app.use('/projects', projectsRouter);
//app.use('/services', servicesRouter);//
//app.use('/aboutme', aboutmeRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
