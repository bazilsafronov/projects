//Реализуйте функцию, которая считает количество делителей положительного целого числа n.
// Случайные тесты доходят до n = 500000.

// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

function dividerCounter (number) {
    let res = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            res += 1;
            console.log(res);
        }
    }

    return res;
}

console.log(dividerCounter(30));