// Hапишите функцию generateIntegers, которая принимает один аргумент число n и генерирует массив, который содержит целые числа от 0 до n включительно.
// Например, generateIntegers(3) должен вернуть [0, 1, 2, 3].
// N может быть любым целым числом больше и равным 0.


const generateIntegers = number => {
    let res = [];
    for (i = 0; i <= number; i++) {
        res.push(i);
    }

    return res;
}

console.log(generateIntegers(3));




// new Array(n).fill(0).map((,id) => id)