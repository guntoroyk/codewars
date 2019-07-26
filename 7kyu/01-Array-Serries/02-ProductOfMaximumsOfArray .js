function maxProduct(numbers, size){
    //your code here
    numbers.sort(function(a, b) {return b - a});
    // console.log(numbers)

    let result = 1;
    for (let i = 0; i < size; i++) {
        result *= numbers[i];
    }
    return result;
}


console.log(maxProduct([4, 3, 5], 2))
