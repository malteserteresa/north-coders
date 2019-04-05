// Fill in the body of the functions following the instructions.
// Important! Don't change the name of the functions.

function add (a, b) {
  // return the sum of the arguments
  return a + b;

} 

function sub (a, b) {
  // return the difference between the arguments
  return a - b;
}

function mul (a, b) {
  // return the result of multiplying the 1st argument by the 2nd
  return a * b;
}

function div (a, b) {
  // return the result of dividing the 1st argument by the 2nd
  return a / b;
}

function mod (a, b) {
  // return the remainder of the division a / b
  return a % b;
}

function square (n) {
  // return the square of n
  return n**2;
}

function squareRoot (n) {
  // return the square root of n
  return n**0.5
}

function raiseToPower (m, n) {
  return m**n
}

function calculateAge (yearOfBirth) {
  // given someone's year of birth, calculate how old they are in years today
  return 2018 - yearOfBirth
}

function formatMoney (amount) {
  /**
   * return a the amount formatted into pounds sterling
   * Amounts should be a string with the £ symbol in front
   *   formatMoney(2.33) => "£2.33"
   * Amounts should be rounded to 2 decimal numbers
   *   formatMoney(2.338) => "£2.34"
   * Amounts should always have 2 decimal numbers even if they are zeroes
   *   formatMoney(1) => "£1.00"
   */

    return `£${amount}`
}

function calculateCircleArea (r) {
  return 2*r**2*Math.PI
}

function addVAT (a) {
  /** calculate the VAT of a
   *  add this to a
   *  round to 2 decimal places
   *  return that value
   */
  var VAT = a / 100 * 20
  var newPrice = a + VAT
  return newPrice.toFixed(2)
}

function convertMilesToKilometers (miles) {
  return miles / 1.6
}


function calculateFullTurns (degrees) {
  // return the number of full turns you can make with the provided degrees
  // 1 full turn === 360 degrees
  return degrees / 360   
}

module.exports = {
  add, 
  sub, 
  mul, 
  div, 
  mod,
  square, 
  squareRoot, 
  raiseToPower,
  calculateAge,
  formatMoney,
  calculateCircleArea,
  addVAT,
  convertMilesToKilometers,
  calculateFullTurns,
};
