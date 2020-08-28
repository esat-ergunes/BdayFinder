const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const userController = require('../controllers/api/v1/userData');
const passport = require('passport');
const { authenticate } = require('passport');
const base_url = "https://bdayfinder.herokuapp.com";
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post(base_url  + "/signup", authController.signup);
router.post(base_url + "/login", authController.login);




//router.post("/oauth/facebook",passport.authenticate('facebookToken',{session:false}),authController.facebookOAuth);

//router.post('/oauth/facebook').post(passport.authenticate('facebookToken',{session:false}),authController.facebookOAuth);

//router.post("/auth/facebook",passport.authenticate("facebookToken",{session:false}));

/*router.post('/auth/facebook',passport.authenticate("facebookToken",{session:false}),authController.facebookOAuth);
router.post('/auth/facebook/callback',passport.authenticate('facebookToken', { successRedirect: '/app', failureRedirect: '/login' }));*/

  

router.get("/secret",authController.secret);



module.exports = router;
