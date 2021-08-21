const express = require("express");
const data = require("../data/location.json")
const where = require("lodash.where");

const Router = express.Router();


Router.get('/locations/getAll', (req, res, next) => {
  res.json(data);
});

Router.get('/locations/:id', (req, res, next) => {
  const propertyId = req.params.id;
  const property = data.properties.find(p => p.id === propertyId);
  if (!property) {
    res.status(404).send('not found');
  }
  res.json(property);
});

module.exports = Router;





