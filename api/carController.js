Car = require('./documentSchema');
CarUpdate = require('./documentSchemaUpdate')

exports.getFullCarProfile = function (req, res) {
    Car.getFullProfile(function (err, car) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "Got Car Profiles Successfully!",
            data: car
        });
    });
};

exports.addCar = function (req, res) {
    var car = new Car();
    car.carName = req.body.carName;
    car.tireCompanyUsed = req.body.tireCompanyUsed;
    car.topSpeedMPH = req.body.topSpeedMPH;
    car.zeroToSixty = req.body.zeroToSixty;
    car.modelYear = req.body.modelYear;
    car.lapTimeMinutes = req.body.lapTimeMinutes;
    car.lapTimeSeconds = req.body.lapTimeSeconds;
    car.testedCardPrice = req.body.testedCardPrice;
    car.HP = req.body.HP;
    car.weightLB = req.body.weightLB;
    car.LBPerHP = req.body.LBPerHP;

    car.save(function (err) {
        if (err)
            res.json(err);

        res.json({
            message: "New Car Profile Added!",
            data: car
        });
    });
};

exports.carProfileByID = function (req, res) {
    Car.findById(req.params.car_id, function (err, car) {
        if (err)
            res.send(err);
        res.json({
            message: 'Car Profile',
            data: car
        });
    });
};

exports.updateCarProfile = function (req, res) {
    CarUpdate.findById(req.params.car_id, function (err, car) {
        if (err)
            res.send(err);
        car.carName = req.body.carName ? req.body.carName : car.carName;
        car.tireCompanyUsed = req.body.tireCompanyUsed ? req.body.tireCompanyUsed : car.tireCompanyUsed;
        car.topSpeedMPH = req.body.topSpeedMPH ? req.body.topSpeedMPH : car.topSpeedMPH;
        car.zeroToSixty = req.body.zeroToSixty ? req.body.zeroToSixty : car.zeroToSixty;
        car.modelYear = req.body.modelYear ? req.body.modelYear : car.modelYear;
        car.lapTimeMinutes = req.body.lapTimeMinutes ? req.body.lapTimeMinutes : car.lapTimeMinutes;
        car.lapTimeSeconds = req.body.lapTimeSeconds ? req.body.lapTimeSeconds : car.lapTimeSeconds;
        car.testedCardPrice = req.body.testedCardPrice ? req.body.testedCardPrice : car.testedCardPrice;
        car.HP = req.body.HP ? req.body.HP : car.HP;
        car.weightLB = req.body.weightLB ? req.body.weightLB : car.weightLB;
        car.LBPerHP = req.body.LBPerHP ? req.body.LBPerHP : car.LBPerHP;

        car.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "Car Profile Updated Successfully",
                data: car
            });
        });
    });
};

exports.delete = function (req, res) {
    Car.deleteOne({
        _id: req.params.car_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Car Profile Deleted!'
        });
    });
};