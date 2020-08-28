const passport = require('passport');
const User = require('../models/User');
const { token } = require('morgan');
// load the auth variables for fb 
var configAuth = require('../controllers/auth');

/*-----------FACEBOOK----------*/
//const FacebookTokenStrategy = require('passport-facebook-token');
const FacebookStrategy = require("passport-facebook").Strategy;

const configFB = require('../configuration')
/*-----------------------------*/

const config = require('config');

// CHANGE: USE "createStrategy" INSTEAD OF "authenticate"
passport.use(User.createStrategy());
// OPTIONAL: serialize user data for sessions
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// WEBTOKEN STRATEGY JWT
var JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.get('jwt.secret');
passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ _id: jwt_payload.uid }, function (err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    });
  })
);


//FACEBOOK
passport.use('facebook', new FacebookStrategy({

  clientID: configFB.oauth.facebook.clientID,
  clientSecret:configFB.oauth.facebook.clientSecret,
  callbackURL:configFB.oauth.facebook.callbackURL,
  profileFields : ['emails']

}, async (accessToken, refreshToken, profile, done) => {
  try{
    console.log('profile',profile);
    console.log("accessToken",accessToken);
    console.log("refreshToken", refreshToken);

    const existingUser = await User.findOne({"facebook.id":profile.id});
    if(existingUser){
      return done(null,existingUser);
    }
    const newUser = new User({
      method:'facebook',
      facebook:{
        id: profile.id,
        email: profile.emails[0].value
      }
    });
    await newUser.save();
    done(null,newUser);



  }catch(error){
    done(error, false, error.message);
    console.log('there is an error ');
;  }
}));



module.exports = passport;