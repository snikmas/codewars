// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// 1. check the 0 and the 2 number
// 2. if they're the same -> find in the arr != to them
// if they're not the same, check the 3rd num

// pretty straightforward...
// can use regex for matching unique?
function findUniq(arr){
  let number;
  if (arr[0] == arr[1]){
    arr.slice(2).forEach(num => {
      if (num != arr[0]) {
        number = num;
      }
    })
  } else if (arr[0] == arr[2]){
    number = arr[1]
  } else {
    number = arr[0];
  }
  return number;
}


console.log(findUniq([ 0, 0, 1 ]))
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))
console.log(findUniq([ 1, 1, 2, 1, 1 ]))


// others solutions: like this one

function findUniq(arr){
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}