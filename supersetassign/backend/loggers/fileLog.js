


const winston = require('winston');

const fileLog = () => {
    return winston.createLogger({
        level: 'debug',
        format: winston.format.json(),
        transports: [
            new winston.transports.File({ filename: 'error.log', level: 'error' }),
            new winston.transports.File({ filename: 'debug.log',level:'debug'}),
            new winston.transports.File({ filename: 'combined.log' }),
        ],
    });
};

module.exports = fileLog;
