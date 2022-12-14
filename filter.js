// const evensNumber = function (numbers) {
//     const evenNums = [];
    
//     numbers.forEach((number) => {
//         if (number % 2 == 0){
//              evenNums.push(number);
//         }
//     });


//     return evenNums;
// };

const getEvens = function(arrayOfNums) {
    const evenNumbers = arrayOfNums.filter((number) => {
        return number % 2 === 0;
    });
    
    return evenNumbers;
}

const numbers = [1,2,3,4,5,6,7,8];


const getOdds = function(arrayOfNums) {
    const oddNumbers = arrayOfNums.filter((number) => {
        return number % 2 !== 0;
    });

    return oddNumbers;
};
console.log('Even numbers: ', getEvens(numbers));
console.log('odds numbers: ', getOdds(numbers));
     
 
