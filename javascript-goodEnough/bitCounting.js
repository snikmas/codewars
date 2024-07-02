// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBitsFIRSTTRY = function (n) {
  n = n.toString(2).split('');
  return (n.reduce((sum, el) => {
    return sum + Number(el);
}, 0));
}

function countBitsMY(a) {
  let sum = 0;
  a.toString(2).split('').forEach((x) => sum += Number(x));
  return sum;
}

function countBists(a){
  return (a.toString(2).split('0').join('').lenght());
}

countBits = x => x.toString(2).split('0').join('').length;

console.log(countingBits2(0))
console.log(countingBits2(4))
console.log(countingBits2(7))
console.log(countingBits2(9))
console.log(countingBits2(10))

function countingBits2(num){
  console.log(num.toString(2).split('0'));
}