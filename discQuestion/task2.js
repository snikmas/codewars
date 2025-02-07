// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

//reduce(callbackf, firstNum)

function sum(arr){
  return result = arr.reduce((a, b) => {
    if(isNaN(Number(a)) || isNaN(Number(b))) return "ERROR"
    return Number(a) + Number(b)
  }, 0)
}

console.log(sum([])) // 0
console.log(sum([3, 1])) // 4
console.log(sum(['0', 1, 4, '3'])) // 8
console.log(sum(['d', '1', 4])) // ERROR