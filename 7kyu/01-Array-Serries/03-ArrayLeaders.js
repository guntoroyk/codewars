var arrayLeaders = numbers => {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {

        let sumOfTheRights = 0;
        for (let j = i + 1; j < numbers.length; j++) {
            sumOfTheRights += numbers[j];
        }
        if (numbers[i] > sumOfTheRights) result.push(numbers[i]);
    }
    // console.log(result)

    return result// some leaders
}

console.log(arrayLeaders([16, 17, 4, 3, 5, 2]));