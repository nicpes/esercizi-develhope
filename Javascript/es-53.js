function sum(...numbers) {
    return numbers.reduce((previous, current)=> {return previous + current})
}

console.log(sum(1, 2, 3, 4, 5));