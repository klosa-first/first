'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _errorhandlers = require('./server/middlewares/errorhandlers');

var _routes = require('./server/routes');

var _routes2 = _interopRequireDefault(_routes);

var _index = require('./server/config/index');

var _index2 = _interopRequireDefault(_index);

var _tracelogger = require('./server/logger/tracelogger');

var _tracelogger2 = _interopRequireDefault(_tracelogger);

var _socket = require('./server/services/socket');

var _socket2 = _interopRequireDefault(_socket);

var _messageController = require('./server/controllers/messageController');

var _messageController2 = _interopRequireDefault(_messageController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const logger = require("morgan");
// const bodyParser = require("body-parser");
// const helmet =require("helmet");
// const { notFound, errorHandler } = require("./server/middlewares/errorhandlers");
// const routes = require("./server/routes");
// const config = require("./server/config/index");
// const traceLogger = require("./server/logger/tracelogger");
// const messageController = require("./server/controllers/messageController");


var chat = _messageController2.default.chat;

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use((0, _helmet2.default)());
app.use((0, _cors2.default)());

app.use((0, _morgan2.default)('dev'));

// connect to mongodb
// eslint-disable-next-line max-len
var mongoURL = _index2.default.MONGODB_DATABASE;

_mongoose2.default.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  console.log('MongoDB Connected!');
}).catch(function (err) {
  return console.log(err);
});

app.get('/', function (req, res) {

  res.json({ massage: 'Welcome to Klosa Api' });
});

// "start": "node  ./dist/index.js",
// Routes
app.use('/api', _routes2.default);

app.use('*', _errorhandlers.notFound);
app.use(_errorhandlers.errorHandler);

process.on('unhandledRejection', function (reason) {
  (0, _tracelogger2.default)(reason);
});

process.on('uncaughtException', function (reason) {
  (0, _tracelogger2.default)(reason);
});

var PORT = process.env.PORT || 5678;
var server = app.listen(PORT, function () {
  process.stdout.write('app is listening on port ' + PORT);
});

// initialize your local socket.io module
// socketSetter.init(server);

// const io = socketSetter.getIO();


// io.on('connection', socket => {
//   // console.log('client is connected')
//   console.log('CONNectedc');
//   // console.log(socket.handshake.query['token']);
//   chat();
// })

exports.default = app;