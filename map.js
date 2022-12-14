const myNumbers = [16, 25, 34, 56, 92, 99];

const multipliedByTwo = function(arrayOfNums) {
    const multipliedNums = arrayOfNums.map((number) => {
        return number * 2;
    });
    return multipliedNums;
}

console.log('Multiplied nums: ', multipliedByTwo(myNumbers));