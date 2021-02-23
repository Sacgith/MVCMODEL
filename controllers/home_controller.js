
const  Post=require('../models/post');

//this is sending info directly to the browser

// module.exports.home=function(req, res)
// {
//      return res.end('<h1>Express is up for Codial</h1>');
// }

//module.exports.actionName=function(req, res){}

module.exports.home=function(req, res)
{    
    // console.log(req.cookies);//it will print the cookies
    // res.cookie('user_id', 23); it will change user_id to 23

    //  Post.find({}, function(err, posts){
    //      return res.render('home', {
    //          title: "Codeial | Home",
    //          posts:posts
    //      });
    //  });
    //populate the user from each posts
     Post.find({}).populate('user').
     populate({
       path:'comments',
       populate:{
         path:'user'
       }
     }).exec(function(err, posts){
           return res.render("home", {
             title: "Codeial | Home",
             posts: posts,
           });
     })
   
} 