import traceLogger from "../logger/tracelogger";
import User from "../models/Users";
import responses from "../utils/responses";

class profileController {


    /**
     *@description update profile 
     *@static
     *@param  {Object} req - request
     *@param  {object} res - response
     *@returns {object} - status code, message and response
     *@memberof profileController
     */



     static async updateProfile(req, res){
        const userId = req.user.id;

        try {
            const user = await User.findOne({ _id: id });

            if (!user) {
                return res
                  .status(400)
                  .json(responses.error(400, 'Sorry, user does not exist'));
              }

        }
        catch (error) {
      traceLogger(error);
      return res.status(500).json(responses.error(500, error));
    }
     }

}



export default profileController