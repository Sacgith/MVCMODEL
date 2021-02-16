const mongoose=require('mongoose');

const userSchema=new mongoose.Schema(
    {
        email:{
            type:String,
            required:true,
            unique:true
        },
        password: {
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        }
    }, {
        timestamps:true
    });

    //User->database will be created by name User in robo3t
    const User=mongoose.model('User', userSchema);

    module.exports=User;