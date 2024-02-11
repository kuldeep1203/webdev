const { Router } = require('express')
const userMiddleware = require("../middleware/admin.js");
const { User }=require('../db')//model names we need
const router =Router();



//Admin sign up
router.post('/signup',async(req,res) => {
    const username = req.body.username
    const password = req.body.password

    await User.create({
        username: username,
        password: password
    })
    res.json({
        message: 'User created successfully'
    })
})

// router.post('/signin',async(req, res) => {
//     const username = req.body.username
//     const password = req.body.password
// })
router.get("/courses",async (req,res)=>{
    const response = await Course.find({});
    res.json({
        courses:response
    })
})


router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    

});

module.exports = router;