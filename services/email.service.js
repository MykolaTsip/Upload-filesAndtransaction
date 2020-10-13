const mailer = require('nodemailer')
const EmailTemplates = require('email-templates')
const path = require('path')

const htmlTemplates = require('../email-templates')
const {constants} = require('../configs')

const emailTemplates = new EmailTemplates({
    message: null,
    views: {
        root: path.join(process.cwd(), 'email-templates')
    }
})

const transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: constants.ROOT_EMAIL,
        pass: constants.ROOT_EMAIL_PASSWORD
    }
})

class EmailService {
    async sendMailer(userEmail, action, context) {
        try {
            const templateInfo = htmlTemplates[action]
            const html = await emailTemplates.render(templateInfo.templateFileName, {
                ...context,
                site: 'https://www.youtube.com/watch?v=l9nh1l8ZIJQ'
            })

            const mailOptions = {
                from: 'no car',
                to: userEmail,
                subject: templateInfo.subject,
                html
            }

            return transporter.sendMail(mailOptions)
        }
        catch (e) {
            console.log(e + '   =======<><><><><><><>>')
        }
    }
}

module.exports = new EmailService()
