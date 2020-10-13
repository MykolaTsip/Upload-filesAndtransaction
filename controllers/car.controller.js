const {carService} = require('../services')

module.exports = {
    AllCars: async (req, res) => {
try {
    const cars = await carService.allCars()

    res.json(cars)
}
catch (e) {
    console.log(e)
}
    }
}
