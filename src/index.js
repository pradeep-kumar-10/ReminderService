const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const {PORT} = require('./config/serverConfig');
// const { sendBasicEmail } = require('./services/email-service');
const TicketController = require('./controllers/ticket-controllers');
const EmailService = require('./services/email-service');

const jobs = require('./utils/cron-job');
const {createChannel, subscribeMessage} = require('./utils/messageQueue');
const {REMINDER_BINDING_KEY} = require('./config/serverConfig');

const setupAndStartServer = async() => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.post('/api/v1/tickets', TicketController.createTicket);

    const channel = await createChannel();
    subscribeMessage(channel, EmailService.subscribeEvents, REMINDER_BINDING_KEY);

    app.listen(PORT, async() => {
        console.log(`Server started at ${PORT}`);
    });

    // jobs();
}

setupAndStartServer();