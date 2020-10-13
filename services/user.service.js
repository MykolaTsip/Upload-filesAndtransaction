const db = require('../database').getInstance()

module.exports = {
    allUser: async () => {
        try {
            const users = db.getModels('User')

            return users.findAll({})

        } catch (e) {
            console.log(e)
        }
    },

    createUser: async (userObj, transaction) => {
        try {
            const user = db.getModels('User')

            return user.create(userObj, {
                new: true,
                transaction
            })
        } catch (e) {
            console.log(e)
        }
    },

    deleteUser: async (userobj, transaction) => {
        try {
            const user = db.getModels('User')

            return user.destroy({
                where:  userobj,
                transaction
            })
        }
        catch (e) {
            console.log(e)
        }
    },

    findByEmail: async (userEmail) => {
        try {
            const user = db.getModels('User')

            return user.findOne({
                where: userEmail
            })
        } catch (e) {
            console.log(e)
        }
    },

    updateById: async (id, updateObj, transaction) => {
        const user = db.getModels('User')

        return user.update(
            updateObj,
            {
                where: id,
                returning: true,
                plain: true,
                transaction
            })
    }
}
