function replicate(times, number) {
    // your solution here
    // let arr = [number];
    if (times <= 0) return [];
    return [number].concat(replicate(times - 1, number))
}

console.log(replicate(3, 5)) // [5, 5, 5]
console.log(replicate(5,1)); // [1, 1, 1, 1, 1]
console.log(replicate(0,12)); // []
console.log(replicate(-1,12)); // [] 
console.log(replicate(8,0)); // [0, 0, 0, 0, 0, 0, 0, 0] 