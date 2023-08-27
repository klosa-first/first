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

var _Property = require("../models/Property");

var _Property2 = _interopRequireDefault(_Property);

var _Users = require("../models/Users");

var _Users2 = _interopRequireDefault(_Users);

var _tracelogger = require("../logger/tracelogger");

var _tracelogger2 = _interopRequireDefault(_tracelogger);

var _responses = require("../utils/responses");

var _responses2 = _interopRequireDefault(_responses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propertyController = function () {
    function propertyController() {
        (0, _classCallCheck3.default)(this, propertyController);
    }

    (0, _createClass3.default)(propertyController, null, [{
        key: "createPropertyListing",

        /**
         * @description Defines the actions for the property endpoints
         * @class propertyController
         */

        /**
           *@description create a property to be listed
           *@static
           *@param  {Object} req - request
           *@param  {object} res - response
           *@returns {object} - status code, message and response
           *@memberof propertyController
           */

        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
                var userId, _req$body, rent_type, purpose, space_type, lga, state, address, features, payment_type, amount, user, userPropertyObject, createdProperty;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                // res.json("hello world")
                                userId = req.user.id;
                                _req$body = req.body, rent_type = _req$body.rent_type, purpose = _req$body.purpose, space_type = _req$body.space_type, lga = _req$body.lga, state = _req$body.state, address = _req$body.address, features = _req$body.features, payment_type = _req$body.payment_type, amount = _req$body.amount;

                                if (!(!rent_type || !purpose || !space_type || !lga || !state || !address || !features || !payment_type || !amount)) {
                                    _context.next = 4;
                                    break;
                                }

                                return _context.abrupt("return", res.status(400).json(_responses2.default.error(400, 'Kindly fill all required information')));

                            case 4:
                                _context.prev = 4;
                                _context.next = 7;
                                return _Users2.default.findOne({ _id: userId });

                            case 7:
                                user = _context.sent;

                                if (user) {
                                    _context.next = 10;
                                    break;
                                }

                                return _context.abrupt("return", res.status(400).json(_responses2.default.error(400, "Your not authorize to perform this operation")));

                            case 10:
                                userPropertyObject = {
                                    rent_type: rent_type, purpose: purpose, space_type: space_type, lga: lga, state: address, features: features, payment_type: payment_type, amount: amount, user_id: userId
                                };
                                _context.next = 13;
                                return _Property2.default.create(userPropertyObject);

                            case 13:
                                createdProperty = _context.sent;

                                if (!createdProperty) {
                                    _context.next = 16;
                                    break;
                                }

                                return _context.abrupt("return", res.status(201).json(_responses2.default.success(201, "Property created successfully!", createdProperty)));

                            case 16:
                                _context.next = 22;
                                break;

                            case 18:
                                _context.prev = 18;
                                _context.t0 = _context["catch"](4);

                                (0, _tracelogger2.default)(_context.t0);
                                return _context.abrupt("return", res.status(500).json(_responses2.default.error(500, 'Server error', _context.t0)));

                            case 22:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[4, 18]]);
            }));

            function createPropertyListing(_x, _x2) {
                return _ref.apply(this, arguments);
            }

            return createPropertyListing;
        }()

        /**
        *@description get one property
        *@static
        *@param  {Object} req - request
        *@param  {object} res - response
        *@returns {object} - status code, message and response
        *@memberof propertyController
        */

    }, {
        key: "getOnePropertyListing",
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
                var id, onePropertyListing;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                id = req.query.id;
                                _context2.prev = 1;
                                _context2.next = 4;
                                return _Property2.default.findOne({ _id: id });

                            case 4:
                                onePropertyListing = _context2.sent;

                                if (onePropertyListing) {
                                    _context2.next = 7;
                                    break;
                                }

                                return _context2.abrupt("return", res.status(400).json(_responses2.default.error(400, 'Sorry, Property does not exist')));

                            case 7:
                                return _context2.abrupt("return", res.status(200).json(_responses2.default.success(200, 'Property details retrieved successfully', onePropertyListing)));

                            case 10:
                                _context2.prev = 10;
                                _context2.t0 = _context2["catch"](1);

                                (0, _tracelogger2.default)(_context2.t0);
                                return _context2.abrupt("return", res.status(500).json(_responses2.default.error(500, _context2.t0)));

                            case 14:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[1, 10]]);
            }));

            function getOnePropertyListing(_x3, _x4) {
                return _ref2.apply(this, arguments);
            }

            return getOnePropertyListing;
        }()

        /**
        *@description get all property
        *@static
        *@param  {Object} req - request
        *@param  {object} res - response
        *@returns {object} - status code, message and response
        *@memberof propertyController
        */

    }, {
        key: "getAllPropertyListing",
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
                var _req$query, page, size, sort, allPropertyListing;

                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _req$query = req.query, page = _req$query.page, size = _req$query.size, sort = _req$query.sort;
                                _context3.prev = 1;
                                _context3.next = 4;
                                return _Property2.default.find().sort({ _id: sort === 'asc' ? 1 : -1 }).limit(limit * 1).skip((page - 1) * limit).exec();

                            case 4:
                                allPropertyListing = _context3.sent;

                                if (allPropertyListing) {
                                    _context3.next = 7;
                                    break;
                                }

                                return _context3.abrupt("return", res.status(400).json(_responses2.default.error(400, 'Sorry, Properties does not exist')));

                            case 7:
                                return _context3.abrupt("return", res.status(200).json(_responses2.default.success(200, 'All Properties details retrieved successfully', allPropertyListing)));

                            case 10:
                                _context3.prev = 10;
                                _context3.t0 = _context3["catch"](1);

                                (0, _tracelogger2.default)(_context3.t0);
                                return _context3.abrupt("return", res.status(500).json(_responses2.default.error(500, _context3.t0)));

                            case 14:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this, [[1, 10]]);
            }));

            function getAllPropertyListing(_x5, _x6) {
                return _ref3.apply(this, arguments);
            }

            return getAllPropertyListing;
        }()

        /**
        *@description search property
        *@static
        *@param  {Object} req - request
        *@param  {object} res - response
        *@returns {object} - status code, message and response
        *@memberof propertyController
        */

    }, {
        key: "searchPropertyListing",
        value: function () {
            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
                var content, property;
                return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                content = req.query.content;
                                _context4.prev = 1;
                                _context4.next = 4;
                                return _Property2.default.find({ $text: { $search: content } });

                            case 4:
                                property = _context4.sent;

                                if (property) {
                                    _context4.next = 7;
                                    break;
                                }

                                return _context4.abrupt("return", res.status(404).json(_responses2.default.error(404, 'Sorry, Property not found')));

                            case 7:
                                return _context4.abrupt("return", res.status(200).json(_responses2.default.success(200, ' Property retrieved successfully', property)));

                            case 10:
                                _context4.prev = 10;
                                _context4.t0 = _context4["catch"](1);

                                (0, _tracelogger2.default)(_context4.t0);
                                return _context4.abrupt("return", res.status(500).json(_responses2.default.error(500, _context4.t0)));

                            case 14:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this, [[1, 10]]);
            }));

            function searchPropertyListing(_x7, _x8) {
                return _ref4.apply(this, arguments);
            }

            return searchPropertyListing;
        }()

        /**
        *@description Upload image document
        *@static
        *@param  {Object} req - request
        *@param  {object} res - response
        *@returns {object} - status code, message and response
        *@memberof documentController
        */

    }, {
        key: "addImage",
        value: function () {
            var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
                var id, property_id, image_type, user, propertyItem, imageUrl, newImages, data, updatedProperty;
                return _regenerator2.default.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                id = req.user.id;
                                property_id = req.query.id;
                                image_type = req.query.image_type;
                                _context5.prev = 3;
                                _context5.next = 6;
                                return _Users2.default.findOne({ _id: id });

                            case 6:
                                user = _context5.sent;

                                if (user) {
                                    _context5.next = 9;
                                    break;
                                }

                                return _context5.abrupt("return", res.status(401).json(_responses2.default.error(401, 'Not authorized')));

                            case 9:
                                _context5.next = 11;
                                return _Property2.default.findOne({ _id: property_id });

                            case 11:
                                propertyItem = _context5.sent;

                                if (propertyItem) {
                                    _context5.next = 14;
                                    break;
                                }

                                return _context5.abrupt("return", res.status(400).json(_responses2.default.error(400, 'Property does not exist')));

                            case 14:
                                _context5.next = 16;
                                return cloudinary.uploader.upload(req.file.path);

                            case 16:
                                imageUrl = _context5.sent;
                                newImages = propertyItem.images.push(imageUrl.secure_url);
                                data = {
                                    images: newImages

                                    // Saving imagge url to the Property table
                                };
                                _context5.next = 21;
                                return _Property2.default.findOneAndUpdate({ _id: property_id }, data, { new: true });

                            case 21:
                                updatedProperty = _context5.sent;

                                if (!updatedProperty) {
                                    _context5.next = 24;
                                    break;
                                }

                                return _context5.abrupt("return", res.status(200).json(_responses2.default.error(200, 'image uploaded successfully')));

                            case 24:
                                _context5.next = 30;
                                break;

                            case 26:
                                _context5.prev = 26;
                                _context5.t0 = _context5["catch"](3);

                                (0, _tracelogger2.default)(_context5.t0);
                                return _context5.abrupt("return", res.status(500).json(_responses2.default.error(500, 'Server error', _context5.t0)));

                            case 30:
                            case "end":
                                return _context5.stop();
                        }
                    }
                }, _callee5, this, [[3, 26]]);
            }));

            function addImage(_x9, _x10) {
                return _ref5.apply(this, arguments);
            }

            return addImage;
        }()
    }]);
    return propertyController;
}();

exports.default = propertyController;