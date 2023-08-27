'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config(); /* eslint-disable max-len */


var config = {
  MONGODB_DATABASE: process.env.DB_URL_TEST,
  secretOrKey: process.env.JWT_TOKEN_SECRET,
  mailject_credential_one: process.env.CREDENTIAL_ONE,
  mailject_credential_two: process.env.CREDENTIAL_TWO,
  paystackToken: process.env.PAYSTACK,
  cloudinary_name: process.env.CLOUDINARY_NAME,
  cloudinary_key: process.env.CLOUDINARY_KEY,
  cloudinary_secret: process.env.CLOUDINARY_SECRET

};

exports.default = config;