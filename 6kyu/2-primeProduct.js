function primeProduct(n){
    //coding and coding..
    // cari angka-angka prima
    let primes = [];
    let sameWithSumN = []
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            for (let j = 2; j < n; j++) {
                if (isPrime(j)){
                    if (i + j === n) {
                        sameWithSumN.push([i, j])
                    }
                }
            }
        }
    }
    
    // console.log(primes)
    
    
    // while (primes.length > 0) {
    //     let indexJ = 0;
    //     for (let j = 0; j < primes.length; j++) {
    //         if (primes[0] + primes[j] === n) {
    //             sameWithSumN.push([primes[0], primes[j]]);
    //             indexJ = j;
    //         }
    //     } 
    //     primes = throwElement(primes, 0, indexJ);
        
    // }
    // console.log(sameWithSumN)
    
    let maxProduct = 0;
    for (let i = 0; i < sameWithSumN.length; i++) {
        if (sameWithSumN[i][0] * sameWithSumN[i][1] > maxProduct) {
            maxProduct = sameWithSumN[i][0] * sameWithSumN[i][1];
        }
    }
    
    return maxProduct;
}

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}
// console.log(throwElement([3, 5, 7], 0, 2))
// console.log(isPrime(2));

console.log(primeProduct(10)) // 3 x 7 = 21