const { Router, response } = require('express')
const adminMiddleware = require("../middleware/admin.js");
const { Admin,Course }=require('../db')//model names we need
const router =Router();



//Admin sign up
router.post('/signup',async(req,res) => {
    const username = req.body.username
    const password = req.body.password

    await Admin.create({
        username: username,
        password: password
    })
    res.json({
        message: 'Admin created successfully'
    })
})
// router.post('/signin', async(req, res) => {
//     const username = req.body.username
//     const password = req.body.password

//     const ad=await Admin.find({
//         username,
//         password
//     })
//     if(ad){
//         res.json({
//             message: 'Admin signed in'
//         })
//     }
//     else {
//         res.status(411).json({
//             message: "Incorrect email and pass"
//         })
//     }
//     // Implement admin signup logic
// });
router.post('/courses',adminMiddleware,async (req,res) =>{
    const title =req.body.title
    const description =req.body.description
    const imageLink=req.body.imageLink
    const price = req.body.price

    const newCourse= await Course.create({
        title,
        description,
        imageLink,
        price
    })
    res.json({
        message: 'Course created successfully',courseId:newCourse._id
    })
})

router.get("/courses",adminMiddleware,async (req,res)=>{
    const response = await Course.find({});
    res.json({
        courses:response
    })
})

// router.post('/signin',async(req, res) => {
//     const username = req.body.username
//     const password = req.body.password
// })

module.exports = router;