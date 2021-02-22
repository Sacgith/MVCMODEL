const express=require('express');

const router=express.Router();


//controller
const  homeController=require("../controllers/home_controller");

console.log("Router Loaded");

//controller
router.get('/', homeController.home);
//users controller and routerr
//this will access to this route and will automatically 
//access by main server.js through
router.use('/users', require('./users'));


//posts
router.use('/posts', require('./post'));

//for any further routes, access frmom here 

//router.user('/routerName', require('./routerfile'));


module.exports=router;