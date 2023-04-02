"use script"


const personalMovieDB = {
    conunt: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

while(true){
    const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    if (numberOfFilms<100){
        console.log('просмотрено довольно мало фильмов')
    }else if(10 <= numberOfFilms >= 30){
        console.log('Вы классический зритель')
    }else if(numberOfFilms>30){
        console.log('Вы киноман')
    }else{
        console.log('Произошла ошибка')
    }
    const filmName = prompt('Один из последних просмотренных фильмов?', '');
    if(filName === ''){
        console.log('Строка не может быть пустой!');
        continue;
    }else if(filmName.length===50){
        console.log('Количество символов не должно превышать 50.');
        continue;
    }
    const filmeGrade = +prompt('На сколько оцените его?', '');
    if(filmeGrade === ''){
        console.log('Строка не может быть пустой!');
        continue;
    }else if(filmeGrade.length===50){
        console.log('Количество символов не должно превышать 50.');
        continue;
    }
    personalMovieDB.movies[filmName]=filmeGrade;
}



console.log(personalMovieDB.movies);