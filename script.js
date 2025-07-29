let numberOfFilms

function start() {
 numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
 while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
 }  
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function remeberMyFilms () {
for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}
}
remeberMyFilms ();
// let count = 0;

// while (count < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?', '');
//     const b = prompt('На сколько оцените его?', '');

//     if (
//         a !== null && b !== null &&
//         a.trim() !== '' && b.trim() !== '' &&
//         a.length < 50
//     ) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//         count++;
//     } else {
//         console.log('error');
//     }
// }

// function askMovie(count = 0) {
//     if (count >= 2) return;

//     const a = prompt('Один из последних просмотренных фильмов?', '');
//     const b = prompt('На сколько оцените его?', '');

//     if (
//         a !== null && b !== null &&
//         a.trim() !== '' && b.trim() !== '' &&
//         a.length < 50
//     ) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//         askMovie(count + 1);
//     } else {
//         console.log('error');
//         askMovie(count);
//     }
// }

// askMovie();



function detectPersonalLevel () {
 if  (personalMovieDB.count < 10) {
console.log("Просмотрено довольно мало фильмов");

} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
console.log("Вы классический зритель");
} else if (personalMovieDB.count >=30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}   
}
detectPersonalLevel ();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres () {
for (let i = 1; i < 4; i++) {
    const genre = prompt(`Ваш любимый жанр под номером ${i}`)
    personalMovieDB.genres[i-1] = genre;
}
}
writeYourGenres();


