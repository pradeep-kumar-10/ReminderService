const sender = require('../config/emailConfig');

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

module.exports = {
    sendBasicEmail
}