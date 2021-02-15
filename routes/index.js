const express=require('express');

const router=express.Router();


//controller
const  homeController=require("../controllers/home_controller");

console.log("Router Loaded");

//controller
router.get('/', homeController.home);


module.exports=router;