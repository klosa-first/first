/* eslint-disable no-useless-escape */
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';


const saltRounds = 10; // or another integer in that ballpark

const { Schema } = mongoose;

const AccountSchema = new Schema(
  {
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




const Account = mongoose.model('Account', AccountSchema);
export default Account;
