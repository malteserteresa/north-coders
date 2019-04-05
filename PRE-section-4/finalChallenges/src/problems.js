// Fill in the body of the functions following the instructions.
// Important! Don't change the name of the functions.

function invertBools (bools) {
  /*
    This function takes an array of booleans and should return an array of the opposite booleans.
    E.g. [true, true, false] => [false, false, true]
  */
    reverseBool = { false : true, true : false };
    return bools.map(bool => reverseBool[bool]);
  }
  
  function primeChecker (num) {
    /*
    This function receives an integer and returns true if the number is prime and false if not.
    A prime number is a positive integer that has only 2 divisors (1 and itself)
    1 is not a prime number
    */
    if(num <= 1){ return false };

    var i = 2;
    while(i < num){
      if(num % i === 0){ return false; }
      i++;
    }

    return true;
}
  
  function sumDigits (num) {
    /*
    This function takes a number of up to 5 digits and should sum together the individual digits and return that sum.
    E.g. if num is 517, 5 + 1 + 7 = 13
    */
    num = num.toString().split("");
    var realDigits = num.map(Number);
    var sumDigits = (accumulator, currentValue) => accumulator + currentValue;

    return realDigits.reduce(sumDigits);
}
  
  function sumDigitsFromString (str) {
    /*
    This function takes a string with a jumble of letters and numbers. It should add together all the numbers that appear in the string and return the total.
    E.g. 'foo5bar6cat1' => 12
    'foo99cat' => 18

    Tip: For this one, it might be useful to know that the value `NaN` in JavaScript behaves oddly. For example, if you do `typeof NaN` it tells you it's a `"number"`. Odd, eh?
    */
   var digits = str.match(/[0-9]/g);
   var realDigits = digits.map(Number);
   var sumDigits = (accumulator, currentValue) => accumulator + currentValue;

   return realDigits.reduce(sumDigits);
  }
  
  function validMobileNumber (num) {
    
    /*
    This function will receive the string of a mobile number. It should return true if the number is a valid UK number and false if not.
    A valid mobile number may begin with '07' followed by 9 more digits.
    It may also begin with '+447' followed by 9 more digits.
    It may also begin with '00447' followed by 9 more digits.
    Anything else is invalid.
    */
   
    if(num.match(/[a-zA-Z-&]/g)){ return false; }
     
    if(num.match(/^(07)/g) && num.length == 11){ return true; }
     
    if(num.match(/^(\+447)/g) && num.length == 13){ return true; }
     
    if(num.match(/^(00447)/g) && num.length == 14){ return true; }
    
    return false;
    
  }
  
  function collectPuppies (dogs) {
    
    /*
    This function takes an array of dogs in the format:
    [
      {breed: 'Labrador', puppies: ['Fluffy', 'Doggo', 'Floof'] },
      {breed: 'Rottweiler', puppies: ['Biscuits', 'Mary'] }
    ]
    It should return an array of all the puppies from all the dogs:
    ['Fluffy', 'Doggo', 'Floof', 'Biscuits', 'Mary']
    */
    puppies = dogs.map(dog => dog.puppies);
    return [].concat.apply([], puppies);
  }
  
  function generateMatrix (n) {
    
    /*
    This function takes a number, n, and returns an n*n nested array populated with the value null.
    E.g. if n is 3, we want:
    [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
    */

   var i = 0;
   var j = 0;
   outer = []
   inner = [];
   while(j < n) {
     while(i < n) {
       inner.push(null);
       i++;
     }
     outer.push(inner);
     j++;
   }
   return outer;
  }
  
  function findWrongWayAnimal (field) {
  
    /*
    This array takes an array of animals in the format:
    ['sheep', 'sheep', 'sheep', 'sheep', 'peehs', 'sheep']
    
    The animals will all be the 'right way round' apart from 1 animal!
    Your function should return its index position. E.g. in this example, 4.
    NB The animals will not always be sheep but it will always be a field of the same kind of animal.
    */

    if(field.length < 3) { return 0; }

    var copy = field.slice();
    field.sort();

    if(field[0] !== field[1]){ var animal = field[0] }else{ var animal = field[field.length-1] };
  //  if(field.length ==1){
  //    return 0;
  //  }
  //  j = 1;
   
  //  for(i = 0; i < field.length; i++) {
  //    if(field[i] != field[j % field.length]){ 
  //      if(field[i] != field[(j+1)%field.length]){ 
  //        animal = field[i]; 
  //        break; 
  //       }else{ 
  //        animal = field[j % field.length] 
  //       } 
  //     }   
  //   j++;
  // }  
 
  
   return copy.indexOf(animal);
   
   
  }

  function countTotalChars (arr, char) {
    /*
    This function takes an array of strings and a character. It should return the total number of times the character appears in all the strings in the array.
    E.g. arr = ['foo', 'bar', 'car', 'meloncoton'] char = o
    Returns 5
    */
    // 

    count = 0; 
    arr.toString().split("").forEach(function(letter){ if(letter === char){ count = count + 1 } })
    return count;
  }
  
  function largestNumber (num) {
    /*
    This function takes a number and returns the largest number that can be made with the same digits.
    E.g. if num is 23, the function should return 32.
    E.g. if num is 9, the function should return 9.
    E.g. if num is 581 the function should return 851.
    */
   n = num.toString().split("");

   return parseInt(n.sort().reverse().join(""));
  }
  
  
  
  // ---------- Do not change the code below this line --------------
  
  module.exports = {
    invertBools,
    primeChecker,
    sumDigits,
    sumDigitsFromString,
    validMobileNumber,
    collectPuppies,
    generateMatrix,
    findWrongWayAnimal,
    countTotalChars,
    largestNumber
  };