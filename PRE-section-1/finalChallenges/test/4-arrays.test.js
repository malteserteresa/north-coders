const {expect} = require('chai');
const {
  getLastItem,
  addAmountToAll,
  getEvenNumbers,
  getItemsLongerThan,
  getSandwichFilling,
  getFirstItems,
  getLastItems,
  removeItem,
  mergeArrays,
  flattenArray,
  isItemPastHalf,
  isItemOmnipresent,
} = require('../src/arrays');

describe('arrays', () => {
  describe('getLastItem', () => {
    it('returns the last item of an array with many items', () => {
      expect(getLastItem([1, 2, 3])).to.equal(3);
      expect(getLastItem([1, 2, 3, 5, 88, 1999])).to.equal(1999);
      expect(getLastItem([1, 2, 3, 'hello', false, [1, 2, 3], null])).to.equal(null);
    });
    it('returns the only item of an array of length 1', () => {
      expect(getLastItem([1])).to.equal(1);
      expect(getLastItem(['hello'])).to.equal('hello');
      expect(getLastItem([true])).to.equal(true);
    });
    it('returns undefined for an empty array', () => {
      expect(getLastItem([])).to.equal(undefined);
    });
    it('it does not modify the original array', () => {
      const arr = [1, 2, 3];
      getLastItem(arr);
      expect(arr).to.eql([1, 2, 3]);
    });
  });
  
  describe('addAmountToAll', () => {
    it('adds the passed amount to each item of the passed array', () => {
      expect(addAmountToAll([1, 2, 3], 3)).to.eql([4, 5, 6]);
      expect(addAmountToAll([4, 5, 6], -4)).to.eql([0, 1, 2]);
      expect(addAmountToAll([0, 1, 2], 0.5)).to.eql([0.5, 1.5, 2.5]);
    });
  });
  
  describe('getEvenNumbers', () => {
    it('returns an array of all even numbers in the passed array', () => {
      expect(getEvenNumbers([1, 2, 3])).to.eql([2]);
      expect(getEvenNumbers([2, 4, 6])).to.eql([2, 4, 6]);
      expect(getEvenNumbers([1, 3, 5])).to.eql([]);
    });
  });
  
  describe('getItemsLongerThan', () => {
    it('returns an array of items in the passed array that are longer than the passed length', () => {
      const array = ['a', 'bb', 'ccc', 'dddd'];
      expect(getItemsLongerThan(array, 0)).to.eql(array);
      expect(getItemsLongerThan(array, 1)).to.eql(['bb', 'ccc', 'dddd']);
      expect(getItemsLongerThan(array, 2)).to.eql(['ccc', 'dddd']);
      expect(getItemsLongerThan(array, 10)).to.eql([]);
    });
  });
  
  describe('getFirstItems', () => {
    it('returns an array with the n first items of the passed array', () => {
      const array = ['a', 2, true, 4, null];
      expect(getFirstItems(array, 1)).to.eql(['a']);
      expect(getFirstItems(array, 3)).to.eql(['a', 2, true]);
      expect(getFirstItems(array, 5)).to.eql(array);
    });
  });
  
  describe('getLastItems', () => {
    it('returns an array with the n last items of the passed array', () => {
      const array = ['a', 2, true, 4, null];
      expect(getLastItems(array, 1)).to.eql([null]);
      expect(getLastItems(array, 3)).to.eql([true, 4, null]);
      expect(getLastItems(array, 5)).to.eql(array);
    });
  });

  describe('getSandwichFilling', () => {
    it('returns an array with all the items of the passed array except the first and last ones', () => { 
      const array = [1, 2, 3];
      expect(getSandwichFilling(array)).to.eql([2]);
      const burger = ['bread', 'tomato', 'lettuce', 'cheese', 'patty', 'bread'];
      expect(getSandwichFilling(burger)).to.eql(['tomato', 'lettuce', 'cheese', 'patty']);
      const sadSandwich = ['bread', 'bread'];
      expect(getSandwichFilling(sadSandwich)).to.eql([]);
    });
  });

  describe('removeItem', () => {
    it('returns a new array without the item in the passed position', () => {
      expect(removeItem([1], 0)).to.eql([]);
      expect(removeItem([1, 2, 3], 1)).to.eql([1, 3]);
    });
    it('doesn\'t mutate the passed array, i.e. it returns a new array, leaving the original one unmodified', () => {
      const original = [1, 2, 3];
      const modified = removeItem(original, 1);
      expect(original).to.not.equal(modified);
      expect(original).to.eql([1, 2, 3]);
    });
    it('ignores arguments out of the length of the array', () => {
      expect(removeItem([1, 2, 3], 8)).to.eql([1, 2, 3]);
    });
  });

  describe('mergeArrays', () => {
    it('returns a new array with all the elements of the two passed arrays', () => {
      let a, b;
      a = [1, 2, 3], b = [4, 5, 6];
      expect(mergeArrays(a, b)).to.eql([1, 2, 3, 4, 5, 6]);
      a = [], b = [4, 5, 6];
      expect(mergeArrays(a, b)).to.eql([4, 5, 6]);
      a = [1, 2, 3], b = [];
      expect(mergeArrays(a, b)).to.eql([1, 2, 3]);
    });
    it('does not mutate the passed arrays, i.e. returns a new array, leaving the original arrays untouched', () => {
      const a = [1, 2, 3], b = [4, 5, 6];
      const merged = mergeArrays(a, b);
      expect(merged).to.not.equal(a);
      expect(merged).to.not.equal(b);
      expect(a).to.eql([1, 2, 3]);
      expect(b).to.eql([4, 5, 6]);
    });
  });

  describe('flattenArray', () => {
    it('returns a flat array with all the elements of the nested arrays in their original order', () => {
      let arrayOfArrays, expected;
      arrayOfArrays = [
        [1, 2],
        [],
        [3],
        ['hello', true]
      ];
      expected = [1, 2, 3, 'hello', true];
      expect(flattenArray(arrayOfArrays)).to.eql(expected);
      
      arrayOfArrays = [
        [1],
        [2],
        [[3, 4]]
      ];
      expected = [1, 2, [3, 4]];
      expect(flattenArray(arrayOfArrays)).to.eql(expected);
    });
    it('does not mutate the passed array, i.e. returns a new array, leaving the original untouched', () => {
      const original = [
        [1, 2],
        [],
        [3, 4]
      ];
      const flat = flattenArray(original);
      expect(original).to.not.equal(flat);
      expect(original).to.eql([
        [1, 2], [], [3, 4]
      ]);
    });

  });

  describe('isItemPastHalf', () => {
    it('returns true if the passed value is in the second half of the passed array', () => {
      let array;
      array = [1, 2, 3];
      expect(isItemPastHalf(array, 3)).to.be.true;
      array = [1, 2, 3, 4];
      expect(isItemPastHalf(array, 3)).to.be.true;
    });
    it('returns false if the passed value is in the first half of the passed array', () => {
      let array;
      array = [1, 2, 3];
      expect(isItemPastHalf(array, 2)).to.be.false;
      array = [1, 2, 3, 4];
      expect(isItemPastHalf(array, 2)).to.be.false;
    });
    it('returns false if the passed value is not in the passed array', () => {
      let array;
      array = [1, 2, 3];
      expect(isItemPastHalf(array, 4)).to.be.false;
    });
  });

  describe('isItemOmnipresent', () => {
    it('returns true if the passed value is present in all the arrays inside the passed array', () => {
      let arrayOfArrays = [
        [9, 2, 3],
        [4, 5, 9],
        [-2, 9, -1]
      ];
      expect(isItemOmnipresent(arrayOfArrays, 9)).to.be.true;
    });
    it('returns false if the passed value is not present in at least one array inside the passed array', () => {
      let arrayOfArrays = [
        [9, 2, 3],
        [4, 5, 9],
        [-2, 1, -1]
      ];
      expect(isItemOmnipresent(arrayOfArrays, 9)).to.be.false;
      arrayOfArrays = [
        [6, 2, 3],
        [4, 5, 8],
        [-2, 9, -1]
      ];
      expect(isItemOmnipresent(arrayOfArrays, 9)).to.be.false;
      arrayOfArrays = [
        [4, 2, 3],
        [4, 5, 9],
        [-2, 9, -1]
      ];
      expect(isItemOmnipresent(arrayOfArrays, 9)).to.be.false;
    });
  });
});

