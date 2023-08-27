/* eslint-disable no-unused-vars */


import validator from 'validator';
import passwordValidator from 'password-validator';
import randomstring from 'randomstring';
import tracelogger from '../logger/tracelogger';
import bcrypt from 'bcryptjs';
import { GoogleAuth  } from 'google-auth-library';
import User from '../models/Users';

import { signToken } from '../utils/storeToken';
import responses from '../utils/responses';



const schema = new passwordValidator();
// const defaultClient = SibApiV3Sdk.ApiClient.instance;
// const apiKey = defaultClient.authentications['api-key'];
// apiKey.apiKey = config.sendblue;
schema
  .is().min(8) // Minimum length 8
  .is().max(100) // Maximum length 100
  .has()
  .uppercase() // Must have uppercase letters
  .has()
  .lowercase() // Must have lowercase letters
  .has()
  .digits(1) // Must have at least 2 digits
  .has()
  .not()
  .spaces() // Should not have spaces
  .is()
  .not()
  .oneOf(['Passw0rd', 'Password123', 'Password', '1234567890']);


// const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
// let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

/**
 * @description Defines the actions for the authentication endpoints
 * @class authController
 */


class authController {
    /**
     *@description Sign up new users
     *@static
     *@param  {Object} req - request
     *@param  {object} res - response
     *@returns {object} - status code, message and response
     *@memberof authController
     */


     static async buyerSignup(req, res,) {
      let refferal;
      let userObject;
      ;
        const {
          full_name, email,  phone, password, current_location
        } = req.body;


      if (!email || !password || !phone ||  !full_name ) {
        return res
          .status(400)
          .json(responses.error(400, 'Kindly fill all required information'));
      }
      if (validator.isEmail(email) === false) {
        return res
          .status(400)
          .json(responses.error(400, 'Not a valid email format'));
      }

      try {
        const user = await  User.findOne({ email })
        if(user){
          return res
          .status(400)
          .json(responses.error(400, "User already exist"));
      }
      
        console.log('referal_code', referal_code)

        const code = randomstring.generate({
          length: 4,
          charset: 'numeric',
        });

        const referalCode = randomstring.generate({
          length: 10,
        });

        if(referal_code) {
           refferal = await User.findOne({ sharable_referal_code: referal_code})
           console.log('errgergergerfewfwe')
        }


        if(referal_code && refferal) {
           userObject = {
            email, password, full_name,  phone, sharable_referal_code: referalCode, referal: refferal._id, otp: code
          };
        } else {
          userObject = {
            email, password, full_name,  phone, sharable_referal_code: referalCode, otp: code
          };
        }

        const createdUser = await User.create(userObject);
        if(createdUser){
          return res
          .status(201)
          .json(responses.success(201, "User created successfully!", createdUser));
        }


      }
      catch (error) {
        tracelogger(error);
        return res
          .status(500)
          .json(responses.error(500, 'Server error', error));
      }


    }


    static async vendorSignup(req, res,) {
      let refferal;
      let userObject;
      ;
        const {
          full_name, email,  phone, password, current_location  
        } = req.body;


      if (!email || !password || !phone ||  !full_name ) {
        return res
          .status(400)
          .json(responses.error(400, 'Kindly fill all required information'));
      }
      if (validator.isEmail(email) === false) {
        return res
          .status(400)
          .json(responses.error(400, 'Not a valid email format'));
      }

      try {
        const user = await  User.findOne({ email })
        if(user){
          return res
          .status(400)
          .json(responses.error(400, "User already exist"));
      }
      
        console.log('referal_code', referal_code)

        const code = randomstring.generate({
          length: 4,
          charset: 'numeric',
        });

        const referalCode = randomstring.generate({
          length: 10,
        });

        if(referal_code) {
           refferal = await User.findOne({ sharable_referal_code: referal_code})
           console.log('errgergergerfewfwe')
        }


        if(referal_code && refferal) {
           userObject = {
            email, password, full_name,  phone, sharable_referal_code: referalCode, referal: refferal._id, otp: code
          };
        } else {
          userObject = {
            email, password, full_name,  phone, sharable_referal_code: referalCode, otp: code
          };
        }

        const createdUser = await User.create(userObject);
        if(createdUser){
          return res
          .status(201)
          .json(responses.success(201, "User created successfully!", createdUser));
        }


      }
      catch (error) {
        tracelogger(error);
        return res
          .status(500)
          .json(responses.error(500, 'Server error', error));
      }


    }



    static async buyerSignin(req, res,) {
      const {
        email, password,
      } = req.body;


    if (!email || !password  ) {
      return res
        .status(400)
        .json(responses.error(400, 'Kindly fill all required information'));
    }
    

    try {
      const user = await  User.findOne({ email });

      if(!user){
          return res
          .status(401)
          .json(responses.error(401, "Invalid login details"));
      }

      const valid =  bcrypt.compareSync(password, user.password);

      if (!valid) {
        return res.status(401).json(responses.error(401, "Invalid login details"));
      }

   
      const TokenData = {
        id: user._id,
        email: user.email,
        full_name: user.full_name,
      };

      //  Generate Token
      const token = await signToken(TokenData);

      const userData = {
        user,
        token,
      };

      return res
        .status(200)
        .json(responses.success(200, 'Login successfully', userData));

    }
    catch (error) {
      tracelogger(error);
      return res
        .status(500)
        .json(responses.error(500, 'Server error', error));
    }


  }

  static async vendorSignin(req, res,) {
    const {
      email, password,
    } = req.body;


  if (!email || !password  ) {
    return res
      .status(400)
      .json(responses.error(400, 'Kindly fill all required information'));
  }
  

  try {
    const user = await  User.findOne({ email });

    if(!user){
        return res
        .status(401)
        .json(responses.error(401, "Invalid login details"));
    }

    const valid =  bcrypt.compareSync(password, user.password);

    if (!valid) {
      return res.status(401).json(responses.error(401, "Invalid login details"));
    }

 
    const TokenData = {
      id: user._id,
      email: user.email,
      full_name: user.full_name,
    };

    //  Generate Token
    const token = await signToken(TokenData);

    const userData = {
      user,
      token,
    };

    return res
      .status(200)
      .json(responses.success(200, 'Login successfully', userData));

  }
  catch (error) {
    tracelogger(error);
    return res
      .status(500)
      .json(responses.error(500, 'Server error', error));
  }


}

  static async verifyAccount(req, res,) {
    const {
      otp,
    } = req.body;

    try {
      const user = await  User.findOne({ otp });
      if(!user){
        return res
        .status(401)
        .json(responses.error(401, "Invalid OTP "));
    }

    const TokenData = {
      id: user._id,
      email: user.email,
      full_name: user.full_name,
    };

      //  Generate Token
      const token = await signToken(TokenData);

      const userData = {
        user,
        token,
      };

      return res
        .status(200)
        .json(responses.success(200, 'Otp verify successfully', userData));

    }
    catch (error) {
      tracelogger(error);
      return res
        .status(500)
        .json(responses.error(500, 'Server error', error));
    }
  }


  static async googlesignup (req, res) {
    const auth = new GoogleAuth({
      scopes: 'https://www.googleapis.com/auth/cloud-platform'
    });
  }



}

export default authController;