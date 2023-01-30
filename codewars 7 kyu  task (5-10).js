        //   ******************** codewars level(7kyu) task(6) Sum of Minimums! **************************


// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.
// For Example:
// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.
// Note: You will always be given a non-empty list containing positive values.
// ENJOY CODING :)

function sumOfMinimums(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      let subArr = arr[i];
      subArr.sort((a, b) => a - b);
      sum += subArr[0];
    }
    return sum;
  }
        //   ******************** codewars level(7kyu) task(7) Blood-Alcohol Content**************************

// Bob drinks too much, and he gets in trouble for it a lot. He drinks so much, in fact, that he has broken the local law enforcement's
// breathalizer with his alcoholic breath! Bob feels simply aweful, so he wants to make up for it by creating a function that will 
// calculate his blood-alcohol level for them. Unfortunately, Bob has gotten too inebriated to do any programming today, so he needs your help!
// He did manage to research the formula for blood-alcohol content before getting too drunk, which he describes below.
// BAC calculator Formula:
// BAC% = (A × 5.14 / W × r) - .015 × H 
// A: Total alcohol consumed, in ounces (oz)
// W: Body weight, in pounds (lbs)
// r: The alcohol distribution ratio, 0.73 for man, and 0.66 for women
// H: Time passed since drinking, in hours
//   Alcohol consumed will be passed as a drinks object with two properties: ounces (the total volume of beverage consumed in ounces), 
//   and abv (the % of alcohol by volume of the beverage as a floating point number--such as 0.05 for 5% abv beer or 0.4 for 40% abv whisky). 
//   For simplicity, Bob assures us that he drinks the same kind of beverage each time he drinks.
//   The gender will be passed as a string, either "male" or "female".
//   Output must be returned as a number data-type, greater than or equal to 0, with up to 4 decimal places. No error handling will be required.
//   Using these parameters, create the function that will calculate Bob's and other partier's BAC.
  
function bloodAlcoholContent(drinks, weight, sex, time){
    let bac = null;
    if (sex == "male"  ) {
      bac = (drinks.ounces * drinks.abv  * 5.14 / weight * 0.73) - 0.015 * time;
    }else if (sex == "female" ) {
      bac = (drinks.ounces * drinks.abv * 5.14 / weight * 0.66) - 0.015 * time;
    } 
    return Number(bac.toFixed(4));
   
  }
          //   ******************** codewars level(7kyu) task(8) Simple Fun  Invite More Women?**************************

// Arthur needs you to return true if he needs to invite more women or false if he is all set.
// Input/Output
// [input] integer array L ($a in PHP)
// An array (guaranteed non-associative in PHP) representing the genders of the attendees, where -1 represents women and 1 represents men.
// 2 <= L.length <= 50
// [output] a boolean value
// true if Arthur need to invite more women, false otherwise.

function inviteMoreWomen(L) {
    let man= null;
    let woman = null;
        for ( let i = 0; i < L.length; i++ ) {
        if ( L[i] < 0 ){
            woman++;
        } else if ( L[i]> 0) {
            man++
        }
        
        }
        return woman < man;
    }
          //   ******************** codewars level(7kyu) task(9) Maximum Triplet Sum (Array Series #7)**************************

    // Task
    // Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .
    // Notes :
    // Array/list size is at least 3 .
    // Array/list numbers could be a mixture of positives , negatives and zeros .
    // Repetition of numbers in the array/list could occur , So (duplications are not included when summing).
    // Input >> Output Examples
    // 1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)
    // Explanation:
    // As the triplet that maximize the sum {6,8,3} in order , their sum is (17)
    // Note : duplications are not included when summing , (i.e) the numbers added only once .
    // 2- maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18)
    // Explanation:
    // As the triplet that maximize the sum {8, 6, 4} in order , their sum is (18) ,
    // Note : duplications are not included when summing , (i.e) the numbers added only once .
    // Note : duplications are not included when summing , (i.e) the numbers added only once .
     // 3- maxTriSum ({-7,12,-7,29,-5,0,-7,0,0,29}) ==> return (41)
    // Explanation:
    // As the triplet that maximize the sum {12 , 29 , 0} in order , their sum is (41) ,

    function maxTriSum(numbers){
      let uniqueNumbers = numbers.filter((value, index, array) => array.indexOf(value) === index);
      let sortNumbers = uniqueNumbers.sort( (a,b) => b-a ) ;
      let result = null;
      for ( let i = 0; i < 3; i++ ) {
        result += sortNumbers[i];
      }
      return result;
    }
              //   ******************** codewars level(7kyu) task(10) Daily Calorie Requirement**************************


    
    // A gym plans to offer a new service campaign about nutrition advice in relation to sporting activities. Initially each member´s daily calorie requirement has to be calculated.
    // There are various ways of calculating the amounts of calories needed to maintain energy balance for various gender and age groups at 
    // different levels of physical activity. One of the most accurate formulas used to calculate a person´s daily calorie demand is the Mifflin-St Jeor formula.
    // Before applying the formula it is important to know a person´s gender, weight (kg), height (cm), age (y) and activity factor. By knowing all of these factors the calculation can be done in two simple steps:
    // Step 1: Calculation of “Resting Metabolic Rate” (RMR):
    // RMR Men = 10 x weight (kg) + 6.25 x height (cm) - 5 x age (y) + 5 
    // or
    // RMR Women = 10 x weight (kg) + 6.25 x height (cm) - 5 x age (y) – 161
    // Step 2: RMR multiplied by activity factor:
    // a) little activity, activity factor = 1.2
    // b) moderately active,  activity factor  = 1.55
    // c) very active,  activity factor  = 1.7
    // d) extremely active,  activity factor = 1.9
    // Example:
    // Susi, female, 29 years old, 170 cm, 60 kg: RMR = 600 + 1062,5 -145 – 161 = 1356,5 kcal/day. If she is moderately active her activity factor is 1.55. Hence her daily calorie requirement is 1356,5 * 1.55 = 2102,58 kcal/day.
    // Task:
    // Write a function that takes in an array containing a gym member´s personal details. The array will always be sorted like this:
    // [name, gender (m/f), age (y), height (cm), weight (kg), activity level]
    // e.g. [“Susi”, “f”, 29, 170, 60, “moderately active”] 
    // The function should then apply the Mifflin-St Jeor formula to calculate the member´s daily calorie requirement in kcal/day. The calculation should be rounded to 2 decimal digits.
    // The final result of the function should be a sentence saying “XY´s daily calorie requirement is XY kcal.”.
    // e.g. “Susi´s daily calorie requirement is 2102.58 kcal.”
    // ARRAYS ALGORITHMS FUNDAMENTALS

    function calorie (member){
      let y = 0;
      let x = 0;
      if ( member[1] === 'f' ) {
        y = 10 * member[4] + 6.25 * member[3] - 5 * member[2] - 161;
      } else if ( member[1] === 'm') {
        y =  10 * member[4] + 6.25 * member[3] - 5 * member[2] + 5;
      }
      
      switch (member[5]) {
        case 'little activity':
          x = y * 1.2;
          break;
        case 'moderately active':
          x = y * 1.55;
          break;
        case 'very active':
          x = y * 1.7;
          break;
        case 'extremely active':
          x = y * 1.9;
          break;
      }
      let roundOfNumber = x.toFixed(2);
      
      return member[0] + '´s ' + 'daily calorie requirement is' +' ' + roundOfNumber + ' ' + 'kcal.';
    } 
    
    