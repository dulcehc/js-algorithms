function factorial(number) {
    if (number === 0 || number === 1) return 1
    return number * factorial(number -1 )
}
console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(4))
console.log(factorial(7))