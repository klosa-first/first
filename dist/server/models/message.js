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


var MessageSchema = new Schema({

  sender: {
    type: String,
    required: true
  },
  receiver: {
    type: String,
    trim: true
  },
  message: {
    type: String
  },
  chat: {
    type: Schema.Types.ObjectId,
    ref: 'Chat'
  }

}, { timestamps: true });

// eslint-disable-next-line func-names
MessageSchema.pre('save', function (next) {
  this.password = _bcryptjs2.default.hashSync(this.password, saltRounds);
  next();
});

var Message = _mongoose2.default.model('Message', MessageSchema);

exports.default = Message;