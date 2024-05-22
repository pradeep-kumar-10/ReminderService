const TicketService = require('../services/email-service');

const createTicket = async(req,res) => {
    try {
        const response = await TicketService.createNotification(req.body);
        return res.status(201).json({
            success: true,
            data: response,
            message: 'Successfully registered an email reminder',
            err: {} 
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: {},
            message: 'unable to register an email reminder',
            err: error
        });
    }
}

module.exports = {
    createTicket
}