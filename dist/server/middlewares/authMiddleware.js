'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _responses = require('../utils/responses');

var _responses2 = _interopRequireDefault(_responses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var auth = function auth(req, res, next) {
  var authHeader = req.headers.authorization;
  console.log('req.headers req.headers req.headers req.headers', req.headers);
  if (authHeader) {
    var token = authHeader.split(' ')[1];
    token.replace(/(^"|"$)/g, '');

    _jsonwebtoken2.default.verify(token, process.env.JWT_TOKEN_SECRET, function (err, user) {
      if (err) {
        return res.status(401).json(_responses2.default.error(401, 'unauthorized'));
      }
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json(_responses2.default.error(401, 'unauthorized'));
  }
};
exports.default = auth;