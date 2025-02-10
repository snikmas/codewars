// // Complete the solution so that the function will break up camel casing, using a space between words.

// // Example
// // "camelCasing"  =>  "camel Casing"
// // "identifier"   =>  "identifier"
// // ""             =>  ""


// function solution(line) {

//   let num = line.indexOf(line.match(/[A-Z]/g))
//   if (num == -1) return line
//   line = line.split('')
//   line.splice(num, 0, ' ')
//   return line.join('')
// }


// console.log(solution("camelCasing"))