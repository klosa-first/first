import { Router } from 'express';
import propertyController from '../controllers/propertyController';
import auth from '../middlewares/authMiddleware'



const router = Router();

const {
    createPropertyListing,
    getOnePropertyListing,
    getAllPropertyListing,
    searchPropertyListing
} = propertyController;


router.post('/create', auth, createPropertyListing);
router.get('/getone', auth, getOnePropertyListing);
router.get('/getall', auth, getAllPropertyListing);
router.get('/searchproperty', auth, searchPropertyListing);


export default router;