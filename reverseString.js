const reverString = (string) => {
    let res = '';
    for (i = 0; i < string.length; i = i + 1) {
        res = `${string[i]}${res}`
    }

    return res;
}

console.log(reverString('Vasya'));



// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i = i + 1;
// }

// do {
//     console.log('action');
// } while (i > 0)


for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

for (let i = 0; i < 5; i++) {
    if (i === 2) {
        break;
    }
    console.log(i);
}