const {emailAction} = require('../configs')

module.exports = {
    [emailAction.WELCOME]: {
        subject: '[WELCOME] CAR SHOP',
        templateFileName: 'welcome'
    },

    [emailAction.FORGOT_PASS]: {
        subject: '[FORGOT PASSWORD]',
        templateFileName: 'forgot-pass'
    }
}
