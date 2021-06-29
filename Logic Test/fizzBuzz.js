function fizzBuzz(number) {
    for (a = 1; a <= number; a++) {
        if (a % 3 == 0 && a % 5 == 0) {
            console.log("FizzBuzz")
        } else if (a % 3 == 0) {
            console.log("Fizz")
        } else if (a % 5 == 0) {
            console.log("Buzz")
        } else {
            console.log(a)
        }
    }
}

console.log(fizzBuzz(3))
console.log(fizzBuzz(5))
console.log(fizzBuzz(15))