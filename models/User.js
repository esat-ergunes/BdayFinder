const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");
const { schema } = require("./Todo");
const { NotExtended } = require("http-errors");

const User = new Schema({

    method:{
        type:String,
        enum:['local','facebook'],
        required: true
    },
    email:{
        type:String,
            lowercase:true
    },Bday:{
        type:String
    },username:{
        type:String
    },facebook:{
        id:{
            type:String
        },
        email:{
            type:String,
            lowercase:true
        }
    }

});

if(!User.plugin(passportLocalMongoose)){
next();
}else{
    User.plugin(passportLocalMongoose);
}

//User.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", User);


