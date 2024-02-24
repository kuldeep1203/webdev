const {push_pr} = require('C:\\Users\\kulu1\\webdev\\personalcard\\backend\\types.js')

function create_card(req,res,next){
    const payload = req.body;
    console.log(payload)
    try{
        push_pr.parse(payload);
        next();
    }
    catch(err){
        console.log(err);
        res.status(411).json({ message: "invalid input" });
    }

}

module.exports = {
    create_card: create_card
};
