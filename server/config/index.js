/* eslint-disable max-len */
import dotenv from 'dotenv';

dotenv.config();

const config = {
  MONGODB_DATABASE: process.env.DB_URL_TEST,
  secretOrKey: process.env.JWT_TOKEN_SECRET,
  mailject_credential_one: process.env.CREDENTIAL_ONE,
  mailject_credential_two: process.env.CREDENTIAL_TWO,
  paystackToken: process.env.PAYSTACK,
  cloudinary_name: process.env.CLOUDINARY_NAME,
  cloudinary_key: process.env.CLOUDINARY_KEY,
  cloudinary_secret: process.env.CLOUDINARY_SECRET,

};

export default config;