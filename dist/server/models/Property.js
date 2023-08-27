'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-useless-escape */
var saltRounds = 10; // or another integer in that ballpark

var Schema = _mongoose2.default.Schema;


var PropertySchema = new Schema({
    rent_type: {
        type: String,
        enum: ['Rent', 'Lease']
    },
    purpose: {
        type: String,
        enum: ['Residential', 'Commercial']
    },
    space_type: {
        type: String,
        enum: ['Flat', 'Self contain', 'Single room', 'Shop', 'Complex', 'Office space', 'Event hall']
    },
    lga: {
        type: String
    },

    state: {
        type: String
    },

    address: {
        type: String
    },

    features: {
        type: String
    },

    images: {
        type: Array
    },

    payment_type: {
        type: String,
        enum: ['Weekly', 'Monthly', 'Quarterly', 'Yearly']
    },

    amount: {
        type: Number
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

}, { timestamps: true });

PropertySchema.index({ '$**': 'text' });

var Property = _mongoose2.default.model('Property', PropertySchema);
exports.default = Property;