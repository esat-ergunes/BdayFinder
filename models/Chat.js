const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatchema = new Schema({
  text: { type: String, required: true }, // String is shorthand for {type: String}
  user: String,
});

const Chat = mongoose.model("Chat", chatchema);

module.exports = Chat;
