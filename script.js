"use script"

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
if (numberOfFilms<10){
    console.log('просмотрено довольно мало фильмов')
}else if(10 <= numberOfFilms >= 30){
    console.log('Вы классический зритель')
}else if(numberOfFilms>30){
    console.log('Вы киноман')
}else{
    console.log('Произошла ошибка')
}

const personalMovieDB = {
    conunt: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// while(true){
    
//     const filmName = prompt('Один из последних просмотренных фильмов?', '');
//     if(filmName === ''){
//         console.log('Строка не может быть пустой!');
//         continue;
//     }else if(filmName.length==='50'){
//         console.log('Количество символов не должно превышать 50.');
//         continue;
//     }
//     const filmeGrade = +prompt('На сколько оцените его?', '');
//     if(filmeGrade === ''){
//         console.log('Строка не может быть пустой!');
//         continue;
//     }else if(filmeGrade.length==='50'){
//         console.log('Количество символов не должно превышать 50.');
//         continue;
//     }
//     personalMovieDB.movies[filmName]=filmeGrade;
// }

for (let i = 0; i < 2; i++){
    const filmName = prompt('Один из последних просмотренных фильмов?', ''),
        filmeGrade = +prompt('На сколько оцените его?', '');

    if(filmName!=null && filmeGrade != null && filmName != '' &&        filmeGrade != '' && filmName.lenght < 50){
        console.log('done');
    }else{
        console.log('error');
        i--;

    }

    personalMovieDB.movies[filmName]=filmeGrade;
}



console.log(personalMovieDB.movies);