'use sctrict'

function valueRepeater (number, valueOne, valueTwo) {
    let arr = [];
    for (let i = 0; i < number; i++) {
        if (i % 2 === 0) {
            arr.push(valueOne);
        } else {
            arr.push(valueTwo);
        }
        console.log(arr);
    }

    return arr;
}

console.log(valueRepeater(3, 'aaa', 'bbb'));