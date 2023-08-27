'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var io = void 0; /* eslint-disable no-console */
/* eslint-disable no-unused-vars */

var socketSetter = {
  init: function init(server) {
    io = (0, _socket2.default)(server);
    console.log('connected to socket');
    return io;
  },
  getIO: function getIO() {
    if (!io) {
      throw new Error("Can't get io instance before calling .init()");
    }
    return io;
  }
};

exports.default = socketSetter;