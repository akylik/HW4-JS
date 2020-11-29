const students = ['Олександр', 'Ігор', 'Олена', 'Іра', 'Олексій', 'Світлана'];
const themes = ['Диференційне рівняння', 'Теорія автоматів', 'Алгоритм та структури даних'];
const marks = [4, 5, 5, 3, 4, 5];
const male = ['Олександр', 'Ігор', 'Олексій'];
const female = ['Олена', 'Іра', 'Світлана'];


// 1
const pairs = getPairs(students);
function getPairs(students) {
   return Array.from({ length: students.length / 2 }).map((el, index) => el = [male[index], female[index]]);
}
console.log(pairs);

// const pairs = (students) => Array.from({ length: students.length / 2 }).map((el, index) => el = [male[index], female[index]]);
// console.log(pairs(students));

// const pairs = getPairs(students);
// function getPairs() {
//    const pairsRes = [];
//    for (let i = 0; i < students.length / 2; i++){
//       pairsRes[i] = [male[i], female[i]]
//    }
//    return pairsRes;
// }
// console.log(pairs);

// 2
const compareStudentsWithThemes = getCompare(pairs, themes);
function getCompare() {
   return Array.from({ length: themes.length }).map((el, index) => el = pairs[index].concat(themes[index]));
}
console.log(compareStudentsWithThemes);
// const compareStudentsWithThemes = () => Array.from({ length: themes.length }).map((el, index) => el = pairs[index].concat(themes[index]))
// console.log(compareStudentsWithThemes());

// const compareStudentsWithThemes = getCompare(pairs, themes);
// function getCompare() {
//    const compareResult = [];
//    for (let i = 0; i < themes.length; i++) {
//       compareResult[i] = pairs[i].concat(themes[i]);
//    }
//    return compareResult
// }
// console.log(compareStudentsWithThemes);


// 3
const ratedStudent = () => Array.from({ length: students.length }).map((el, index) => el = [students[index], marks[index]])
console.log(ratedStudent());

// const ratedStudent = getRated(students, marks);
// function getRated() {
//    return Array.from({ length: students.length }).map((el, index) => el = [students[index], marks[index]])
// }
// console.log(ratedStudent);

// const ratedStudent = getRated(students, marks);
// function getRated() {
//    const ratedResult = [];
//    for (let i = 0; i < students.length; i++) {
//       ratedResult[i] = [students[i], marks[i]];
//    }
//    return ratedResult;
// }
// console.log(ratedStudent);



// 4
const randomMark = function (min = 1, max = 5) {
   randomResult = +(Math.floor(Math.random() * (max - min + 1)) + min);
   return randomResult;
}
const randomMarkForThemes = () => Array.from({ length: compareStudentsWithThemes.length }).map((el, index) => el = compareStudentsWithThemes[index].concat(randomMark()))
console.log(randomMarkForThemes());

// const randomMarkForThemes = getrandomMarkForThemes(compareStudentsWithThemes, randomMark);
// function getrandomMarkForThemes() {
//    const randomMarkForThemesResult = [];
//    for (let i = 0; i < compareStudentsWithThemes.length; i++) {
//       randomMarkForThemesResult[i] = compareStudentsWithThemes[i].concat(randomMark());
//    }
//    return randomMarkForThemesResult;
// }

// const randomMarkForThemes = getrandomMarkForThemes(compareStudentsWithThemes, randomMark);
// function getrandomMarkForThemes() {
//    return Array.from({length: compareStudentsWithThemes.length}).map((el, index) => el = compareStudentsWithThemes[index].concat(randomMark()))
// }
// console.log(randomMarkForThemes);
