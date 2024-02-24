const express  = require('express');
const zod = require('zod');
const cors = require('cors');
const app = express();
const port   = 3000;
const {personalcard} = require('C:\\Users\\kulu1\\webdev\\personalcard\\backend\\db.js')
const { create_card } = require('C:\\Users\\kulu1\\webdev\\personalcard\\backend\\middleware.js')


app.use(express.json())

app.use(cors({
    origin : "http://localhost:5173"
    
}))
app.listen(port,()=>{
    console.log(`listening on port${port}`)
});

app.post("/prcard",create_card,async function(req, res, next){
    const name = req.body.Name;
    const description = req.body.description;
    const Linkedin = req.body.Linkedin;
    const interests = req.body.interests;
    const Twitter = req.body.Twitter;
    const Email = req.body.Email;

    const pos = await personalcard.create({
        name,
        description,
        interests,
        Linkedin,
        Twitter,
        Email
    })
    if(pos){
        res.json({
            msg:"to do created"
        })
    }
    else {
                res.status(411).json({
                    message: "failed to create"
                })
    }
    
   
})

