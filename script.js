const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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


if  (personalMovieDB.count < 10) {
console.log("Просмотрено довольно мало фильмов");

} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
console.log("Вы классический зритель");
} else if (personalMovieDB.count >=30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}


console.log(personalMovieDB);
