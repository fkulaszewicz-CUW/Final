let router = require('express').Router();

// set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Test Successful',
        message: 'Root Endpoint is Working - 2020-21_VAI_Track_RecordsDB'
    });
});

var carController = require('./carController');

router.route('/carProfile')
    .get(carController.getFullCarProfile)
    .post(carController.addCar)

router.route('/carProfile/byID/:car_id')
    .get(carController.carProfileByID)
    .put(carController.updateCarProfile)
    .delete(carController.delete)

router.route('/fastestCars')
    .get(carController.getFastestCars)

router.route('/mostHP')
    .get(carController.getMostHP)

router.route('/topSpeed')
    .get(carController.getTopSpeed)

router.route('/carPrice')
    .get(carController.getPrice)

router.route('/lapTime')
    .get(carController.getLapTime)

module.exports = router;