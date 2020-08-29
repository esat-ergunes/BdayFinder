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

const create = (req, res, next) => {
  console.log(req.body);
  let chat = new Chat();
  chat.text = req.body.text;
  todo.user = "Esatergns12345";
  todo.save((err, doc) => {

    if(err){
      res.json({
        "status":"error",
        "message":"Could not save this message item"
      })
    }

    if (!err) {
      res.json({
        "status": "success",
        "data": {
          "todo": docs
        },
      });
    }
  });
  
 
};

module.exports.create=create;