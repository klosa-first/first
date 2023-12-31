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

var _Users = require('../models/Users');

var _Users2 = _interopRequireDefault(_Users);

var _verify_nigeria_international_passport = require('../services/verify_nigeria_international_passport');

var _verify_nigeria_international_passport2 = _interopRequireDefault(_verify_nigeria_international_passport);

var _responses = require('../utils/responses');

var _responses2 = _interopRequireDefault(_responses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var verificationController = function () {
    function verificationController() {
        (0, _classCallCheck3.default)(this, verificationController);
    }

    (0, _createClass3.default)(verificationController, null, [{
        key: 'nigeriaInternationalPassport',


        /**
        *@description Get user details from github
        *@static
        *@param  {Object} req - request
        *@param  {object} res - response
        *@returns {object} - returns user details, gists and organization details
        *@memberof verificationController
        */

        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
                var _req$body, passport_number, dob, id, user, first_name, last_name, data, response;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _req$body = req.body, passport_number = _req$body.passport_number, dob = _req$body.dob;
                                id = req.user.id;
                                _context.prev = 2;
                                _context.next = 5;
                                return _Users2.default.findOne({ _id: id });

                            case 5:
                                user = _context.sent;

                                // slit string by space
                                first_name = user.full_name.split(' ')[0];
                                last_name = user.full_name.split(' ')[1];
                                data = {
                                    passportNumber: passport_number,
                                    firstName: first_name,
                                    lastName: last_name,
                                    dateOfBirth: dob

                                };
                                _context.next = 11;
                                return (0, _verify_nigeria_international_passport2.default)(data);

                            case 11:
                                response = _context.sent;

                                console.log("Helloooooooooo", response);

                                if (response) {
                                    _context.next = 15;
                                    break;
                                }

                                return _context.abrupt('return', res.status(400).json(_responses2.default.error(400, 'Sorry, Verification was not successfull')));

                            case 15:
                                return _context.abrupt('return', res.status(200).json(_responses2.default.success(200, ' Verification done successfully', response)));

                            case 18:
                                _context.prev = 18;
                                _context.t0 = _context['catch'](2);

                            case 20:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[2, 18]]);
            }));

            function nigeriaInternationalPassport(_x, _x2) {
                return _ref.apply(this, arguments);
            }

            return nigeriaInternationalPassport;
        }()
    }]);
    return verificationController;
}();

exports.default = verificationController;