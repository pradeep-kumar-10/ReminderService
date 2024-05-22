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

module.exports = {
    sendBasicEmail,
    fetchPendingEmail,
    updateTicket,
    createNotification
}