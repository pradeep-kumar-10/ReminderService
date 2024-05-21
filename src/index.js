const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const {PORT} = require('./config/serverConfig');
// const { sendBasicEmail } = require('./services/email-service');
const cron = require('node-cron')

const setupAndStartServer = async() => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, async() => {
        console.log(`Server started at ${PORT}`);
    });

    // sendBasicEmail(
    //     'support@admin.com',
    //     'reminderservice10@gmail.com',
    //     'THis is a testing mail',
    //     'Hey how are you, I hope you are doing well'
    // );

    // cron.schedule('*/1 * * * *', () => {
    //     console.log('run a task in every minute')
    // })
}

setupAndStartServer();