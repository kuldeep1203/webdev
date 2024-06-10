const {movieDetail} =  require('./config/db');
const {movieSchema} = require('./types')


function validateMovie(req, res, next) {
    const payload = req.body;
    // console.log(payload)

    try {
        // console.log(payload.name)
        // console.log(payload.summary)
        movieSchema.parse(payload);
        next();
    } catch (err) {
        // console.log(err)
        return res.status(400).json({
            message: "Invalid movie data",
            // errors: err.errors 
        });
    }
}
async function movieExists(req, res, next){
    try {
        const { name } = req.body;
        
        
        const existingMovie = await movieDetail.findOne({ Name: name });
        console.log(name)
        
        if (existingMovie) {
           
            return res.status(409).json({ message: "Movie already exists" });
        }
        
        
        next();
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to check movie existence" });
    }
};
module.exports ={
    validate :validateMovie,
    me:movieExists}