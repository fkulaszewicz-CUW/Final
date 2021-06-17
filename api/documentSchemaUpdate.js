var mongoose = require('mongoose');

// schema
var carSchema = mongoose.Schema({
    carName: {
        type: String
    },
    tireCompanyUsed: {
        type: String
    },
    topSpeedMPH: {
        type: Number
    },
    zeroToSixty: {
        type: Number
    },
    modelYear: {
        type: Number
    },
    lapTimeMinutes: {
        type: Number
    },
    lapTimeSeconds: {
        type: Number
    },
    testedCardPrice: {
        type: Number
    },
    HP: {
        type: Number
    },
    weightLB: {
        type: Number
    },
    LBPerHP: {
        type: Number
    }
});

var CarUpdate = module.exports = mongoose.model('carsProfileUpdate', carSchema, 'car_model_stats');

module.exports.getFullProfile = function (callback, limit) { 
    CarUpdate.find(callback).limit(limit);
}