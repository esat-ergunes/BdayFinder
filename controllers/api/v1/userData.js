const User = require('../../../models/User');
const { param } = require('../../../routes');




const getAll = (req, res) => {
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
        "user": req.user.username,
        "Bday": req.user.Bday
        
    }
  });
}

});

  
}












module.exports.getAll = getAll;


