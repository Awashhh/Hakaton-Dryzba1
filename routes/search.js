// routes/searchRoutes.js

const searchRoute = require("express").Router();
const searchController = require("../controllers/searchController");
const { getAllFilms } = require('../middlewares/filmls');


searchRoute.post("/search", getAllFilms, searchController);

module.exports = searchRoute;
