const express = require('express');
const router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  /*res.render('index', { title: 'Express' });*/
  res.render('details');
});

//FOR FACEBOOK:


module.exports = router;
