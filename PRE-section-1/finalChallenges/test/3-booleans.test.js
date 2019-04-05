const {expect} = require('chai');
const {
  areValuesEqual,
  areValuesNotEqual,
  isUnderage,
  isFromThe60s,
  isOdd,
  isEvenLength,
  areStringsEqualCaseInsensitive,
  isPersonTallEnough,
} = require('../src/booleans');

describe('booleans', () => {
  describe('areValuesEqual', () => {
    it('returns true if passed values are equal', () => {
      expect(areValuesEqual(1, 1)).to.equal(true);
      expect(areValuesEqual('hello', 'hello')).to.equal(true);
      expect(areValuesEqual(true, true)).to.equal(true);
      const arr = [];
      expect(areValuesEqual(arr, arr)).to.equal(true);
    });
    it('returns false if passed values that are not equal', () => {
      expect(areValuesEqual(2, 1)).to.equal(false);
      expect(areValuesEqual('hello', false)).to.equal(false);
      expect(areValuesEqual(true, 'apple')).to.equal(false);
      expect(areValuesEqual([], [])).to.equal(false);
    });
  });
  
  describe('areValuesNotEqual', () => {
    it('returns true if passed values that are not equal', () => {
      expect(areValuesNotEqual(2, 1)).to.equal(true);
      expect(areValuesNotEqual('hello', false)).to.equal(true);
      expect(areValuesNotEqual(true, 'apple')).to.equal(true);
      expect(areValuesNotEqual([], [])).to.equal(true);
    });
    it('returns false if passed values are equal', () => {
      expect(areValuesNotEqual(1, 1)).to.equal(false);
      expect(areValuesNotEqual('hello', 'hello')).to.equal(false);
      expect(areValuesNotEqual(true, true)).to.equal(false);
      const arr = [];
      expect(areValuesNotEqual(arr, arr)).to.equal(false);
    });
  });
  
  describe('isUnderage', () => {
    it('returns true if passed argument is less than 18', () => {
      expect(isUnderage(17)).to.equal(true);
      expect(isUnderage(1)).to.equal(true);
      expect(isUnderage(-100)).to.equal(true);
    });
    it('returns false if passed argument is greater or equal than 18', () => {
      expect(isUnderage(18)).to.equal(false);
      expect(isUnderage(28)).to.equal(false);
      expect(isUnderage(100)).to.equal(false);
    });
  });
  
  describe('isFromThe60s', () => {
    it('returns true if the passed value is between 1960 and 1969 (inclusive)', () => {
      expect(isFromThe60s(1960)).to.equal(true);
      expect(isFromThe60s(1965)).to.equal(true);
      expect(isFromThe60s(1969)).to.equal(true);
    });
    it('returns false if the passed value is not between 1960 and 1969 (inclusive)', () => {
      expect(isFromThe60s(1959)).to.equal(false);
      expect(isFromThe60s(1860)).to.equal(false);
      expect(isFromThe60s(1970)).to.equal(false);
    });
  });
  
  describe('isOdd', () => {
    it('returns true if the passed value is an odd number', () => {
      expect(isOdd(1)).to.equal(true);
      expect(isOdd(3)).to.equal(true);
      expect(isOdd(13)).to.equal(true);
    });
    it('returns false if the passed value is an even number', () => {
      expect(isOdd(2)).to.equal(false);
      expect(isOdd(4)).to.equal(false);
      expect(isOdd(100)).to.equal(false);
    });
  });
  
  describe('isEvenLength', () => {
    it('returns true if the passed string has an even-numbered length', () => {
      expect(isEvenLength('aabb')).to.equal(true);
      expect(isEvenLength('aabbcc')).to.equal(true);
      expect(isEvenLength('')).to.equal(true);
    });
    it('returns false if the passed string has an odd-numbered length', () => {
      expect(isEvenLength('aabbc')).to.equal(false);
      expect(isEvenLength('aabbccd')).to.equal(false);
      expect(isEvenLength('d')).to.equal(false);
    });
  });
  
  describe('areStringsEqualCaseInsensitive', () => {
    it('returns true if the passed strings are equal (case insensitive)', () => {
      expect(areStringsEqualCaseInsensitive('hello', 'hello')).to.equal(true);
      expect(areStringsEqualCaseInsensitive('hello', 'HELLO')).to.equal(true);
      expect(areStringsEqualCaseInsensitive('bAnAnA', 'BANana')).to.equal(true);
    });
    it('returns false if the passed strings are not equal (case insensitive)', () => {
      expect(areStringsEqualCaseInsensitive('hello', 'hellA')).to.equal(false);
      expect(areStringsEqualCaseInsensitive('apple', 'BANANA')).to.equal(false);
    });
  });
  
  describe('isPersonTallEnough', () => {
    it('returns true if the passed person\'s height is greater or equal than the passed height', () => {
      expect(isPersonTallEnough({height: 186}, 170)).to.equal(true);
    });
    it('returns false if the passed person\'s height is less than the passed height', () => {
      expect(isPersonTallEnough({height: 186}, 190)).to.equal(false);
    });
  });  
});
