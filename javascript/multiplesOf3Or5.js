// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.
function solution1(number){
  let result = 0;
  if (number < 0) return 0;
  for (let i = 1; i <= number; i++){
    if (!(i % 3) || !(i % 5)) {
      result += i;
    }
  }
}

function solution(number){
  if (number <= 0) return 0;
  let sum = 0;
  for (let i = 0; i < number; i++){
   // console.log(sum)
    switch(i / 2){
      case 0:
        sum += i;
        break;
      case 2:
        sum += i;
        break;
      case 5:
        console.log('dd')
      }
    }
  


  return sum
}


console.log(solution(10));