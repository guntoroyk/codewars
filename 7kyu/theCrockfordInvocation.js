function add(x) {
    return function (y) {
        return x + y;
    };
}

function subtract(x) {
    return function (y) {
        return x - y;
    }
}

function multiply(x) {
    return function (y) {
        return x * y;
    }
}

function apply(fn){
    // return function (x) {
    //     return function (y) {
    //         return fn(x)(y)
    //     }
    // }
    return fn;

}
// console.log(add(3)(4))
// console.log(subtract(3)(4))
// console.log(multiply(3)(4))
console.log(apply(add)(7)(10));
console.log(apply(subtract)(7)(10));
console.log(apply(multiply)(7)(10));