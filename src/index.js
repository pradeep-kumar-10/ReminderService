const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const {PORT} = require('./config/serverConfig');
// const { sendBasicEmail } = require('./services/email-service');
const TicketController = require('./controllers/ticket-controllers');
const jobs = require('./utils/cron-job');

const setupAndStartServer = async() => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.post('/api/v1/tickets', TicketController.createTicket);

    app.listen(PORT, async() => {
        console.log(`Server started at ${PORT}`);
    });

    jobs();
    // sendBasicEmail(
    //     'support@admin.com',
    //     'reminderservice10@gmail.com',
    //     'THis is a testing mail',
    //     'Hey how are you, I hope you are doing well'
    // );

}

setupAndStartServer();