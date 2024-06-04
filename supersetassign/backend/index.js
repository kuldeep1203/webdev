const express = require('express');
const cors = require('cors');
const app = express();
const en = require('dotenv')

en.config()
app.use(express.json());
app.use(cors());
const rootRouter = require("C:\\Users\\kulu1\\WEBDEV\\supersetassign\\backend\\routes\\index.js");
const port =3000;
app.use("/api/assign", rootRouter);



app.listen(port,()=>{
    console.log('listening on port')
});