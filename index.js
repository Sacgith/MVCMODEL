const express=require('express');

const app=express();

const port=9000;

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