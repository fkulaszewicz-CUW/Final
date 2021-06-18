var mongoose = require('mongoose');

// schema
var carSchema = mongoose.Schema({
    carName: {
        type: String,
        required: true
    },
    tireCompanyUsed: {
        type: String,
        required: true
    },
    topSpeedMPH: {
        type: Number,
        required: true
    },
    zeroToSixty: {
        type: Number,
        required: true
    },
    modelYear: {
        type: Number,
        required: true
    },
    lapTimeMinutes: {
        type: Number,
        required: true
    },
    lapTimeSeconds: {
        type: Number,
        required: true
    },
    testedCardPrice: {
        type: Number,
        required: true
    },
    HP: {
        type: Number,
        required: true
    },
    weightLB: {
        type: Number,
        required: true
    },
    LBPerHP: {
        type: Number,
        required: true
    }
});

var Car = module.exports = mongoose.model('carsProfile', carSchema, 'car_model_stats');

module.exports.getFullProfile = function (callback, limit) {
    Car.find(callback).limit(limit);
}

module.exports.getFastestCars = function (callback, limit) {
    Car.find(callback).find().sort({ "zeroToSixty": 1 });
}

module.exports.getMostHP = function (callback, limit) {
    Car.find(callback).find().sort({ "HP": -1 });
}

module.exports.getTopSpeed = function (callback, limit) {
    Car.find(callback).find().sort({ "topSpeedMPH": -1 });
}

module.exports.getPrice = function (callback, limit) {
    Car.find(callback).find().sort({ "testedCardPrice": -1 });
}

module.exports.getLapTime = function (callback, limit) {
    Car.find(callback).find().sort({"lapTimeMinutes":1, "lapTimeSeconds":1});
}