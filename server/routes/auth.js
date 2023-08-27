import { Router } from 'express';
import authController from '../controllers/authController';


const router = Router();

const {
    buyerSignup,
    vendorSignup,
    buyerSignin,
    vendorSignin,
    verifyAccount
} = authController;


router.post('/buyer_signup', buyerSignup);
router.post('/vendor_signup', vendorSignup);
router.post('/buyer_signin', buyerSignin);
router.post('/vendor_signin', vendorSignin);
router.post('/verifyaccount', verifyAccount);


export default router;