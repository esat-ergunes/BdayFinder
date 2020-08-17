
const User = require('../models/User');
//const passport = require('../passport/passport');
const jwt = require('jsonwebtoken');
const { response } = require('express');
const { token } = require('morgan');

 const signup = async (req,res,next)=>{
    let username = req.body.username;
    let password = req.body.password;

    const user = new User({method:'local',username: username});

    await user.setPassword(password);
    await user.save().then(result=>{
        let token = jwt.sign({
            uid: result._id,
            username: result.username
        },"MyVerySecretWord");
        res.json({
            "status":"success",
            "message": "user is successfully saved.",
            "data":{
                "token": token
            }
        });

    }).catch( error =>{

res.json({
            "status":"Error",
            "message": "user is not successfully saved!"
        });

    });

 };



 const login = async (req,res,next)=>{
     const  user  = await User.authenticate()(req.body.username, req.body.password).then(result=>{
        console.log(result.user._id);
        if(!result.user){
             return res.json({
               "status": "faild",
               "message":"User not found"
             });

        }

        let token = jwt.sign({
            uid: result.user._id,
            username: result.user.username,
          },"MyVerySecretWord");
        
        return res.json({
            "status":"success",
            "data":{
                "token":token
            }
        });

     }).catch(error => {
         res.json({
           "status": "error",
           "message":error
         });

     });
 }


 const facebookOAuth = async(req,res,next) => {
     console.log('testttttttttt');
   console.log(req.user, res.user);
  
 }


 const secret  = async(req,res,next)=>{
     console.log('user called the secret');

    
 }




 module.exports.signup =signup;
  module.exports.login = login;
  module.exports.facebookOAuth=facebookOAuth;
  module.exports.secret = secret;
  