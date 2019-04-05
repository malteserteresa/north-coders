// Fill in the body of the functions following the instructions.
// Important! Don't change the name of the functions.

function getEvenNums (nums) {
  /*
  This function takes an array of integers and returns an array containing only even integers
  */
 return nums.filter(function(n){ return n % 2 == 0 });
}

function getBigNums (nums) {
  /*
  This function takes an array of numbers and returns an array of only the numbers that are over 100.
  */
 return nums.filter(function(n){ return n > 100 });

}

function getWordLengths (str) {
  /*
  This function takes a string and returns an array of the lengths of each word in the string.
  E.g. 'pineapple and black bean curry' => [9, 3, 5, 4, 5]
  */
 if(!str){ return []; };
 var arr = str.split(" ");
 return arr.map( word => word.length );
 
}


function getLongNames (arr) {
  /*
  This function takes an array of names and returns an array containing names longer than 8 characters.
  E.g. ['Helen', 'Charlotte', 'Claude'] => ['Charlotte']
  */

 return arr.filter(function(name){ return name.length > 8 });
}

function getSmiths (arr) {
  /*
  This function takes an array of full names and returns an array containing only the people whose last name is Smith.
  E.g. ['Charlotte Jones', 'Rebecca Smith', 'Harry Smith', 'John Smithy', 'Smith Jones'] => ['Rebecca Smith', 'Harry Smith']
  */
return arr.filter(function(name){ return name.match(/(Smith)$/g) });
}

function reverseWords (str) {
  /*
  This function takes a string of words and reverses each word. 
  It returns a string with each word in the same order, but with its characters reversed.
  E.g. 'hello world' => 'olleh dlrow'
  */
 var split = str.split(" ");
 return split.map(word => word.split("").reverse().join("")).join(" ");
}

function getMiddleChars (str) {
  /*
  This function takes a string and returns an array containing the middle characters of each word. 
  If the word is of even length then you should find the middle two characters.
  E.g. 'hello people' => ['l', 'op']
  */
 function extractMiddle(str) {

  var position;
  var length;

  if(str.length % 2 == 1) {
      position = str.length / 2;
      length = 1;
  } else {
      position = str.length / 2 - 1;
      length = 2;
  }

  return str.substring(position, position + length);
}
 if(!str){ return []};
 var words = str.split(" "); 
 return words.map(word => extractMiddle(word));
}




function getPugNames (dogs) {
  /*
  This function takes an array of dog objects and returns an array of the names of all the pugs.
  E.g. [
    {name: 'Beatrice', breed: 'Lurcher'},
    {name: 'Max', breed: 'Pug'},
    {name: 'Poppy', breed: 'Pug'}
  ]
  will return ['Max', 'Poppy']
  */

 pugs = dogs.filter(function(dog){ if( dog.breed === 'Pug' ){ return dog.name }});
 return pugs.map(pug => pug.name);

}
function getDNAPairs (dna) {
  /*
  This function takes a string of DNA such as 'GTCA' and returns an array containing correctly matched DNA pairs.
  E.g. 'GTTC' => ['GC', 'TA', 'TA', 'CG']

  If any nonsensical letters are passed as DNA they should be ignored.
  E.g. 'GYTC' => ['GC', 'TA', 'CG']
  */
 pairs = { "G" : "GC", "T" : "TA", "A" : "AT", "C" : "CG" };
 letters = dna.toUpperCase().split("");
 
 return letters.map(letter => pairs[letter]).filter(function(letter){ if(letter){ return letter }});
}

function getFactorials (nums) {
  /*
  This function takes an array of positive integers and returns an array of the factorials of these numbers. 
  E.g. [4, 3, 2] => [24, 6, 2]
  
  The factorial of a number is the product of that number and all the integers below it.
  E.g. the factorial of 4 is 4 * 3 * 2 * 1 = 24
  */
 factorial = function(n){ if(n <= 0){ return 1; }else{ return (n*factorial(n-1)); }};
 return nums.map(n => factorial(n));
}

function getMiddleNames (names) {
  /*
  This function receives an array of names and returns an array containing the middle names. 
  If someone does not have a middle name the array should contain the value null at this index.
  E.g. ['Ben Jones', 'Marsha Naomi Jenkins', 'Anna'] => [null, 'Naomi', null]
  */
 getMiddleName = function(name){ separatedNames = name.split(" "); if(separatedNames.length === 3){ return separatedNames[1]; }else{ return null; }}
 return names.map(name => getMiddleName(name));

}

function findPalindromes (words) {
  /*
  This function takes an array of words and returns an array containing only the palindromes.
  A palindrome is a word that is spelled the same way backwards.

  E.g. ['foo', 'racecar', 'pineapple', 'porcupine', 'pineenip'] => ['racecar', 'pineenip']
  */
 if(words.length === 0){ return [] };
 function isOddLength(word){ var oddLength; if(word.length % 2 == 1) { oddLength = true } else { oddLength = false; } return oddLength; };
 reverse = function(word){ return word.split("").reverse().join(""); } 
 function isPalindrome(word){ var firstHalf; var secondHalf; if(isOddLength(word)) { firstHalf = word.substring(0, word.length/2-0.5); secondHalf = word.substring(word.length/2+0.5, word.length); } else { firstHalf = word.substring(0, word.length/2); secondHalf = word.substring(word.length/2, word.length); } firstHalf = reverse(firstHalf); if(firstHalf === secondHalf){ return true; }}
 return words.filter(isPalindrome);
}


// ---------- Do not change the code below this line --------------

module.exports = {
  getEvenNums,
  getBigNums,
  getWordLengths,
  getLongNames,
  getSmiths,
  reverseWords,
  getMiddleChars,
  getPugNames,
  getDNAPairs,
  getFactorials,
  getMiddleNames,
  findPalindromes
};
