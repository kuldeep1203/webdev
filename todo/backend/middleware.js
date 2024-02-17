const { push_todo } = require('C:\\Users\\kulu1\\webdev\\todo\\backend\\types.js');
const { mark_todo }  = require('C:\\Users\\kulu1\\webdev\\todo\\backend\\types.js');
const { todo } = require('C:\\Users\\kulu1\\webdev\\todo\\backend\\db.js');
function createware(req, res, next) {
    const payload = req.body;
    payload.completed = false;
    try {
        push_todo.parse(payload);
        next()
    } catch (err) {
        console.log(err);
        res.status(411).json({ message: "invalid input" });
    }
}

async function updateware(req, res, next) {
    const payload = req.body;
    
    
    
    try {
        mark_todo.parse(payload);
        next();
    } catch (err) {
        // console.error(err);
        res.status(500).json({ message: "wrong input" });
    }
}
async function checkava(req, res, next) {
    const payload = req.body;
    try{
        const tod=await todo.findOne({id: payload.id})
        if (!tod) {
            res.status(404).json({message: "todo not found "});
            
        }
        else{
            next();
        }
        
    }
    catch(err){
        console.log(err);
        res.status(404).json({message: "todo not found "});
    }
}
//test
module.exports = {
    createware: createware,
    updateware: updateware,
    checkava:checkava
};
