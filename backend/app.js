const express = require('express');
const path = require("path");
const locationsRoutes = require('./routes/locations')
const cors = require("cors");
const app = express();

app.listen(process.env.PORT || 8888);

app.use(express.urlencoded({extended: true}));

app.use(cors());

app.use('/api', locationsRoutes);

app.use((req, res, next) => {
  res.status(404).send('Not found');
});






