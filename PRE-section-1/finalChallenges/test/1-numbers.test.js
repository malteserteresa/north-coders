const {expect} = require('chai');
const {
  add, sub, mul, div, mod, 
  square, 
  squareRoot, 
  raiseToPower,
  calculateAge,
  formatMoney,
  calculateCircleArea,
  addVAT,
  convertMilesToKilometers,
  calculateFullTurns,
} = require('../src/numbers');

describe('numbers', () => {
  describe('Basic Maths', () => {
    it('add returns a plus b', () => {
      expect(add(2, 3)).to.equal(5);
      expect(add(-5, 6)).to.equal(1);
    });
    
    it('sub returns a minus b', () => {
      expect(sub(2, 3)).to.equal(-1);
      expect(sub(10, 5)).to.equal(5);
    });
    
    it('mul returns a times b', () => {
      expect(mul(2, 3)).to.equal(6);
      expect(mul(-2, 8)).to.equal(-16);
    });
    
    it('div returns a divided by b', () => {
      expect(div(4, 2)).to.equal(2);
      expect(div(7, 2)).to.equal(3.5);
    });
    
    it('mod returns the remainder of dividing a by b', () => {
      expect(mod(4, 2)).to.equal(0);
      expect(mod(7, 2)).to.equal(1);
    });
  
    it('square returns n squared', () => {
      expect(square(2)).to.equal(4);
      expect(square(5)).to.equal(25);
    });
  
    it('squareRoot returns the square root of n', () => {
      expect(squareRoot(4)).to.equal(2);
      expect(squareRoot(16)).to.equal(4);
    });
    
    it('raiseToPower returns m to the nth power§', () => {
      expect(raiseToPower(2, 3)).to.equal(8);
      expect(raiseToPower(3, 4)).to.equal(81);
      expect(raiseToPower(8, 0)).to.equal(1);
    });
  });
  
  describe('calculateAge', () => {
    it('returns the age of a person based on their year of birth', () => {
      const currYear = new Date().getFullYear();
      const yearOfBirth = 1989;
      const expectedAge = currYear - yearOfBirth;
      expect(calculateAge(yearOfBirth)).to.equal(expectedAge);
    });
  });
  
  describe('formatMoney', () => {
    it('adds zeroes up to 2 decimal numbers', () => {
      expect(formatMoney(1)).to.equal('£1.00');
    });
    it('rounds to 2 decimal numbers', () => {
      expect(formatMoney(3.457)).to.equal('£3.46');
    });
  });
  
  describe('calculateCircleArea', () => {
    it('returns the area of a circle', () => {
      expect(calculateCircleArea(1)).to.equal(3.142);
      expect(calculateCircleArea(2)).to.equal(12.566);
      expect(calculateCircleArea(3)).to.equal(28.274);
    });
  });
  
  describe('addVAT', () => {
    it('adds 20% on top of the passed amount', () => {
      expect(addVAT(100)).to.equal(120);
      expect(addVAT(24.90)).to.equal(29.88);
    });
  });
  
  describe('convertMilesToKilometers', () => {
    it('converts miles to kilometers', () => {
      expect(convertMilesToKilometers(5)).to.equal(8.0);
      expect(convertMilesToKilometers(30)).to.equal(48.3);
      expect(convertMilesToKilometers(60)).to.equal(96.5);
    });
  });
  
  describe('calculateFullTurns', () => {
    it('returns the amount of full turns you can make with the passed degrees', () => {
      expect(calculateFullTurns(90)).to.equal(0);
      expect(calculateFullTurns(363)).to.equal(1);
      expect(calculateFullTurns(800)).to.equal(2);
      expect(calculateFullTurns(2000)).to.equal(5);
    });
  });  
});

