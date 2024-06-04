const mongoose = require('mongoose');
const en = require('dotenv')
en.config()


mongoose.connect(process.env.URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Failed to connect to MongoDB", err));


const movieSchema = mongoose.Schema({
    Name : {type : String ,required : true},
    Image : {type : String ,required : true},
    Summary :{type : String ,required : true}
})





const movieDetail =mongoose.model('movieDetail',movieSchema);


module.exports = {
    movieDetail
}