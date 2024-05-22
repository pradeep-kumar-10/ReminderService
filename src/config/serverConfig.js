const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    EMAIL_ID: process.env.EMAIL_ID,
    EMAIL_PASS: process.env.EMAIL_PASS,
    PORT: process.env.PORT,
    EXCHANGE_NAME: process.env.EXCHANGE_NAME,
    MESSAGE_BROKER_URL: process.env.MESSAGE_BROKER_URL,
    REMINDER_BINDING_KEY: process.env.REMINDER_BINDING_KEY
}