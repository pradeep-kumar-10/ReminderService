const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    EMAIL_ID: process.env.EMAIL_ID,
    EMAIL_PASS: process.env.EMAIL_PASS,
    PORT: process.env.PORT,
}