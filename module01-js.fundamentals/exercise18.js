numbers = [4, 8, 15, 16, 23, 42]
console.log(numbers[0])
console.log(numbers[-1])
console.log(numbers[5])
console.log(numbers[6])
// external loop
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}
// external loop
for (const i in numbers) {
    console.log(numbers[i])
}
// external loop
for (const number of numbers) {
    console.log(number)
}
// internal loop
numbers.forEach((number, index) => {
    console.log(number,index)
})