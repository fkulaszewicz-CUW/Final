# Final
```
Using MongoDB create a data set for something of your choosing.

Perhaps pick something related to one of your hobbies etc… where you can get data into json format for storage in a collection based database.
Using Node.js and Express create a reasonable api with at least 5 end points for interacting with your data.  At least 2 of these end points should be for retrieving (GET) data.

Using Angular, create a simple user interface (you will not be graded on how good it looks) to interact with your API.

Notes:
This website uses the following API endpoints.

GET - ./database/carProfile - gets all of the car profiles in the MongoDB
POST - ./database/carProfile - creates a new profile with key-value-pairs

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

GET - ./database/carProfile/byID/:car_id - gets profile with ID selected
PUT - ./database/carProfile/byID/:car_id - updates profile with ID selected (only need to enter desired field(s) to update the profile)
DELETE - ./database/carProfile/byID/:car_id - deletes profile with ID selected

Sorting Queries
GET - ./database/fastestCars - sorts fastest 0-60 in ascending order
GET - ./database/mostHP - sorts Horsepower in descending order
GET - ./database/topSpeed - sorts top speed in descending order
GET - ./database/carPrice - sorts car price in descending order
GET - ./database/lapTime - sorts lap times in ascending order

```
