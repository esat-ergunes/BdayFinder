const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todochema = new Schema({
  text: { type: String, required: true }, // String is shorthand for {type: String}
  user: String,
  completed: Boolean,
});

const Todo = mongoose.model("Todo", todochema);

module.exports = Todo;
