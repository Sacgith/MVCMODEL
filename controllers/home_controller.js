


//this is sending info directly to the browser

// module.exports.home=function(req, res)
// {
//      return res.end('<h1>Express is up for Codial</h1>');
// }

//module.exports.actionName=function(req, res){}

module.exports.home=function(req, res)
{
    return res.render('home', {
        title:"Home"
    });

}