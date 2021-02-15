const express=require('express');
const expressEjsLayouts = require('express-ejs-layouts');

const app=express();

const port=9000;


//layout 
const expressLayouts=require('express-ejs-layouts');

//layouts before routing 
app.use(expressLayouts);//don't need to call the function

//user express router
app.use('/', require('./routes')); 


//set up the view engine
app.set('view engine' , 'ejs');
//path.join(_dirname, foldername=>view);
app.set('veiw', './views');




app.listen(port,function(err)
{   
    if(err){

        console.log(`Error :${err}`);
    }
        console.log(`Server is running on port :${port}`);

});