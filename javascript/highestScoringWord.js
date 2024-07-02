// 1. use .charCodeAt to find the unicode number of the letter
// 2. sum up
function high (x) {
  let sum = 0;

  x.split('').forEach((letter) => console.log(sum += parseInt(letter, 10)));
  
  //console.log(sum);
}

console.log(high('man i need a taxi up to ubud'));
high('what time are we climbing up the volcano');