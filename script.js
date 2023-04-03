"use script"

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// if (numberOfFilms<10){
//     console.log('просмотрено довольно мало фильмов')
// }else if(10 <= numberOfFilms >= 30){
//     console.log('Вы классический зритель')
// }else if(numberOfFilms>30){
//     console.log('Вы киноман')
// }else{
//     console.log('Произошла ошибка')
// }

const personalMovieDB = {
    conunt: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



for (let i=0; i < 2; i++){
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
    
    if(a != null && b != null && a != '' && b != '' && a.lenght < 50){
        personalMovieDB.movies[a]=b;
        console.log('done');
    }else {
        console.log('error');
        i--;
    }
}

console.log(personalMovieDB.movies);