const express = require("express");
const data = require("../data/location.json")
const Router = express.Router();

Router.get('/locations/getAll', (req, res) => {
  res.json(data);
});

Router.get('/locations/:id', (req, res) => {
  const propertyId = req.params.id;
  const property = data.properties.find(p => p.id === propertyId);
  if (!property) {
    res.status(404).send('not found');
  }
  res.json(property);
});

module.exports = Router;





