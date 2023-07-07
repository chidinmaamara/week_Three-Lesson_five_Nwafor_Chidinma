const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenNumbers = numbers.filter((number) => {
  if (number % 2 === 0) {
    return number
  }
});

console.log(evenNumbers) // @logs [ 2, 4, 6, 8, 10 ]