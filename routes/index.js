const express = require('express');
const router = express.Router();
const passport = require('passport');

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
 
});*/

router.get("/", function (req, res, next) {
  res.render('/public/details');
});

//FOR FACEBOOK:


module.exports = router;
