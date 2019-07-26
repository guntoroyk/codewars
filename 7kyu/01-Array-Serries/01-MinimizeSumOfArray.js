function minSum(arr) {
    let result = 0;
    arr.sort(function(a, b) {return b - a})
    // console.log(arr)

    let a = [];
    let b = [];
    for (let i = 0; i < arr.length; i++) {
        if (i < arr.length / 2) {
            a.push(arr[i]);
        } else {
            b.push(arr[i]);
        }
    }
    // console.log(a);
    b.sort(function(a, b) {return a - b})
    // console.log(b);

    for (let i = 0; i < a.length; i++) {
        result += a[i] * b[i]
    }

    return result;
}

function throwElement(arr, a, b) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i !== a && i !== b) {
            result.push(arr[i]);
        }
    }
    return result;
}
// console.log(throwElement([5,4,2,3], 0, 3))

console.log(minSum([5,4,2,3]));
console.log(minSum([12,6,10,26,3,24]));