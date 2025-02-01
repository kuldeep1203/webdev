const mongoose = require("mongoose");

mongoose.connect("").then(() => console.log('Connected!'));

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo: todo
};

