"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var verifyNigeriaInternationalPassport = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(details) {
        var data, res;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        data = {
                            "id": details.passportNumber,
                            "lastName": details.lastName,
                            "isSubjectConsent": true,
                            "validations": {
                                "data": {
                                    "firstName": details.firstName,
                                    "dateOfBirth": details.dateOfBirth
                                }
                            }

                            // Sending post data to API URL
                        };
                        _context.next = 3;
                        return _axios2.default.post('https://api.sandbox.youverify.co/v2/api/identity/ng/passport', data);

                    case 3:
                        res = _context.sent;

                        // const res = await axios.get('https://google.com')
                        console.log(res);
                        return _context.abrupt("return", res);

                    case 6:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function verifyNigeriaInternationalPassport(_x) {
        return _ref.apply(this, arguments);
    };
}();

exports.default = verifyNigeriaInternationalPassport;