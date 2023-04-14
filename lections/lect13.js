const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


const a = prompt('Один из последних просмотренных фильмов?', ''),
 a1 = prompt('На сколько оцените его?',  ''),
 b =  prompt('Один из последних просмотренных фильмов?', ''),
 b1 = prompt('На сколько оцените его?',  '');

 personalMovieDB.movies[a] = a1;
 personalMovieDB.movies[b] = b1;
 
console.log(personalMovieDB);

