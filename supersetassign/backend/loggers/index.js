let logger;
const fileLog = require('./fileLog');  // Adjust the path as necessary

if (process.env.NODE_ENV !== 'production') {
    // console.log("ss")
    logger = fileLog();
}
else {
    console.log("ss")
} 

module.exports = logger;
