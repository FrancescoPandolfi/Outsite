const data = require("../data/location.json");


exports.getAllLocations = (req, res) => {
  res.status(200).json(data);
};

exports.getLocation = (req, res) => {
  const propertyId = req.params.id;
  const property = data.properties.find(p => p.id === propertyId);
  if (!property) {
    res.status(404).send('No location found');
  }
  res.status(200).json(property);
};


