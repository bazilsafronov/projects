`use strict`;

// const nbYear = (startPopulation, procent, newPopulation, finishPopulation) => {
//   let normalizerProcent = procent / 100;
//   let countYear = 0;
//   for (
//     let currentPopulation = startPopulation;
//     currentPopulation < finishPopulation;
//     currentPopulation += currentPopulation * normalizerProcent + newPopulation
//   ) {
//     countYear = countYear + 1;
//   }

//   return countYear;
// };

// console.log(nbYear(4000, 10, 10, 10000));






function nbYear (startPopulation, percent, countPeople, resultPopulation) {
  let countYearPopulation = 0;
  let newPercent = percent / 100;
  let currentPopulation = startPopulation;
  while (currentPopulation < resultPopulation) {
    currentPopulation = currentPopulation + newPercent * currentPopulation + countPeople
    console.log(currentPopulation);
    countYearPopulation += 1;
  }

  return countYearPopulation;
}

console.log(nbYear(12000, 5, 500, 25000));











// ЗАДАЧА 4
// В небольшом городе население p0 = 1000 в начале года. Население постоянно растет на 2 процента каждый год и еще 50 новых людей каждый год переезжают в город жить. Сколько лет необходимо городу, чтобы его население стало больше или равно p >= 1200 жителей?
// В конце первого года: 1000 + 1000 * 0.02 + 50 => 1070 жителей.
// В конце второго года: 1070 + 1070 * 0.02 + 50 => 1141 жителей (** число жителей всегда целое **).
// В конце третьего года: 1141 + 1141 * 0.02 + 50 => 1213.
// Итого понадобится 3 года.
// Немного об аргументах:
// p0 -население в начале года, целое число больше 0
// процент, положительное число или с плавающей запятой
// aug - количество жителей, которые покидают или пребывают в город, целое число
// p - население, которое требуется достичь, целое число больше 0
// Функция nbYear должна возвращать количество лет, которое потребуется для достижения населения больше или равно p