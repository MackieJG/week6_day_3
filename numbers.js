// forEach Method

const myNumbers = [16, 25, 34, 56, 92, 99];

const evensNumber = function (numbers) {
    const evenNums = [];
    
    numbers.forEach((number) => {
        if (number % 2 == 0){
             evenNums.push(number);
        }
    });
    return evenNums;
};

console.log('Even Numbers from the array are: ', evensNumber(myNumbers));


