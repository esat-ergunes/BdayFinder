const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const passport = require('./passport/passport');
const apiTodoRouter = require('./routes/api/v1/todos');
const apiChatRouter = require("./routes/api/v1/chat");
const apiUserRouter = require("./routes/api/v1/user");

const authController = require("./controllers/auth");
const config = require("config");
/* bodyParser*/
const bodyParser = require('body-parser');
/* connection to mongodb database */
const mongoose = require("mongoose");
const User = require('./models/User');
const { assert } = require('console');
mongoose.set('useCreateIndex',true);
/*mongoose.connect("mongodb://localhost:27017/BdayFinder", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});*/

mongoose.connect(process.env.dbconn || config.get('Database.conn'), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


if(process.env.dbconn === "production"){
  console.log("Production");
}else{
  console.log('Local');
}
//console.log(process.env);
console.log(process.env.NODE_ENV); 

const app = express();


/*----------------facebook login----------------------- */


/*----------------------------------------------------- */


/*---------------facebook-strategy----------------------*/
/*passport.use(
  new facebookStrategy(
    {
      // pull in our app id and secret from our auth.js file
      clientID: "732399404245337",
      clientSecret: "e2e7ac038e368beae3a84a41d2c38118",
      callbackURL: "http://localhost:3000/facebook/callback",
    }, // facebook will send back the token and profile
    function (token, refreshToken, profile, done) {
      console.log(profile);
      return done(null, profile);
    }
  )
);*/

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

/*------------------------------------------------------*/
app.use(passport.initialize());
app.use(passport.session());


// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'pug');

app.use(logger('dev'));
/*---------bodparser----------*/
app.use(bodyParser.json());
/*--------------------------- */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/api/v1/todos", passport.authenticate('jwt', { session: false }),apiTodoRouter);
app.use("/api/v1/chat", passport.authenticate('jwt', { session: false }),apiChatRouter);
app.use("/api/v1/userData", passport.authenticate('jwt', { session: false }),apiUserRouter);



//app.use('/api/v1/todos',passport.authenticate('jwt', { session: false }), apiTodoRouter);
/*----------------------FacebookLogin-----------------------*/
/*app.get("/auth/facebook", passport.authenticate("facebookToken"),authController.facebookOAuth);
  app.get('/auth/facebook/callback',passport.authenticate('facebookToken', { successRedirect: '/app',failureRedirect: '/login' }));
*/

app.get('/auth/facebook',passport.authenticate("facebook",{scope:['email']},{session:false}),authController.facebookOAuth);
app.get('/auth/facebook/callback',passport.authenticate('facebook', { successRedirect: '/app', failureRedirect: '/login', }));

/*app.get('/app/:id',(req,res,next)=>{
  console.log(req.params);

});*/


app.get("/birthday/:Bday", (req, res, next) => {
  const Bday = req.params.Bday;
  

  console.log(Bday);
  
  //res.render("/public/details");

  /*res.sendfile(__dirname + "/public/details.html");*/
  res.sendfile(__dirname + "/public/index.html");
  
  


});


  
/*---------------------------------------------------------------- */

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
