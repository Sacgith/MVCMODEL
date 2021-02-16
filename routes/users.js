const  express=require('express');

const router=express.Router();

const usersController=require('../controllers/users_controller');


//map to users to profile users controller controller
router.get('/profile', usersController.profile);

router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);



module.exports=router;