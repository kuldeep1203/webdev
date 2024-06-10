const express = require('express');
const cors = require('cors');
const app = express();
const en = require('dotenv')

en.config()
app.use(express.json());
app.use(cors());
const rootRouter = require("./routes/index");
const port =process.env.PORT;
app.use("/api/assign", rootRouter);



app.listen(port,()=>{
    console.log('listening on port')
});