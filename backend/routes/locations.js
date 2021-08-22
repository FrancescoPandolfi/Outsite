const express = require("express");
const data = require("../data/location.json")
const Router = express.Router();
const locationsController = require("../controllers/locations")

Router.get('/locations/getAll', locationsController.getAllLocations);

Router.get('/locations/:id', locationsController.getLocation);

module.exports = Router;





