

const Chat = require("../../../models/Chat");
const User = require("../../../models/User");



const getAll = (req, res) => {
/* get all users with the same birthday*/
Chat.find({
  "Bday":req.user.Bday
},(err,docs)=>{
if (!err) {
  res.json({
    "status": "success",
    "data": {
      "message": docs
    }
  });
}

});

  
}

const create = (req, res) => {
  console.log(req.user);
  let message = new Chat();
  message.text = req.body.text;
  message.user = req.user.username;
   message.Bday = req.user.Bday;
  message.save((err, doc) => {

    if(err){
      res.json({
        "status":"error",
        "message":"Could not save this message"
      })
    }

    if (!err) {
      res.json({
        "status": "success",
        "data": {
          "message": doc
        },
      });
    }
  });
  
 
}

module.exports.getAll = getAll;
module.exports.create = create;