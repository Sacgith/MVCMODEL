


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
    return res.render('home', {
        title:"Home"
    });
}