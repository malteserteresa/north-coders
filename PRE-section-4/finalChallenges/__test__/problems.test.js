const {expect} = require('chai');
const {
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
} = require('../src/problems');

describe('invertBools', () => {
  it('it returns an empty array when passed []', function () {
    expect(invertBools([])).to.eql([]);
  });
  it('returns [false, false, false] when passed [true, true, true]', function () {
    expect(invertBools([true, true, true])).to.eql([false, false, false]);
  });
  it('returns [true, false, false] when passed [false, true, true]', function () {
    expect(invertBools([false, true, true])).to.eql([true, false, false]);
  });
  it('returns [true, true, true] when passed [false, false, false]', function () {
    expect(invertBools([false, false, false])).to.eql([true, true, true]);
  });
  it('returns [true, false, true] when passed [false, true, false]', function () {
    expect(invertBools([false, true, false])).to.eql([true, false, true]);
  });
});

describe('primeChecker', function () {
  it('returns false for any negative numbers', function () {
    expect(primeChecker(-9)).to.equal(false);
    expect(primeChecker(-10)).to.equal(false);
    expect(primeChecker(-1)).to.equal(false);
  });
  it('returns false for 0', function () {
    expect(primeChecker(0)).to.equal(false);
  });
  it('returns false for 1', function () {
    expect(primeChecker(1)).to.equal(false);
  });
  it('returns true for a 2', function () {
    expect(primeChecker(2)).to.equal(true);
  });
  it('returns true for 7', function () {
    expect(primeChecker(7)).to.equal(true);
  });
  it('returns true for 13', function () {
    expect(primeChecker(13)).to.equal(true);
  });
  it('returns true for random other prime numbers', function () {
    expect(primeChecker(199)).to.equal(true);
    expect(primeChecker(191)).to.equal(true);
    expect(primeChecker(71)).to.equal(true);
    expect(primeChecker(173)).to.equal(true);
    expect(primeChecker(53)).to.equal(true);
    expect(primeChecker(163)).to.equal(true);
  });
  it('returns false for 4', function () {
    expect(primeChecker(4)).to.equal(false);
  });
  it('returns false for 16', function () {
    expect(primeChecker(16)).to.equal(false);
  });
  it('returns false for 30', function () {
    expect(primeChecker(30)).to.equal(false);
  });
  it('returns false for random other non-prime numbers', function () {
    expect(primeChecker(22)).to.equal(false);
    expect(primeChecker(100)).to.equal(false);
    expect(primeChecker(175)).to.equal(false);
    expect(primeChecker(18)).to.equal(false);
    expect(primeChecker(90)).to.equal(false);
    expect(primeChecker(105)).to.equal(false);
  });
});

describe('sumDigits', function () {
  it('returns the 2 when passed 2', function () {
    expect(sumDigits(2)).to.equal(2);
  });
  it('returns the 5 when passed 5', function () {
    expect(sumDigits(5)).to.equal(5);
  });
  it('returns the 10 when passed 55', function () {
    expect(sumDigits(55)).to.equal(10);
  });
  it('returns the 6 when passed 123', function () {
    expect(sumDigits(123)).to.equal(6);
  });
  it('returns the 23 when passed 6782', function () {
    expect(sumDigits(6782)).to.equal(23);
  });
  it('returns the 6 when passed 5001', function () {
    expect(sumDigits(5001)).to.equal(6);
  });
  it('returns the 36 when passed 9999', function () {
    expect(sumDigits(9999)).to.equal(36);
  });
});

describe('sumDigitsFromString', function () {
  it('returns 5 when passed "foo5foo"', function () {
    expect(sumDigitsFromString('foo5foo')).to.equal(5);
  });
  it('returns 10 when passed "5foo5foo"', function () {
    expect(sumDigitsFromString('5foo5foo')).to.equal(10);
  });
  it('returns 13 when passed "hello1world5this3is2a2string"', function () {
    expect(sumDigitsFromString('hello1world5this3is2a2string')).to.equal(13);
  });
  it('returns 18 when passed "foo99cat"', function () {
    expect(sumDigitsFromString('foo99cat')).to.equal(18);
  });
  it('returns 36 when passed "pineapples89are7246great"', function () {
    expect(sumDigitsFromString('pineapples89are7246great')).to.equal(36);
  });
});

describe('validMobileNumber', function () {
  it('returns false when passed a string of the wrong length', function () {
    expect(validMobileNumber('123')).to.equal(false);
    expect(validMobileNumber('0750617250638')).to.equal(false);
    expect(validMobileNumber('+447712368768724988')).to.equal(false);
  });
  it('returns true when passed a string of "07506172506"', function () {
    expect(validMobileNumber('07506172506')).to.equal(true);
  });
  it('returns true when passed a string of "+447506172506"', function () {
    expect(validMobileNumber('+447506172506')).to.equal(true);
  });
  it('returns true when passed a string of "00447506172506"', function () {
    expect(validMobileNumber('00447506172506')).to.equal(true);
  });
  it('returns false when passed a string of "07506189foo"', function () {
    expect(validMobileNumber('07506189foo')).to.equal(false);
  });
  it('returns false when passed a string of "00447506189foo"', function () {
    expect(validMobileNumber('00447506189foo')).to.equal(false);
  });
  it('returns false when passed a string of "+447506189foo"', function () {
    expect(validMobileNumber('+447506189foo')).to.equal(false);
  });
  it('returns true when passed random other valid phone numbers', function () {
    expect(validMobileNumber('00447555123456')).to.equal(true);
    expect(validMobileNumber('+447676111222')).to.equal(true);
    expect(validMobileNumber('07898888643')).to.equal(true);
    expect(validMobileNumber('07766555432')).to.equal(true);
    expect(validMobileNumber('07989765490')).to.equal(true);
  });
  it('returns false when passed random other invalid phone numbers', function () {
    expect(validMobileNumber('004475551&&&23456')).to.equal(false);
    expect(validMobileNumber('-447676111222')).to.equal(false);
    expect(validMobileNumber('09898888643')).to.equal(false);
    expect(validMobileNumber('+449166555432')).to.equal(false);
    expect(validMobileNumber('00448989765493')).to.equal(false);
    expect(validMobileNumber('cats')).to.equal(false);
  });
});

describe('collectPuppies', function () {
  it('returns an array of puppies when passed an array with one dog object', function () {
    const dogs = [
      { breed: 'Dalmation', puppies: ['Spot', 'Spotless'] },
    ];
    const puppies = ['Spot', 'Spotless'];
    expect(collectPuppies(dogs)).to.eql(puppies);
  });
  it('returns an empty array if the dogs have no puppies', function () {
    const dogs = [
      { breed: 'Dalmation', puppies: [] },
      { breed: 'Rottweiler', puppies: [] }
    ];
    const puppies = [];
    expect(collectPuppies(dogs)).to.eql(puppies);
  });
  it('returns an array of all the puppies when passed an array of more than one dog object', function () {
    const dogs = [
      {breed: 'Labrador', puppies: ['Fluffy', 'Doggo', 'Floof'] },
      {breed: 'Rottweiler', puppies: ['Biscuits', 'Mary'] }
    ];
    const puppies = ['Fluffy', 'Doggo', 'Floof', 'Biscuits', 'Mary'];
    expect(collectPuppies(dogs)).to.eql(puppies);
  });
});

describe('generateMatrix', function () {
  it('returns [[null]] when passed 1', function () {
    expect(generateMatrix(1)).to.eql([[null]]);
  });
  it('returns a 2*2 matrix of null entries when passed 2', function () {
    expect(generateMatrix(2)).to.eql([[null, null],[null, null]]);
  });
  it('returns a 3*3 matrix of null entries when passed 3', function () {
    expect(generateMatrix(3)).to.eql([ [null, null, null], [null, null, null], [null, null, null]]);
  });
});

describe('findWrongAnimal', function () {
  it('it returns 0 when passed an array length smaller than 3', function () {
    expect(findWrongWayAnimal(['sheep'])).to.equal(0);
    expect(findWrongWayAnimal(['peehs', 'sheep'])).to.equal(0);
  });
  it('it returns the correct index when the wrong-way animal is in the middle of the array', function () {
    expect(findWrongWayAnimal(['sheep', 'sheep', 'sheep', 'sheep', 'peehs', 'sheep'])).to.equal(4);
  });
  it('it returns the correct index when the wrong-way animal is at start', function () {
    expect(findWrongWayAnimal(['peehs', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep'])).to.equal(0);
  });
  it('it returns the correct index when the wrong-way animal is at the end', function () {
    expect(findWrongWayAnimal(['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'peehs'])).to.equal(5);
  });
  it('it returns the correct index when the wrong-way animal is at any other random position', function () {
    expect(findWrongWayAnimal(['cat', 'cat', 'cat', 'cat', 'cat', 'tac'])).to.equal(5);
    expect(findWrongWayAnimal(['pigeon', 'noegip', 'pigeon', 'pigeon', 'pigeon', 'pigeon'])).to.equal(1);
    expect(findWrongWayAnimal(['tab', 'bat', 'bat', 'bat', 'bat', 'bat'])).to.equal(0);
    expect(findWrongWayAnimal(['gorilla', 'gorilla', 'gorilla', 'gorilla', 'allirog', 'gorilla'])).to.equal(4);
    expect(findWrongWayAnimal(['snail', 'snail', 'lians', 'snail', 'snail', 'snail'])).to.equal(2);
  });
});

describe('countTotalChars', function () {
  it('it returns 0 when none of the target char are in an array of length 1', function () {
    expect(countTotalChars(['mitchell'],'z')).to.equal(0);
  });
  it('it returns the correct total when passed an array of length 1', function () {
    expect(countTotalChars(['l'],'l')).to.equal(1);
    expect(countTotalChars(['ll'],'l')).to.equal(2);
    expect(countTotalChars(['mitchell'],'l')).to.equal(2);
    expect(countTotalChars(['idiomatic'],'i')).to.equal(3);
  });
  it('it returns the correct value when passed an array of length greater than 1', function () {
    expect(countTotalChars(['l','l','l'],'l')).to.equal(3);
    expect(countTotalChars(['l','l','ll'],'l')).to.equal(4);
    expect(countTotalChars(['mitchell','itch'],'i')).to.equal(2);
    expect(countTotalChars(['hello','jonny'],'o')).to.equal(2);
  });
  it('it returns 0 when passed an array strings with none of the target char', function () {
    expect(countTotalChars(['mit','chell','itch'],'z')).to.equal(0);
    expect(countTotalChars(['hello','jonny'],'a')).to.equal(0);
  });
  it('it returns correct value when passed a more complex sentence', function () {
    const sentence = ['i','am','northcoder','in','residence'];
    expect(countTotalChars(sentence,'i')).to.equal(3);
    expect(countTotalChars(sentence,'e')).to.equal(4);
  });
});

describe('largestNumber', function () {
  it('if passed a single-digit number then returns that number', function () {
    expect(largestNumber(9)).to.equal(9);
    expect(largestNumber(0)).to.equal(0);
    expect(largestNumber(1)).to.equal(1);
  });
  it('if passed a 2-digit number then does nothing if they are in descending order', function () {
    expect(largestNumber(43)).to.equal(43);
    expect(largestNumber(81)).to.equal(81);
    expect(largestNumber(21)).to.equal(21);
    expect(largestNumber(20)).to.equal(20);
  });
  it('if passed a 2-digit number then swaps the numbers if they are are in ascending order', function () {
    expect(largestNumber(19)).to.equal(91);
    expect(largestNumber(23)).to.equal(32);
    expect(largestNumber(35)).to.equal(53);
  });
  it('if passed a 3-digit number then returns the correctly ordered number', function () {
    expect(largestNumber(473)).to.equal(743);
    expect(largestNumber(850)).to.equal(850);
    expect(largestNumber(801)).to.equal(810);
    expect(largestNumber(100)).to.equal(100);
    expect(largestNumber(219)).to.equal(921);
    expect(largestNumber(581)).to.equal(851);
  });
  it('returns correctly ordered number for large numbers including those with many trailiing zeros', function () {
    expect(largestNumber(12345)).to.equal(54321);
    expect(largestNumber(12345000)).to.equal(54321000);
    expect(largestNumber(1010100)).to.equal(1110000);
    expect(largestNumber(89382291)).to.equal(99883221);
    expect(largestNumber(8001009100)).to.equal(9811000000);
  });
});
