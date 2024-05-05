const { readData, writeData } = require('../data/data')

const getAllFilms = async (req, res, next) => {
  const films = await readData('./data/films.json');
  req.films = films;
  next()
};

module.exports = { getAllFilms }