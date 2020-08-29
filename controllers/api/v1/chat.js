

const Chat = require("../../../models/Chat");
const User = require("../../../models/User");



const getAll = (req, res) => {
  res.send("getAll");
 
}

const create = (req, res) => {
  console.log(req.body);
  let message = new Chat();
  message.text = req.body.text;
  message.user = req.user.username;
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
          "message": docs
        },
      });
    }
  });
  
 
}

module.exports.getAll = getAll;
module.exports.create = create;