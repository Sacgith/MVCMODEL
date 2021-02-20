const express=require('express');
const port =8000;
const cookieParser=require('cookie-parser');


const expressEjsLayouts = require('express-ejs-layouts');

const app=express();


//layout 
const expressLayouts=require('express-ejs-layouts');


//mongodb
const db=require('./config/mongoose');


//cookies need to be parsed
//reading throug the post request 
app.use(express.urlencoded({
    extended:true
}));
//  app.use(cookieParser);

//static files
app.use(express.static('./assets'));

//layouts before routing 
app.use(expressLayouts);//don't need to call the function
//track style and scripts from some pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//user express router
app.use('/', require('./routes')); 


//set up the view engine
app.set('view engine' , 'ejs');
//path.join(_dirname, foldername=>view);
app.set('views', './views');

app.listen(port,function(err)
{   
    if(err){

        console.log(`Error :${err}`);
    }
        console.log(`Server is running on port :${port}`);

});