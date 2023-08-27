import { Router } from 'express';
import verificationController from '../controllers/verificationController';
import auth from '../middlewares/authMiddleware'




const router = Router();

const {
    nigeriaInternationalPassport
    // getOnePropertyListing,
    // getAllPropertyListing,
    // searchPropertyListing
} = verificationController;

router.post('/verify', auth, nigeriaInternationalPassport);



export default router;