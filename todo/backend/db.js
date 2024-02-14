const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://kuldeep:simon@cluster0.ygqebfp.mongodb.net/todos").then(() => console.log('Connected!'));

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo: todo
};

