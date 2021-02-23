const express=require('express');
const port =8000;
const cookieParser=require('cookie-parser');


const expressEjsLayouts = require('express-ejs-layouts');

const app=express();

//layout 
const expressLayouts=require('express-ejs-layouts');


//mongodb
const db=require('./config/mongoose');

//passport seesion
const session=require('express-session');
const passport = require('./config/passport-local-strategy');
const passportLocal=require('./config/passport-local-strategy');
const { Session } = require('express-session');
//permanent store
const MongoStore=require('connect-mongo')(session);

//sass
const sassMiddleware=require('node-sass-middleware');
//just before server starts
app.use(sassMiddleware({
    src:'./assets/scss',
    dest:'./assets/css',
    debug:true,
    outputStyle:'extended',
    prefix:'/css'
}))
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



//set up the view engine
app.set('view engine' , 'ejs');
//path.join(_dirname, foldername=>view);
app.set('views', './views');


//mongo store is used to store the session cookie in the db
app.use(session({

   name:'codeial',
   //todo change the secret before deployment in production mode
   secret:'blahsomething',
   saveUninitialized: false,
   resave: false,
   cookie: {
       maxAge:(1000*60*100)
   }, 
   store: new MongoStore({
       //db   
       mongooseConnection:db,
       autoRemove:'disabled'
   }, function(err){
       console.log(err||'connect-mongodb setup ok');
   }),

}));
app.use(passport.initialize());
app.use(passport.session());
//iska dekh liyo yaar ek baar
app.use(passport.setAuthenticatedUser);

//user express router
app.use('/', require('./routes')); 


app.listen(port,function(err)
{   
    if(err){

        console.log(`Error :${err}`);
    }
        console.log(`Server is running on port :${port}`);

});