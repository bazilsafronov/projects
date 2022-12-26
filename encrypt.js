
            // encrypt('move'); // 'omev'

            // encrypt('attack'); // 'taatkc'
            
            // // Если число символов нечётное
            
            // // то последний символ остается на своем месте
            
            // encrypt('go!'); // 'og!'
            // Реализуйте функцию encrypt(), которая принимает на вход исходное сообщение и возвращает зашифрованное.
"use strict";

           const encrypt = (string) => {
                let result = '';
                for (let i = 0; i < string.length; i += 2) {
                    let nextElement = string[i + 1] || '';
                    result = `${result}${nextElement}${string[i]}`;                                     
                }

                return result;
           }
            
console.log(encrypt('attavk!'));
// console.log('move!'.length);





// // let str = 'Mustang';
// // let res = '';

// // for (let i = 0; i < str.length; i++) {
// //     res += str[i] + '/';
// // }

// // console.log(res);

// // let colors = ['white', 'black', 'green', 'red'];

// // for (let i = 0; i < colors.length; i++) {
// //     colors[i] = colors[i].toUpperCase();
// // }

// // console.log(colors);

// const users = [
//     {
//         name: 'Bazil',
//         age: 99
//     },
//     {
//         name: 'Peter',
//         age: 9
//     },
//     {
//         name: 'Max',
//         age: 12
//     },
//     {
//         name: 'Oleg',
//         age: 44
//     },
// ];

// // for (let i = 0; i < users.length; i++) {
// //     console.log(typeof(users[i].age));
// // }

// // const user = {
// //     name: 'Lol',
// //     age: 30
// // };

// // for (let key in user) {
// //     console.log(key);
// //     console.log(user[key]);
// // }

// for (let value of users) {
//     console.log(value);
// }