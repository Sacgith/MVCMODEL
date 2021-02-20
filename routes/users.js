const  express=require('express');

const router=express.Router();

const usersController=require('../controllers/users_controller');


//map to users to profile users controller controller
router.get('/profile', usersController.profile);

router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);
router.get('/log-out',usersController.logout);

//sign up
router.post('/create',usersController.create);
//sign in
router.post('/create-session', usersController.createSession );




module.exports=router;