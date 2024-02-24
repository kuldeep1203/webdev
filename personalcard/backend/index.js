const express  = require('express');
const zod = require('zod');
const cors = require('cors');
const app = express();
const port   = 3000;
const {personalcard} = require('C:\\Users\\kulu1\\webdev\\personalcard\\backend\\db.js')

app.use(express.json())

app.use(cors({
    origin : "http://localhost:5173"
    
}))
app.listen(port,()=>{
    console.log(`listening on port${port}`)
});

app.post("/prcard",async function(req, res, next){
    const name = req.body.Name;
    const description = req.body.Description;
    const LinkedIn = req.body.LinkedIn;
    const Twittter = req.body.Twittter;
    const email = req.body.Email;

    const pos = await personalcard.create({
        name,
        description,
        LinkedIn,
        Twitter,
        email
    })
    if(a){
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