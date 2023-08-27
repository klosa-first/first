"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _tracelogger = require("../logger/tracelogger");

var _tracelogger2 = _interopRequireDefault(_tracelogger);

var _Users = require("../models/Users");

var _Users2 = _interopRequireDefault(_Users);

var _responses = require("../utils/responses");

var _responses2 = _interopRequireDefault(_responses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var profileController = function () {
    function profileController() {
        (0, _classCallCheck3.default)(this, profileController);
    }

    (0, _createClass3.default)(profileController, null, [{
        key: "updateProfile",


        /**
         *@description update profile 
         *@static
         *@param  {Object} req - request
         *@param  {object} res - response
         *@returns {object} - status code, message and response
         *@memberof profileController
         */

        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
                var userId, user;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                userId = req.user.id;
                                _context.prev = 1;
                                _context.next = 4;
                                return _Users2.default.findOne({ _id: id });

                            case 4:
                                user = _context.sent;

                                if (user) {
                                    _context.next = 7;
                                    break;
                                }

                                return _context.abrupt("return", res.status(400).json(_responses2.default.error(400, 'Sorry, user does not exist')));

                            case 7:
                                _context.next = 13;
                                break;

                            case 9:
                                _context.prev = 9;
                                _context.t0 = _context["catch"](1);

                                (0, _tracelogger2.default)(_context.t0);
                                return _context.abrupt("return", res.status(500).json(_responses2.default.error(500, _context.t0)));

                            case 13:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[1, 9]]);
            }));

            function updateProfile(_x, _x2) {
                return _ref.apply(this, arguments);
            }

            return updateProfile;
        }()
    }]);
    return profileController;
}();

exports.default = profileController;