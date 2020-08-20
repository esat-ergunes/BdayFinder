const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const passport = require('passport');
const { authenticate } = require('passport');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup',authController.signup);
router.post("/login", authController.login);



//router.post("/oauth/facebook",passport.authenticate('facebookToken',{session:false}),authController.facebookOAuth);

//router.post('/oauth/facebook').post(passport.authenticate('facebookToken',{session:false}),authController.facebookOAuth);

//router.post("/auth/facebook",passport.authenticate("facebookToken",{session:false}));

/*router.post('/auth/facebook',passport.authenticate("facebookToken",{session:false}),authController.facebookOAuth);
router.post('/auth/facebook/callback',passport.authenticate('facebookToken', { successRedirect: '/app', failureRedirect: '/login' }));*/

  

router.get("/secret",authController.secret);



module.exports = router;
