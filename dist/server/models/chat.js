'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-useless-escape */
var saltRounds = 10; // or another integer in that ballpark

var Schema = _mongoose2.default.Schema;


var chatSchema = new Schema({

  sender: {
    type: String,
    required: true
  },
  receiver: {
    type: String,
    trim: true
  },
  chatId: {
    type: String
  }

}, { timestamps: true });

var Chat = _mongoose2.default.model('Chat', chatSchema);

exports.default = Chat;