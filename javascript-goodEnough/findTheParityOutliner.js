// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

function findOutlierFirstTry(array) {
  let even = array.filter(num => !(num % 2));
  let odd = array.filter(num => num % 2);

  return even.length == 1 ? even[0] : odd[0];
}

function findOutlier(array){
  let even = array.filter((x) => x % 2 == 0)
  let odd = array.filter((x) => (x % 2))
  return Number(even.length == 1 ? even : odd);
}





console.log(findOutlier([0, 1, 2]))
console.log(findOutlier([1, 2, 3]))
console.log(findOutlier([2,6,8,10,3]))
console.log(findOutlier([0,0,3,0,0]))
console.log(findOutlier([1,1,0,1,1]) )

