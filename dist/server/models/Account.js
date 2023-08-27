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


var AccountSchema = new Schema({
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

var Account = _mongoose2.default.model('Account', AccountSchema);
exports.default = Account;