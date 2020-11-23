const students = ['Олександр', 'Ігор', 'Олена', 'Іра', 'Олексій', 'Світлана'];
const themes = ['Диференційне рівняння', 'Теорія автоматів', 'Алгоритм та структури даних'];
const marks = [4, 5, 5, 3, 4, 5];
const male = ['Олександр', 'Ігор', 'Олексій'];
const female = ['Олена', 'Іра', 'Світлана'];


// 1
const pairs = getPairs(students);
function getPairs() {
   const pairsRes = [];
   for (let i = 0; i < students.length / 2; i++){
      pairsRes[i] = [male[i], female[i]]
   }
   return pairsRes;
}
console.log(pairs);

// 2
const compareStudentsWithThemes = getCompare(pairs, themes);
function getCompare() {
   const compareResult = [];
   for (let i = 0; i < themes.length; i++){
      compareResult[i] = pairs[i].concat(themes[i]);
   }
   return compareResult
}
console.log(compareStudentsWithThemes);

// 3
const ratedStudent = getRated(students, marks);
function getRated() {
   const ratedResult = [];
   for (let i = 0; i < students.length; i++) {
      ratedResult[i] = [students[i], marks[i]];
   }
   return ratedResult;
}
console.log(ratedStudent);

// 4
const randomMark = function (min = 1, max = 5) {
   randomResult = +(Math.floor(Math.random() * (max - min + 1)) + min);
   return randomResult;
}

const randomMarkForThemes = getrandomMarkForThemes(compareStudentsWithThemes, randomMark);
function getrandomMarkForThemes() {
   const randomMarkForThemesResult = [];
   for (let i = 0; i < compareStudentsWithThemes.length; i++) {
      randomMarkForThemesResult[i] = compareStudentsWithThemes[i].concat(randomMark());
   }
   return randomMarkForThemesResult;
}
console.log(randomMarkForThemes);
