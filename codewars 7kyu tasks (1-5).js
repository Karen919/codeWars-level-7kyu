        //   ******************** codewars level(7kyu) task(1) **************************
// Task
// Given an integral number, determine if it's a square number:
// In mathematics, a square number or perfect square is an integer that is the square of an integer;
//  in other words, it is the product of some integer with itself.
// The tests will always use some integral number, so don't worry about that in dynamic typed languages.
// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

var isSquare = function(n){
   let x = Math.sqrt(n);
  return Number.isInteger(x);
}

        //   ******************** codewars level(7kyu) task(2) Figurate Numbers #2 - Pronic Number**************************

// Task:
// You have to create a function isPronic to check whether the argument passed is a Pronic Number and return true if it is & false otherwise.
        
// Description:
// Pronic Number -A pronic number, oblong number, rectangular number or heteromecic number,
//  is a number which is the product of two consecutive integers, that is, n(n + 1).
// The first few Pronic Numbers are - 0, 2, 6, 12, 20, 30, 42...
// Explanation:
//   0 = 0 × 1   // ∴  0 is a Pronic Number
//   2 = 1 × 2   // ∴  2 is a Pronic Number
//   6 = 2 × 3   // ∴  6 is a Pronic Number
//  12 = 3 × 4   // ∴ 12 is a Pronic Number
//  20 = 4 × 5   // ∴ 20 is a Pronic Number
//  30 = 5 × 6   // ∴ 30 is a Pronic Number
//  42 = 6 × 7   // ∴ 42 is a Pronic Number
        
function isPronic(n){
        for ( let i = 0; i <= n; i++ ) {
          if ( i*( i + 1 ) === n){
            return true;
          }  
            
        } return false;
      }

        //   ******************** codewars level(7kyu) task(3) Largest pair sum in array**************************

// Task:
// Given a sequence of numbers, find the largest pair sum in the sequence.
// For example
// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.
      
function largestPairSum (numbers) {
   
        let result = numbers.sort(function (a,b) { return b-a; }) ;
         return  result[0] + result[1]; }



        //   ******************** codewars level(7kyu) task(4) Fizz Buzz - Without ifs**************************

// Task
// You need to implement a function that applies the standard fizz buzz test:
// If a number is divisible by 3, return Fizz
// If it is divisible by 5, return Buzz
// If it is divisible by both 3 and 5, return FizzBuzz
// If it is not divisible by 3 or 5, return the number itself
// However, when making the function, you cannot use if (meaning else is also not an option).
// Input
// A number will always be provided
// The number provided will always be positive and an integer
// Examples
// 6 should return Fizz
// 10 should return Buzz
// 15 should return FizzBuzz
// 17 should return 17

const fizzBuzz = n => {
        return (n % 5 ==0 && n % 3 ==0 )? 'FizzBuzz':
         ( n%5 == 0) ? 'Buzz':
         (n%3==0) ? 'Fizz': n;
};
        //   ******************** codewars level(7kyu) task(5)Name on billboard**************************

// You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default
//  price of £30, but that can be different if you are given 2 parameters instead of 1.
// You can not use multiplier "*" operator.
// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).

function billboard ( name, price = 30 ){
        let result = 0;  
        for ( let i = 0; i < name.length; i++ ){
          result += price; 
        }
        return result;
      }
     



