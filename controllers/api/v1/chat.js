

const Chat = require("../../../models/Chat");
const User = require("../../../models/User");



const getAll = (req, res) => {
  res.send("getAll");
 
}

const create = (req, res) => {
  res.json({
    "status":"success",
    "data":{
      "message":"Heloooooo :)"
    }
  })
 
}

module.exports.getAll = getAll;
module.exports.create = create;