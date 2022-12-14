const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.getListOfFilmTitles = function () {
  const listOfFilmTitles = this.films.map((film) => {
    return film.title;
  })
  return listOfFilmTitles;

};

Cinema.prototype.findByTitle = function (filmTitle) {
  const oneFilmTitle = this.films.find((film) => {
    return film.title === filmTitle;
  });
  return oneFilmTitle;
};

Cinema.prototype.findFilmByGenre = function (filmDrama) {
  const dramaFilms = this.films.filter((film) => {
    return filmDrama === film.genre;
  });
  return dramaFilms;
}
Cinema.prototype.checkFilmByYear = function (year) {
  return this.films.some((film) => {
    return film.year === year;
  });
};
Cinema.prototype.areAllFilmsOfMinLength = function (length) {
  return this.films.every((film) => {
    return film.length >= length;
  });
};
Cinema.prototype.totalRunningTime = function () {
  return this.films.reduce((total, film) => {
    return total += film.length;
  }, 0);
};

module.exports = Cinema;

