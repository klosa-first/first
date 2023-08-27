/* eslint-disable no-useless-escape */
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';


const saltRounds = 10; // or another integer in that ballpark

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
      lowercase: true,
      unique: true,

    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    full_name: {
      type: String,
    },

    current_location: {
      type: String,
    },

    sharable_referal_code: {
      type: String,
    },

    referal: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
     otp: {
      type: Number,
    },
    international_passport: {
      type: Boolean,
      default: false
      // required: true,
    },
    identity_card : {
      type: Boolean,
      default: false
    },
    nin_slip: {
      type: Boolean,
      default: false,
    },
   
   
  },
  { timestamps: true }
);

// eslint-disable-next-line func-names
UserSchema.pre('save', function (next) {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});


const User = mongoose.model('User', UserSchema);

export default User;
