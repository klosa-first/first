'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _auth = require('./auth');

var _auth2 = _interopRequireDefault(_auth);

var _property = require('./property');

var _property2 = _interopRequireDefault(_property);

var _verification = require('./verification');

var _verification2 = _interopRequireDefault(_verification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/auth', _auth2.default);
app.use('/property', _property2.default);
app.use('/verification', _verification2.default);
// app.use('/bank', bankRoutes);
// app.use('/document', documentRoutes);
// app.use('/transaction', transactionRoutes);
// app.use('/subscription', subscriptionRoutes);
// app.use('/investmentPlan', investmentPlanRoutes);
// app.use('/investment', investmentRoutes);
// app.use('/wallet', walletRoutes);
// app.use('/withdraw', withdrawalRoutes);
// app.use('/safe', safeRoutes);

exports.default = app;
// module.exports = app;