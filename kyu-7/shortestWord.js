// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// 1. split -> length -> find max

//1 try

function findShort(s){
  let max = 99;
  s.split(' ').forEach(word => {
    max = word.length < max ? word.length : max;
  })
  return max
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))
console.log(findShort("turns out random test cases are easier than writing out basic ones"))
console.log(findShort("Let's travel abroad shall we"))
