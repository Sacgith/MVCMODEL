const  express=require('express');

const router=express.Router();

const usersController=require('../controllers/users_controller');


//map to users to profile users controller controller
router.get('/profile', usersController.profile);



module.exports=router;