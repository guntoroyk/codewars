function isIsogram(str){
    if (str.length === 0) return true;

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (i !== j) {
                if (str[i].toLowerCase() === str[j].toLowerCase()) return false;
            }
            // console.log(str[i], str[j]);
        }
    }
    return true;
}

console.log( isIsogram("Dermatoglyphics"))
console.log( isIsogram("isogram"));
console.log( isIsogram("aba"));
console.log( isIsogram("moOse"));
console.log( isIsogram("isIsogram"));
console.log( isIsogram(""));