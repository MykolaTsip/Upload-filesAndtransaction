const db = require('../database').getInstance()

module.exports = {
    createToken: (tokenObj) => {
        const oauth = db.getModels('Oauth')

        return oauth.create(tokenObj, {new: true})
    },

    getByParams: (params, userAttr) => {
        try {
            const oauth = db.getModels('Oauth')
            const user = db.getModels('User')

            return oauth.findOne({
                where: params,
                raw: true,
                nest: true,
                include: [{
                    model: user,
                    attributes: userAttr
                }]
            })

        } catch (e) {
            console.log(e)
        }
    },

    deleteByParams: (params) => {
        try {
            const oauth = db.getModels('Oauth')

            return oauth.destroy({
                where: params
            })
        } catch (e) {
            console.log(e)
        }

    }
}
