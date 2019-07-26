function maxNumber(n){
    //your code here
    let arrStrN = n.toString().split("");
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < arrStrN.length; i++) {
            if (Number(arrStrN[i]) < Number(arrStrN[i+1])) {
                let temp = arrStrN[i];
                arrStrN[i] = arrStrN[i+1];
                arrStrN[i+1] = temp;
                sorted = false;
            }
        }
    }
    return Number(arrStrN.join(""))
}

console.log(maxNumber(213)) // 321