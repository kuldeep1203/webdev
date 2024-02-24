const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://kuldeep:simon@cluster0.ygqebfp.mongodb.net/personalcard").then(() => console.log('Connected!'));

const personalcardSchema = mongoose.Schema({
   Name : String,
   description : String,
   Linkedin : String,
   Twittter  : String,
   Email : String
});

const personalcard = mongoose.model('personalcard', personalcardSchema);

module.exports = {
    personalcard: personalcard
};

