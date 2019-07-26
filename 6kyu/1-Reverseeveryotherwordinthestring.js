function reverse(str){
    //WRITE SOME MAGIC
    if (str.length === 0) return "";

    let arrStr = str.split(" ");
    // console.log(arrStr)
    let isAllSpaces = true;
    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i] !== '') isAllSpaces = false;
    }

    if (!isAllSpaces) {
        for (let i = 1; i < arrStr.length; i+=2) {
            let newStr = "";
            for (let j = 0; j < arrStr[i].length; j++) {
                newStr = arrStr[i][j] + newStr;
            }
            arrStr[i] = newStr;
        }
        console.log(arrStr.length)
        return arrStr.join(" ")
    }

    return "";
}

// console.log((reverse("Reverse this string, please!")))
// console.log((reverse("I really don't like reversing strings!")));
console.log((reverse("  ")));
