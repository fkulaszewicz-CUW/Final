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