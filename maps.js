// Реализуйте функцию, которая принимает массив целых чисел и возвращает массив с удвоением каждого значения.

const maps = (array) => {
    let res = array.map((el) => {
        return el * 2;
    }) 

    return res;
};
console.log(res === array);
console.log(maps([0, 1, 2, 3, 4, 5, 6]));