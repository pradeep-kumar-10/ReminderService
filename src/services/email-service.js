const sender = require('../config/emailConfig');
const TicketRepository = require('../repository/ticket-repository');

const ticketRepository = new TicketRepository();

const sendBasicEmail = async (mailFrom, mailTO, mailSubject, mailBody) => {
    try{
        const response = await sender.sendMail({
            from: mailFrom,
            to: mailTO,
            subject: mailSubject,
            text: mailBody
        });
        console.log(response);
    } catch(error){
        console.log(error);
    }
}

const fetchPendingEmail = async(timeStamp) => {
    try{
        const response = await ticketRepository.getTicket({status:"PENDING"});
        return response;
    } catch(error){
        console.log(error);
    }
}

const updateTicket = async(ticketId, data) => {
    try{
        const response = await ticketRepository.updateTicket(ticketId,data);
        return response;
    } catch(error){
        console.log(error);
    }
}

const createNotification = async(data) => {
    try{
        const response = await ticketRepository.createTicket(data);
        return response;
    } catch(error){
        console.log(error);
    }
}

const subscribeEvents = async(payload) => {
    let service = payload.service;
    let data = payload.data;
    switch(service) {
        case 'CREATE_TICKET':
            await createNotification(data);
            break;
        case 'SEND_BASIC_MAIL':
            await sendBasicEmail(data);
            break;
        default: 
            console.log('No valid event received');
            break;
    }
}

module.exports = {
    sendBasicEmail,
    fetchPendingEmail,
    updateTicket,
    createNotification,
    subscribeEvents
}