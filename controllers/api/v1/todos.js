const Todo = require('../../../models/Todo');

const getAll = (req, res) => {
/* get all users with the same birthday*/
Todo.find({
  "user":"Joris"
},(err,docs)=>{
if (!err) {
  res.json({
    "status": "success",
    "data": {
      "todo": docs
    }
  });
}

});

  
}

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
module.exports.getAll=getAll;

module.exports.create=create;