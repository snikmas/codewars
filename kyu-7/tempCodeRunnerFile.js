// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// 1. split -> length -> find max

function findShort(s){
  s = s.split(' ')
  let max = s[0].length;
  s.forEach(word => {
    max = word.length < max ? word.length : max;
  })
  return s
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))
console.log(findShort("turns out random test cases are easier than writing out basic ones"))
console.log(findShort("Let's travel abroad shall we"))