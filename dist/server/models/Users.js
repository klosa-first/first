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


var UserSchema = new Schema({
  email: {
    type: String,
    trim: true,
    required: true,
    lowercase: true,
    unique: true

  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    trim: true
  },
  full_name: {
    type: String
  },

  current_location: {
    type: String
  },

  sharable_referal_code: {
    type: String
  },

  referal: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  otp: {
    type: Number
  },
  international_passport: {
    type: Boolean,
    default: false
    // required: true,
  },
  identity_card: {
    type: Boolean,
    default: false
  },
  nin_slip: {
    type: Boolean,
    default: false
  }

}, { timestamps: true });

// eslint-disable-next-line func-names
UserSchema.pre('save', function (next) {
  this.password = _bcryptjs2.default.hashSync(this.password, saltRounds);
  next();
});

var User = _mongoose2.default.model('User', UserSchema);

exports.default = User;