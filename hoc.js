const myNumbers = [1, 2, 3, 4];

// for (const number of myNumbers) {
//     console.log(`Number was: ${number}`);

// }

// myNumbers.forEach((element) => {
//     console.log(`Number was: ${element}`);
// });

// const myNumberFunction = (element) => {
//     console.log(`Number was: ${element}`)
// };

// myNumbers.forEach(myNumberFunction);

// myNumbers.forEach((element, index) => {
//     console.log(`Next Number was: ${element} at index ${index}`);
// });

const multipliedByTwo = function (numbers) {
    const multipliedNums = [];

    numbers.forEach((number) => {
        const multipliedNum = number * 2;
        multipliedNums.push(multipliedNum);
    })

    return multipliedNums;
};

console.log('Numbers before multiplication: ', myNumbers);
console.log('Numbers after multiplication ', multipliedByTwo(myNumbers));