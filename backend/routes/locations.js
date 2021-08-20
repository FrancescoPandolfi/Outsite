const express = require("express");
const data = require("../data/location.json")

const Router = express.Router();


Router.get('/locations', (req, res, next) => {
        console.log(req.body)
            res.json(data);
        });

module.exports = Router;





