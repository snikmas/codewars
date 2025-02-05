// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6


//1 way
function digitalRoot(n){
  let k = 0
  do {
    n = String(n).split('');
    k = n.reduce((a, b) => Number(a) + Number(b), 0)
    n = k;
  } while (String(k).length > 1)

  return k;
}

console.log(digitalRoot(456));


// best approach
function bestApproach(n){
  if (n < 10) return n;

  return bestApproach(n.toString().split('').reduce(function(acc, d) {return acc + +d; }, 0))
}