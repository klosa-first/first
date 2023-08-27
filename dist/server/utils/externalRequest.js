'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBanks = exports.bvnLookUp = exports.verifyAccountNUmber = exports.verifyTransaction = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _index = require('../config/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */

var verifyTransaction = exports.verifyTransaction = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ref) {
    var response;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _axios2.default.get('https://api.paystack.co/transaction/verify/' + ref, {
              headers: {
                Authorization: 'Bearer ' + _index2.default.Paystack_secret
              }
            });

          case 2:
            response = _context.sent;

            console.log(response, 'response response response response response');
            return _context.abrupt('return', response);

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function verifyTransaction(_x) {
    return _ref.apply(this, arguments);
  };
}();

var verifyAccountNUmber = exports.verifyAccountNUmber = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(accountNumber, bankCode) {
    var response;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _axios2.default.get('https://api.paystack.co/bank/resolve?account_number=' + accountNumber + '&bank_code=' + bankCode, {
              headers: {
                Authorization: 'Bearer ' + _index2.default.Paystack_secret
              }
            });

          case 2:
            response = _context2.sent;

            console.log(response);
            return _context2.abrupt('return', response.data);

          case 5:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function verifyAccountNUmber(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

var bvnLookUp = exports.bvnLookUp = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(bvn, account_number, bank_code, first_name, last_name) {
    var data, response;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            data = {
              bvn: bvn,
              account_number: account_number,
              bank_code: bank_code,
              first_name: first_name,
              last_name: last_name
            };
            _context3.next = 3;
            return _axios2.default.post('https://api.paystack.co/bvn/match', data, {
              headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + _index2.default.Paystack_secret
              }
            }).then(function (res) {
              return res.data;
            }).catch(function (err) {
              return err.response.data;
            });

          case 3:
            response = _context3.sent;
            return _context3.abrupt('return', response);

          case 5:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function bvnLookUp(_x4, _x5, _x6, _x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}();

var getBanks = exports.getBanks = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
    var response;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _axios2.default.get('https://api.paystack.co/bank', {
              headers: {
                Authorization: 'Bearer ' + _index2.default.Paystack_secret
              }
            });

          case 2:
            response = _context4.sent;
            return _context4.abrupt('return', response.data);

          case 4:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  }));

  return function getBanks() {
    return _ref4.apply(this, arguments);
  };
}();