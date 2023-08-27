import Property from "../models/Property";
import User from "../models/Users";
import tracelogger from '../logger/tracelogger';
import responses from "../utils/responses";






class propertyController {
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


     static async createPropertyListing(req, res){
        // res.json("hello world")
        const userId = req.user.id;
        const { rent_type,  purpose, space_type, lga, state, address, features, payment_type, amount } = req.body;

        if ( !rent_type || !purpose || !space_type || !lga || !state || !address || !features || !payment_type || !amount){
            return res
            .status(400)
            .json(responses.error(400, 'Kindly fill all required information'));
        }

        try {

                const user = await User.findOne({ _id: userId });
                if(!user){
                    return res
                    .status(400)
                    .json(responses.error(400, "Your not authorize to perform this operation"));
                }

                    const userPropertyObject = {
                        rent_type, purpose, space_type,  lga, state: address, features, payment_type, amount, user_id: userId
                      };
                

        const createdProperty = await Property.create(userPropertyObject);
        if(createdProperty){
          return res
          .status(201)
          .json(responses.success(201, "Property created successfully!", createdProperty));
        }

        } catch (error) {
            tracelogger(error);
            return res
              .status(500)
              .json(responses.error(500, 'Server error', error));
        }
     }


     /**
     *@description get one property
     *@static
     *@param  {Object} req - request
     *@param  {object} res - response
     *@returns {object} - status code, message and response
     *@memberof propertyController
     */

     static async getOnePropertyListing(req, res){
        const id = req.query.id
        try {
            const onePropertyListing = await Property.findOne({ _id: id });

            if (!onePropertyListing) {
                return res
                  .status(400)
                  .json(responses.error(400, 'Sorry, Property does not exist'));
              }
            return res
        .status(200)
        .json(responses.success(200, 'Property details retrieved successfully', onePropertyListing));
        

        }
        catch (error) {
            tracelogger(error);
            return res.status(500).json(responses.error(500, error));
          }
     }


     /**
     *@description get all property
     *@static
     *@param  {Object} req - request
     *@param  {object} res - response
     *@returns {object} - status code, message and response
     *@memberof propertyController
     */

     static async getAllPropertyListing(req, res){
      let { page, size, sort } = req.query;

        
        try {
            const allPropertyListing = await Property.find().sort({ _id: sort ==='asc' ? 1 : -1  }) .limit(limit * 1).skip(( page - 1 )  * limit).exec();
            

            if (!allPropertyListing) {
                return res
                  .status(400)
                  .json(responses.error(400, 'Sorry, Properties does not exist'));
              }
            return res
        .status(200)
        .json(responses.success(200, 'All Properties details retrieved successfully', allPropertyListing));

        }
        catch (error) {
            tracelogger(error);
            return res.status(500).json(responses.error(500, error));
          }
     }



      /**
     *@description search property
     *@static
     *@param  {Object} req - request
     *@param  {object} res - response
     *@returns {object} - status code, message and response
     *@memberof propertyController
     */

     static async searchPropertyListing(req, res){
        const content = req.query.content

        try {

            const property = await Property.find({ $text : { $search : content}})

            if (!property) {
                return res
                  .status(404)
                  .json(responses.error(404, 'Sorry, Property not found'));
              }
              return res
              .status(200)
              .json(responses.success(200, ' Property retrieved successfully', property));

            
        } catch (error) {
            tracelogger(error);
            return res.status(500).json(responses.error(500, error));
          }
     }

        /**
   *@description Upload image document
   *@static
   *@param  {Object} req - request
   *@param  {object} res - response
   *@returns {object} - status code, message and response
   *@memberof documentController
   */


   static async addImage(req, res,) {
    const id = req.user.id;
    const property_id = req.query.id;

    const image_type = req.query.image_type;

    try {
      const user = await User.findOne({ _id: id });

      if (!user){
        return res
        .status(401)
        .json(responses.error(401, 'Not authorized'));
    }
     
    const propertyItem = await Property.findOne({_id: property_id});

    if (!propertyItem){
      return res
      .status(400)
      .json(responses.error(400, 'Property does not exist'));
  }

      const imageUrl = await cloudinary.uploader.upload(req.file.path);

      const newImages = propertyItem.images.push(imageUrl.secure_url);

      const data = {
        images: newImages
      }

          // Saving imagge url to the Property table
          const updatedProperty = await Property.findOneAndUpdate(
            {_id: property_id },
            data,
            { new: true }
          );
          
          if(updatedProperty) {
            return res
            .status(200)
            .json(responses.error(200, 'image uploaded successfully'));
          }

    }catch (error) {
      tracelogger(error);
      return res
        .status(500)
        .json(responses.error(500, 'Server error', error));
    }
   }

}

export default propertyController