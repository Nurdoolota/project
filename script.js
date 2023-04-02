"use script"
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    conunt: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const filmName = prompt('Один из последних просмотренных фильмов?'),
      filmeGrade = +prompt('На сколько оцените его?');

personalMovieDB.movies[filmName]=filmeGrade;
console.log(personalMovieDB.movies);