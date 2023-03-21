//1

function addThemAll(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

console.log(addThemAll(2,4));
console.log(addThemAll(1,2,3,4));
console.log(addThemAll(5,5,10));


