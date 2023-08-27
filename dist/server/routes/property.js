'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _propertyController = require('../controllers/propertyController');

var _propertyController2 = _interopRequireDefault(_propertyController);

var _authMiddleware = require('../middlewares/authMiddleware');

var _authMiddleware2 = _interopRequireDefault(_authMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

var createPropertyListing = _propertyController2.default.createPropertyListing,
    getOnePropertyListing = _propertyController2.default.getOnePropertyListing,
    getAllPropertyListing = _propertyController2.default.getAllPropertyListing,
    searchPropertyListing = _propertyController2.default.searchPropertyListing;


router.post('/create', _authMiddleware2.default, createPropertyListing);
router.get('/getone', _authMiddleware2.default, getOnePropertyListing);
router.get('/getall', _authMiddleware2.default, getAllPropertyListing);
router.get('/searchproperty', _authMiddleware2.default, searchPropertyListing);

exports.default = router;