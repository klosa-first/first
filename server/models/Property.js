/* eslint-disable no-useless-escape */
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';


const saltRounds = 10; // or another integer in that ballpark

const { Schema } = mongoose;

const PropertySchema = new Schema(
  {
    rent_type: {
      type: String,
     enum: ['Rent', 'Lease']
    },
      purpose : {
        type: String,
       enum: ['Residential', 'Commercial']
      },
      space_type: {
        type: String,
       enum: ['Flat', 'Self contain', 'Single room', 'Shop', 'Complex', 'Office space', 'Event hall']
      },
      lga: {
      type: String,
    },

    state: {
      type: String,
    },

    address: {
        type: String,
    },

     features: {
      type: String,
    },

    images: {
        type: Array,
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
      ref: 'User',
  },
   
   
  },
  { timestamps: true }
);

PropertySchema.index({ '$**': 'text' });


const Property = mongoose.model('Property', PropertySchema);
export default Property;
