// Fill in the body of the functions following the instructions.
// Important! Don't change the name of the functions.

function getYearOfBirth (user) {
  // return the user's yearOfBirth
  // you can assume that the passed user will always have a 'yearOfBirth' property
}

function isOver40 (user) {
  /*
  This function takes a user object with a property of age. It should return true if the user is over 40 and false if the user is 40 or younger.
  */
}

function getUserAge (user) {
  // return the user's age as a number.
  // you can assume that the passed user will always have a 'yearOfBirth' property.
}

function createProduct () {
  /*
  This function should return an object with a type property and a price property. The value for type can be any string, and the value for price should be a number.
  */
}

function addPriceToProduct (product, price) {
  /* The argument product will be an object that looks like this:

  { type: 'Tofu slices' }

  Add a price property to this object and set its value to the price passed in as an argument. Then return the object.
  */
}

function createNorthcoder (name, yearOfBirth) {
  // return an object with:
  // a name property set to the value of the name parameter
  // an age property set to whatever the age of the northcoder would be on the year 2017
  // a language property set to 'JavaScript'
}

function createUserString (userObj) {
  // should take as an argument an object with the format from createNorthcoder
  // returns a string with the user's details in the form:
  // 'name: Mitch, age: 27, language: Javascript';
}

function getAlbumProperties (obj) {
  // should take an object with information about an album
  // should return an array containing all of the object's keys
  // Tip - you could use a loop, or can you find a handy method to use instead?
  // E.g. {a: 'foo', b: 'car', c: 'bar'} should return ['a', 'b', 'c']
}

function getAlbumValues (obj) {
  // should take an object with information about an album
  // should return an array containing all of the object's values
  // E.g. {a: 'foo', b: 'car', c: 'bar'} should return ['foo', 'car', 'bar']
}

function countKeys (obj) {
  /*
  This function will take an object and should return a count of how many keys it has.
  E.g. {a: 'foo', b: 'bar', c: 'cat'} returns 3
  */
}

function addBandName (array) {
  // should take an array of album objects
  // should add a "bandName" property to each object in the array set to a value of 'Radiohead';
}

function deletePassword (user) {
  /*
  This function takes a user object such as:
  {name: 'Barry', username: 'bazzaa44', password: 'ilovetea'}

  It should delete the password key value pair and return the user object.
  */
}

function deleteManyPasswords (users) {
  /*
  This function take an array of user objects and deletes the password key value pair on each user object.
  E.g.
  [
    {name: 'Barry', password: 'ilovetea'},
    {name: 'Sandeep', password: 'ilovecoffee'},
    {name: 'Kavita', password: 'ilovepie'}
  ]
  Returns:
  [
    {name: 'Barry' },
    {name: 'Sandeep'},
    {name: 'Kavita'}
  ]
  */
}

function countTheObjects (arr) {
  /*
  This function takes an array of different data types. It should return a count of the number of objects in the array.

  NB, think carefully about how to test if something is an object! Arrays are technically types of objects in JavaScript, as is the value null. However these should not be counted.
  */
}

module.exports = {
  createProduct,
  isOver40,
  getYearOfBirth,
  getUserAge,
  addPriceToProduct,
  createNorthcoder,
  createUserString,
  getAlbumProperties,
  getAlbumValues,
  countKeys,
  addBandName,
  deletePassword,
  deleteManyPasswords,
  countTheObjects
};
