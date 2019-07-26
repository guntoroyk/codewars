const sequenceSum = (begin, end, step) => {
    if (begin > end) return 0;
    return begin + sequenceSum(begin + step, end, step);
};
/**
    sequenceSum(2,2,2) === 2
    sequenceSum(2,6,2) === 12 // 2 + 4 + 6
    sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
    sequenceSum(1,5,3) === 5 // 1 + 4

   5 + seq(1, 2, 3)
   5 + 2
*/

console.log(sequenceSum(2, 2, 2))
console.log(sequenceSum(2, 6, 2))
console.log(sequenceSum(1, 5, 1))
console.log(sequenceSum(1, 5, 3))

function sum(num) {
    if (num === 0) return 0;

    return num + sum(num - 1);
}

// console.log(sum(5)) // 5 + 4 + 3 + 2 + 1 = 15
