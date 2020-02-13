// Write three functions that compute the sum of the numbers in an array: 
//   using a for-loop, a while loop, do-while loop.
const myArr = [1, 2, 3, 4, 5]

function forSum(arr) {
    let total = 0;
    for (const num in arr) {
        total += arr[num];
    }
    return total;
}
console.log(forSum(myArr));


const whileSum = function(arr) {
    let total = 0;
    let i = 0;

    while (i < arr.length) {
        total += arr[i];
        i++;
    }
    return total;
}
console.log(whileSum(myArr));


const doWhileSum = (arr) => {
    let total = 0;
    let i = 0;
    do {
        total += arr[i];
        i++;
    } while (i < arr.length);
    return total;
}
console.log(doWhileSum(myArr));