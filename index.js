const express=require('express');
const expressEjsLayouts = require('express-ejs-layouts');

const app=express();

const port=9000;


//layout 
const expressLayouts=require('express-ejs-layouts');


//static files
app.use(express.static('./assets'));

//layouts before routing 
app.use(expressLayouts);//don't need to call the function
//track style and scripts from some pages into the layout
app.set('layout extracStyles', true);
app.set('layout  extractSCripts', true);

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