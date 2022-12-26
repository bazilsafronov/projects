// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// Напишите функцию accum, которая преобразует строку, как в примерах
// function accum (string) {
//     let res = '';
//     for (let i = 0; i < string.length; i++) {
//         res = `${res}-${string[i].toUpperCase()}${string[i].repeat(i).toLowerCase()}`
//         // console.log(i, string[i], string[i].repeat(i));
//     }

//     return res.slice(1);
// }


// console.log(accum('RqaEztydkjsfbdskjfdhsjfdsfhdkjsfdkjfkjsdkfhdkjsfdkjsf'));



const accum = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result = `${result}-${str[i].toUpperCase()}${str[i].repeat(i).toLowerCase()}`
    }

    return result.slice(1);
}

console.log(accum('VasyA'));


push 
unshift
shift
pop 