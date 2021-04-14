const express = require('express');
const cors = require('cors');
const storeController = require('../controllers/storeController');
const app = express();
const port = 5001;

// The trip the user searches for
let projectData = {};

// Contains saved trips as objects
let savedTrips = [];

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('dist'));

// throw error if envs are missing
app.listen(port, () => {
    console.log(`iTravel is listening on port ${port}`);
    if (!process.env.GEONAMES_USERNAME) {
        console.error('GEONAMES_USERNAME is required. Add it to your .env');
    }
    if (!process.env.PIXABAY_API_KEY) {
        console.error('PIXABAY_API_KEY is required. Add it to your .env');
    }
    if (!process.env.WEATHERBIT_API_KEY) {
        console.error('WEATHERBIT_API_KEY is required. Add it to your .env');
    }
});

// routes
app.post('/pixabay-images', storeController.pixabayImages);
app.post('/geo-name-locations', storeController.geoNameLocations);
app.get('/', storeController.homePage);
app.post('/weather-bit-forecast', storeController.weatherBitForecast);
app.post('/save-search-result', (req, res) => {
    projectData = req.body;
    res.send(projectData);
});
app.get('/get-search-result', (req, res) => {
    res.json(projectData);
});
app.post('/save-trip', (req, res) => {
    const trip = { ...req.body };
    savedTrips.push(trip);
    res.send(trip);
});
app.get('/get-saved-trips', (req, res) => {
    res.json(savedTrips);
});
app.post('/remove-saved-trip', (req, res) => {
    const tripId = req.body.id;
    savedTrips = savedTrips.filter((savedTrip) => {
        return savedTrip.id != tripId;
    });
    res.json(savedTrips);
});

module.exports = app;
