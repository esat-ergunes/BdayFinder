const Chat = require("../../../models/Chat");
const User = require("../../../models/User");
const Todo = require("../../../models/Todo");

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
  let todo = new Todo();
  todo.text = req.body.text;
  todo.user = req.body.user;
  todo.Bday = req.body.Bday;
  todo.completed = req.body.completed;
  todo.save((err, doc) => {

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
          "todo": docs
        },
      });
    }
  });
  
 
};

module.exports.create=create;