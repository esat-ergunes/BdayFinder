const Chat = require("../../../models/Chat");
const User = require("../../../models/User");

/*
const create = (req, res) => {
  console.log(req.body);
  let chat = new Chat();
  chat.message = req.body.message;
  chat.user = req.user.username;
  console.log(chat.user = req.user.token);
  chat.save((err, doc) => {

    if(err){
      res.json({
        "status":"error",
        "message":"Could not save this to do item"
      })
    }

    if (!err) {
      res.json({
        "status": "success",
        "data": {
          "message": docs
        },
      });
    }
  });
  
 
};
*/
const create = (req, res) => {
/* get all users with the same birthday*/
//console.log(req.user.username);
User.find({
  "Bday":req.user.Bday
},(err,docs)=>{
    
if (!err) {
  res.json({
    "status": "success",
    "data": {
      "users": docs
    },"data2":{
        "id":req.user.id,
        "user": req.user.username
        
    }
  });
}

});

  
}

module.exports.create=create;