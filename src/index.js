const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const {PORT} = require('./config/serverConfig');
const { sendBasicEmail } = require('./services/email-service');

const setupAndStartServer = async() => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, async() => {
        console.log(`Server started at ${PORT}`);
    });

    sendBasicEmail(
        'support@admin.com',
        'reminderservice10@gmail.com',
        'THis is a testing mail',
        'Hey how are you, I hope you are doing well'
    );
}

setupAndStartServer();