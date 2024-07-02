// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
// 1. go throught an element
// 2. 0? if so, change the places with the next element!



// function moveZeros(arr) {
//   return arr.map((element, index) => {

//   })
//   return
// }

// var moveZeros = function (arr) {
//   return [
//     ...(arr.filter(n => n !== 0)),
//     ...(arr.filter(n => n === 0))
//   ];
// }

function moveZerosfirst(arr) {
  let arr1 = arr.filter((x) => x === 0)
  let arr2 = arr.filter((x) => x !== 0)
  return arr2.concat(arr1);
}

function moveZeros(arr){
  let zero = arr.filter((x) => x === 0)
  let noZero = arr.filter((x) => x !== 0)
  return noZero.join('') + zero.join('')
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));