const searchController = (req, res) => {
  try {
    const results = req.films.filter(film => {
      // TODO: пока что возвращаем все фильмы
      return true;
    });
    res.json({ results });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Что-то пошло не так" });
  }
};

module.exports = searchController;
