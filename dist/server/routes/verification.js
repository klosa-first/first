'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _verificationController = require('../controllers/verificationController');

var _verificationController2 = _interopRequireDefault(_verificationController);

var _authMiddleware = require('../middlewares/authMiddleware');

var _authMiddleware2 = _interopRequireDefault(_authMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

var nigeriaInternationalPassport = _verificationController2.default.nigeriaInternationalPassport;


router.post('/verify', _authMiddleware2.default, nigeriaInternationalPassport);

exports.default = router;