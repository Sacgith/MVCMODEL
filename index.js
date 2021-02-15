const express=require('express');

const app=express();

const port=9000;

//user express router
app.use('/', require('./routes'));



app.listen(port,function(err)
{   
    if(err){

        console.log(`Error :${err}`);
    }
        console.log(`Server is running on port :${port}`);

});