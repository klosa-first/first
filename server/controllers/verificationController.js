import User from '../models/Users';
import verifyNigeriaInternationalPassport from '../services/verify_nigeria_international_passport';
import responses from '../utils/responses';


class verificationController {

     /**
   *@description Get user details from github
   *@static
   *@param  {Object} req - request
   *@param  {object} res - response
   *@returns {object} - returns user details, gists and organization details
   *@memberof verificationController
   */


   static async nigeriaInternationalPassport(req, res) {
    const { passport_number, dob } = req.body;
    const id = req.user.id;
    try {

        const user = await User.findOne({ _id: id });
        // slit string by space
        const first_name = user.full_name.split(' ')[0];
        const last_name = user.full_name.split(' ')[1];
        const data = {
            passportNumber: passport_number,
            firstName: first_name,
            lastName:last_name,
            dateOfBirth: dob

        }
       const response = await verifyNigeriaInternationalPassport(data);
       console.log("Helloooooooooo",response);
       
       if (!response) {
        return res
          .status(400)
          .json(responses.error(400, 'Sorry, Verification was not successfull'));
      }
         return res
        .status(200)
        .json(responses.success(200, ' Verification done successfully', response));

    } catch (error) {
        
    }
   }
}


export default verificationController