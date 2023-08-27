'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

var _passwordValidator = require('password-validator');

var _passwordValidator2 = _interopRequireDefault(_passwordValidator);

var _randomstring = require('randomstring');

var _randomstring2 = _interopRequireDefault(_randomstring);

var _tracelogger = require('../logger/tracelogger');

var _tracelogger2 = _interopRequireDefault(_tracelogger);

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _googleAuthLibrary = require('google-auth-library');

var _Users = require('../models/Users');

var _Users2 = _interopRequireDefault(_Users);

var _storeToken = require('../utils/storeToken');

var _responses = require('../utils/responses');

var _responses2 = _interopRequireDefault(_responses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = new _passwordValidator2.default();
// const defaultClient = SibApiV3Sdk.ApiClient.instance;
// const apiKey = defaultClient.authentications['api-key'];
// apiKey.apiKey = config.sendblue;
/* eslint-disable no-unused-vars */

schema.is().min(8) // Minimum length 8
.is().max(100) // Maximum length 100
.has().uppercase() // Must have uppercase letters
.has().lowercase() // Must have lowercase letters
.has().digits(1) // Must have at least 2 digits
.has().not().spaces() // Should not have spaces
.is().not().oneOf(['Passw0rd', 'Password123', 'Password', '1234567890']);

// const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
// let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

/**
 * @description Defines the actions for the authentication endpoints
 * @class authController
 */

var authController = function () {
  function authController() {
    (0, _classCallCheck3.default)(this, authController);
  }

  (0, _createClass3.default)(authController, null, [{
    key: 'buyerSignup',

    /**
     *@description Sign up new users
     *@static
     *@param  {Object} req - request
     *@param  {object} res - response
     *@returns {object} - status code, message and response
     *@memberof authController
     */

    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
        var refferal, userObject, _req$body, full_name, email, phone, password, current_location, user, code, referalCode, createdUser;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                refferal = void 0;
                userObject = void 0;

                ;
                _req$body = req.body, full_name = _req$body.full_name, email = _req$body.email, phone = _req$body.phone, password = _req$body.password, current_location = _req$body.current_location;

                if (!(!email || !password || !phone || !full_name)) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt('return', res.status(400).json(_responses2.default.error(400, 'Kindly fill all required information')));

              case 6:
                if (!(_validator2.default.isEmail(email) === false)) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt('return', res.status(400).json(_responses2.default.error(400, 'Not a valid email format')));

              case 8:
                _context.prev = 8;
                _context.next = 11;
                return _Users2.default.findOne({ email: email });

              case 11:
                user = _context.sent;

                if (!user) {
                  _context.next = 14;
                  break;
                }

                return _context.abrupt('return', res.status(400).json(_responses2.default.error(400, "User already exist")));

              case 14:

                console.log('referal_code', referal_code);

                code = _randomstring2.default.generate({
                  length: 4,
                  charset: 'numeric'
                });
                referalCode = _randomstring2.default.generate({
                  length: 10
                });

                if (!referal_code) {
                  _context.next = 22;
                  break;
                }

                _context.next = 20;
                return _Users2.default.findOne({ sharable_referal_code: referal_code });

              case 20:
                refferal = _context.sent;

                console.log('errgergergerfewfwe');

              case 22:

                if (referal_code && refferal) {
                  userObject = {
                    email: email, password: password, full_name: full_name, phone: phone, sharable_referal_code: referalCode, referal: refferal._id, otp: code
                  };
                } else {
                  userObject = {
                    email: email, password: password, full_name: full_name, phone: phone, sharable_referal_code: referalCode, otp: code
                  };
                }

                _context.next = 25;
                return _Users2.default.create(userObject);

              case 25:
                createdUser = _context.sent;

                if (!createdUser) {
                  _context.next = 28;
                  break;
                }

                return _context.abrupt('return', res.status(201).json(_responses2.default.success(201, "User created successfully!", createdUser)));

              case 28:
                _context.next = 34;
                break;

              case 30:
                _context.prev = 30;
                _context.t0 = _context['catch'](8);

                (0, _tracelogger2.default)(_context.t0);
                return _context.abrupt('return', res.status(500).json(_responses2.default.error(500, 'Server error', _context.t0)));

              case 34:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[8, 30]]);
      }));

      function buyerSignup(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return buyerSignup;
    }()
  }, {
    key: 'vendorSignup',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
        var refferal, userObject, _req$body2, full_name, email, phone, password, current_location, user, code, referalCode, createdUser;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                refferal = void 0;
                userObject = void 0;

                ;
                _req$body2 = req.body, full_name = _req$body2.full_name, email = _req$body2.email, phone = _req$body2.phone, password = _req$body2.password, current_location = _req$body2.current_location;

                if (!(!email || !password || !phone || !full_name)) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt('return', res.status(400).json(_responses2.default.error(400, 'Kindly fill all required information')));

              case 6:
                if (!(_validator2.default.isEmail(email) === false)) {
                  _context2.next = 8;
                  break;
                }

                return _context2.abrupt('return', res.status(400).json(_responses2.default.error(400, 'Not a valid email format')));

              case 8:
                _context2.prev = 8;
                _context2.next = 11;
                return _Users2.default.findOne({ email: email });

              case 11:
                user = _context2.sent;

                if (!user) {
                  _context2.next = 14;
                  break;
                }

                return _context2.abrupt('return', res.status(400).json(_responses2.default.error(400, "User already exist")));

              case 14:

                console.log('referal_code', referal_code);

                code = _randomstring2.default.generate({
                  length: 4,
                  charset: 'numeric'
                });
                referalCode = _randomstring2.default.generate({
                  length: 10
                });

                if (!referal_code) {
                  _context2.next = 22;
                  break;
                }

                _context2.next = 20;
                return _Users2.default.findOne({ sharable_referal_code: referal_code });

              case 20:
                refferal = _context2.sent;

                console.log('errgergergerfewfwe');

              case 22:

                if (referal_code && refferal) {
                  userObject = {
                    email: email, password: password, full_name: full_name, phone: phone, sharable_referal_code: referalCode, referal: refferal._id, otp: code
                  };
                } else {
                  userObject = {
                    email: email, password: password, full_name: full_name, phone: phone, sharable_referal_code: referalCode, otp: code
                  };
                }

                _context2.next = 25;
                return _Users2.default.create(userObject);

              case 25:
                createdUser = _context2.sent;

                if (!createdUser) {
                  _context2.next = 28;
                  break;
                }

                return _context2.abrupt('return', res.status(201).json(_responses2.default.success(201, "User created successfully!", createdUser)));

              case 28:
                _context2.next = 34;
                break;

              case 30:
                _context2.prev = 30;
                _context2.t0 = _context2['catch'](8);

                (0, _tracelogger2.default)(_context2.t0);
                return _context2.abrupt('return', res.status(500).json(_responses2.default.error(500, 'Server error', _context2.t0)));

              case 34:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[8, 30]]);
      }));

      function vendorSignup(_x3, _x4) {
        return _ref2.apply(this, arguments);
      }

      return vendorSignup;
    }()
  }, {
    key: 'buyerSignin',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
        var _req$body3, email, password, user, valid, TokenData, token, userData;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _req$body3 = req.body, email = _req$body3.email, password = _req$body3.password;

                if (!(!email || !password)) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt('return', res.status(400).json(_responses2.default.error(400, 'Kindly fill all required information')));

              case 3:
                _context3.prev = 3;
                _context3.next = 6;
                return _Users2.default.findOne({ email: email });

              case 6:
                user = _context3.sent;

                if (user) {
                  _context3.next = 9;
                  break;
                }

                return _context3.abrupt('return', res.status(401).json(_responses2.default.error(401, "Invalid login details")));

              case 9:
                valid = _bcryptjs2.default.compareSync(password, user.password);

                if (valid) {
                  _context3.next = 12;
                  break;
                }

                return _context3.abrupt('return', res.status(401).json(_responses2.default.error(401, "Invalid login details")));

              case 12:
                TokenData = {
                  id: user._id,
                  email: user.email,
                  full_name: user.full_name
                };

                //  Generate Token

                _context3.next = 15;
                return (0, _storeToken.signToken)(TokenData);

              case 15:
                token = _context3.sent;
                userData = {
                  user: user,
                  token: token
                };
                return _context3.abrupt('return', res.status(200).json(_responses2.default.success(200, 'Login successfully', userData)));

              case 20:
                _context3.prev = 20;
                _context3.t0 = _context3['catch'](3);

                (0, _tracelogger2.default)(_context3.t0);
                return _context3.abrupt('return', res.status(500).json(_responses2.default.error(500, 'Server error', _context3.t0)));

              case 24:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[3, 20]]);
      }));

      function buyerSignin(_x5, _x6) {
        return _ref3.apply(this, arguments);
      }

      return buyerSignin;
    }()
  }, {
    key: 'vendorSignin',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
        var _req$body4, email, password, user, valid, TokenData, token, userData;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _req$body4 = req.body, email = _req$body4.email, password = _req$body4.password;

                if (!(!email || !password)) {
                  _context4.next = 3;
                  break;
                }

                return _context4.abrupt('return', res.status(400).json(_responses2.default.error(400, 'Kindly fill all required information')));

              case 3:
                _context4.prev = 3;
                _context4.next = 6;
                return _Users2.default.findOne({ email: email });

              case 6:
                user = _context4.sent;

                if (user) {
                  _context4.next = 9;
                  break;
                }

                return _context4.abrupt('return', res.status(401).json(_responses2.default.error(401, "Invalid login details")));

              case 9:
                valid = _bcryptjs2.default.compareSync(password, user.password);

                if (valid) {
                  _context4.next = 12;
                  break;
                }

                return _context4.abrupt('return', res.status(401).json(_responses2.default.error(401, "Invalid login details")));

              case 12:
                TokenData = {
                  id: user._id,
                  email: user.email,
                  full_name: user.full_name
                };

                //  Generate Token

                _context4.next = 15;
                return (0, _storeToken.signToken)(TokenData);

              case 15:
                token = _context4.sent;
                userData = {
                  user: user,
                  token: token
                };
                return _context4.abrupt('return', res.status(200).json(_responses2.default.success(200, 'Login successfully', userData)));

              case 20:
                _context4.prev = 20;
                _context4.t0 = _context4['catch'](3);

                (0, _tracelogger2.default)(_context4.t0);
                return _context4.abrupt('return', res.status(500).json(_responses2.default.error(500, 'Server error', _context4.t0)));

              case 24:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this, [[3, 20]]);
      }));

      function vendorSignin(_x7, _x8) {
        return _ref4.apply(this, arguments);
      }

      return vendorSignin;
    }()
  }, {
    key: 'verifyAccount',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
        var otp, user, TokenData, token, userData;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                otp = req.body.otp;
                _context5.prev = 1;
                _context5.next = 4;
                return _Users2.default.findOne({ otp: otp });

              case 4:
                user = _context5.sent;

                if (user) {
                  _context5.next = 7;
                  break;
                }

                return _context5.abrupt('return', res.status(401).json(_responses2.default.error(401, "Invalid OTP ")));

              case 7:
                TokenData = {
                  id: user._id,
                  email: user.email,
                  full_name: user.full_name
                };

                //  Generate Token

                _context5.next = 10;
                return (0, _storeToken.signToken)(TokenData);

              case 10:
                token = _context5.sent;
                userData = {
                  user: user,
                  token: token
                };
                return _context5.abrupt('return', res.status(200).json(_responses2.default.success(200, 'Otp verify successfully', userData)));

              case 15:
                _context5.prev = 15;
                _context5.t0 = _context5['catch'](1);

                (0, _tracelogger2.default)(_context5.t0);
                return _context5.abrupt('return', res.status(500).json(_responses2.default.error(500, 'Server error', _context5.t0)));

              case 19:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this, [[1, 15]]);
      }));

      function verifyAccount(_x9, _x10) {
        return _ref5.apply(this, arguments);
      }

      return verifyAccount;
    }()
  }, {
    key: 'googlesignup',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(req, res) {
        var auth;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                auth = new _googleAuthLibrary.GoogleAuth({
                  scopes: 'https://www.googleapis.com/auth/cloud-platform'
                });

              case 1:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function googlesignup(_x11, _x12) {
        return _ref6.apply(this, arguments);
      }

      return googlesignup;
    }()
  }]);
  return authController;
}();

exports.default = authController;