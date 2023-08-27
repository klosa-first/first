'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _authController = require('../controllers/authController');

var _authController2 = _interopRequireDefault(_authController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

var buyerSignup = _authController2.default.buyerSignup,
    vendorSignup = _authController2.default.vendorSignup,
    buyerSignin = _authController2.default.buyerSignin,
    vendorSignin = _authController2.default.vendorSignin,
    verifyAccount = _authController2.default.verifyAccount;


router.post('/buyer_signup', buyerSignup);
router.post('/vendor_signup', vendorSignup);
router.post('/buyer_signin', buyerSignin);
router.post('/vendor_signin', vendorSignin);
router.post('/verifyaccount', verifyAccount);

exports.default = router;