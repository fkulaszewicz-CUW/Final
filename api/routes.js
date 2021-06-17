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

module.exports = router;