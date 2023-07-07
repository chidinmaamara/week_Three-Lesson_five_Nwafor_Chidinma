const numbers = [1, 10, 20, 30, 40, 50, 60, 70, 80, 90]

let result = numbers.pop()

console.log(result) // @logs 90;

result = numbers.shift()

console.log(result) // @logs 1;
console.log(numbers) // @logs [ 10, 20, 30, 40, 50, 60, 70, 80 ]