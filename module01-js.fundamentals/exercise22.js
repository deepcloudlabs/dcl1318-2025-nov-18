// imperative programming
let numbers = [4, 8, 15, 16, 23, 42]
let result = 0
for (let number of numbers) {
    if (number % 2 === 0) {
        const cubed = number ** 3;
        result += cubed;
    }
}
console.log(result); // 78760
// declarative programming: functional programming, SQL
let if_even = n => n % 2 === 0;
let to_cube = u => u ** 3;
let to_sum = (acc, n) => acc + n;
result = numbers.filter(if_even)
                .map(to_cube)
                .reduce(to_sum, 0);
console.log(result); // 78760
