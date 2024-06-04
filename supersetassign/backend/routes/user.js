const express = require('express');
const {movieDetail} =  require('C:\\Users\\kulu1\\webdev\\supersetassign\\backend\\config\\db.js');
const {validate,me} = require('C:\\Users\\kulu1\\WEBDEV\\supersetassign\\backend\\middleware.js')
const router = express.Router();



router.post('/movies',validate,me,async function (req, res){

    const name = req.body.name
    const img = req.body.img
    const summary = req.body.summary
    try{
        const a = await movieDetail.create({
            Name:name,
            Image:img,
            Summary:summary
        })
        if(a){
            res.status(200).json({
                msg:"Data Added"
    
            })
        }
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Failed to create data" });
    }
   
})

router.get('/allmovies', async (req, res) => {
    try {
      
        const movies = await movieDetail.find();

     
        res.status(200).json(movies);
    } catch (err) {
        
        // console.error(err);
        res.status(500).json({ message: 'Failed to fetch movies' });
    }
});

router.delete('/moviesDelete', async (req, res) => {
    const movieName = req.body.name;
    try {
       
        const deletedMovie = await movieDetail.findOneAndDelete({ Name: movieName });

        if (deletedMovie) {
            res.status(200).json({ message: `Deleted movie: ${movieName}` });
        } else {
            res.status(404).json({ message: `Movie '${movieName}' not found` });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to delete movie' });
    }
});

router.put("/movieUpdate", validate, async (req, res) => {
    try {
        const { name, img, summary } = req.body;

       
        const existingMovie = await movieDetail.findOne({ Name: name });

        if (existingMovie) {
            
            const a = await movieDetail.updateOne({ Name : name }, {Image : img, Summary: summary });
               
                if(a){
                    res.status(200).json({
                        message: "Updated successfully"
                    })
                }
                else{
                    res.status(411).json({msg:"failed to create"})
                }
        } else {
           
            
            res.status(500).json({ message: "No Such Movie Exists" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to update movie details" });
    }
});

module.exports = router;
