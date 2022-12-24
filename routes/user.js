const UserController=require('../controllers/user');
const authMiddleware=require('../middleware/auth');
const router=require('express').Router();

router.post('/signup',UserController.signup);
router.post('/login',UserController.login);
router.post('/dashboard',authMiddleware,UserController.dashboard);



module.exports=router;