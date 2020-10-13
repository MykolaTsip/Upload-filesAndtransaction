const db = require('../database').getInstance()

module.exports = {
    allCars: () => {
        try {
        const cars = db.getModels('Car')

        return cars.findAll({})
        }
        catch (e) {
            console.log(e)
        }
    }
}
