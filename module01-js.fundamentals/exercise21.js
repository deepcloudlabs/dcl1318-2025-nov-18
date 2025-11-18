let numbers = [42, 8, 4, 16, 15, 23];
console.log(numbers.includes(15));
console.log(numbers.includes(108));
console.log(numbers.indexOf(108));
numbers.push(108)
console.log(numbers.includes(108));
console.log(numbers.indexOf(108));
console.log(numbers);
console.log(numbers.slice(2, 5)); // python: numbers[2:5]
numbers.splice(0, 7);
console.log(numbers);
