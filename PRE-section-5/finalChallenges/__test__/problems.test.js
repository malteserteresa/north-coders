const {expect} = require('chai');
const {
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
} = require('../src/problems');

describe('getEvenNums', function () {
  it('returns [] when passed []', function () {
    expect(getEvenNums([])).to.eql([]);
  });
  it('returns [2, 4, 6] when passed [1, 2, 3, 4, 5, 6]', function () {
    expect(getEvenNums([1, 2, 3, 4, 5, 6])).to.eql([2, 4, 6]);
  });
  it('returns [] when passed [1, 3, 5, 7, 99]', function () {
    expect(getEvenNums([1, 3, 5, 7, 99])).to.eql([]);
  });
  it('returns [2, 2, 2, 2] when passed [1, 2, 2, 5, 2, 87, 2]', function () {
    expect(getEvenNums([1, 2, 2, 5, 2, 87, 2])).to.eql([2, 2, 2, 2]);
  });
  it('returns [4, 4, 4] when passed [4, 4, 4]', function () {
    expect(getEvenNums([4, 4, 4])).to.eql([4, 4, 4]);
  });
  it('returns [88, 62, 10] when passed [1, 3, 88, 99, 62, 10]', function () {
    expect(getEvenNums([1, 3, 88, 99, 62, 10])).to.eql([88, 62, 10]);
  });
});

describe('getBigNums', function () {
  it('returns [] when passed []', function () {
    expect(getBigNums([])).to.eql([]);
  });
  it('returns [101] when passed [100, 101, 99]', function () {
    expect(getBigNums([100, 101, 99])).to.eql([101]);
  });
  it('returns [] when passed [5, 10, 99]', function () {
    expect(getBigNums([5, 10, 99])).to.eql([]);
  });
  it('returns [101, 500, 1000] when passed [101, 500, 1000]', function () {
    expect(getBigNums([101, 500, 1000])).to.eql([101, 500, 1000]);
  });
  it('returns [505, 678, 898] when passed [505, 678, 1, 2, 3, 4, 77, 898]', function () {
    expect(getBigNums([505, 678, 1, 2, 3, 4, 77, 898])).to.eql([505, 678, 898]);
  });
});

describe('getWordLengths', function () {
  it('returns [] when passed ""', function () {
    expect(getWordLengths('')).to.eql([]);
  });
  it('returns [5, 5] when passed "hello world"', function () {
    expect(getWordLengths('hello world')).to.eql([5, 5]);
  });
  it('returns [4, 1, 6, 4, 8, 5] when passed "like a bridge over troubled water"', function () {
    expect(getWordLengths('like a bridge over troubled water')).to.eql([4, 1, 6, 4, 8, 5]);
  });
  it('returns [6, 2, 5, 3] when passed "coding is great fun"', function () {
    expect(getWordLengths('coding is great fun')).to.eql([6, 2, 5, 3]);
  });
  it('returns [9, 3, 5, 4, 5] when passed "pineapple and black bean curry"', function () {
    expect(getWordLengths('pineapple and black bean curry')).to.eql([9, 3, 5, 4, 5]);
  });
  it('returns [5] when passed "woooo"', function () {
    expect(getWordLengths('woooo')).to.eql([5]);
  });
});

describe('getLongNames', function () {
  it('returns [] when passed []', function () {
    expect(getLongNames([])).to.eql([]);
  });
  it('returns ["Charlotte"] when passed ["Zak", "Charlotte"]', function () {
    expect(getLongNames(['Zak', 'Charlotte'])).to.eql(['Charlotte']);
  });
  it('returns [] when passed ["Penelope", "Josh", "Haseeb", "Karl"]', function () {
    expect(getLongNames( ['Penelope', 'Josh', 'Haseeb', 'Karl'])).to.eql([]);
  });
  it('returns ["Elizabeth", "Josephine", "Genevieve"] when passed ["Elizabeth", "Josephine", "Genevieve"]', function () {
    expect(getLongNames(['Elizabeth', 'Josephine', 'Genevieve'])).to.eql(['Elizabeth', 'Josephine', 'Genevieve']);
  });
  it('returns ["Sebastian"] when passed ["Sebastian", "Leopold"]', function () {
    expect(getLongNames(['Sebastian', 'Leopold'])).to.eql(['Sebastian']);
  });
});

describe('getSmiths', function () {
  it('returns [] when passed []', function () {
    expect(getSmiths([])).to.eql([]);
  });
  it('returns ["Harry Smith"] when passed ["Harry Smith", "Charlotte Banks"]', function () {
    expect(getSmiths(['Harry Smith', 'Charlotte Bank'])).to.eql(['Harry Smith']);
  });
  it('returns ["Harry Smith", "Jill Smith"] when passed ["Harry Smith", "Charlotte Banks", "Jill Smith", "Fred Bratnikov"]', function () {
    expect(getSmiths(['Harry Smith', 'Charlotte Bank'])).to.eql(['Harry Smith']);
  });
  it('returns ["Harry Smith"] when passed ["Smithy Jones", "Harry Smith"]', function () {
    expect(getSmiths(['Smithy Jones', 'Harry Smith'])).to.eql(['Harry Smith']);
  });
  it('returns ["John Smith"] when passed ["John Smith", "Chris Smithy"]', function () {
    expect(getSmiths(["John Smith", "Chris Smithy"])).to.eql(["John Smith"]);
  });
  it('returns ["Penelope Smith"] when passed ["Penelope Smith", "Charlotte Smither"]', function () {
    expect(getSmiths(['Penelope Smith', 'Charlotte Smither'])).to.eql(['Penelope Smith']);
  });
});

describe('reverseWords', function () {
  it('returns "" when passed ""', function () {
    expect(reverseWords('')).to.equal('');
  });
  it('returns "olleh" when passed "hello"', function () {
    expect(reverseWords('hello')).to.equal('olleh');
  });
  it('returns "olleh dlrow" when passed "hello"', function () {
    expect(reverseWords('hello world')).to.equal('olleh dlrow');
  });
  it('returns "ew dluohs dliub a esuoheert ereh" when passed "we should build a treehouse here"', function () {
    expect(reverseWords('we should build a treehouse here')).to.equal('ew dluohs dliub a esuoheert ereh');
  });
  it('returns "eht kciuq nworb xof depmuj revo eht yrgna tac" when passed "the quick brown fox jumped over the angry cat"', function () {
    expect(reverseWords('the quick brown fox jumped over the angry cat')).to.equal('eht kciuq nworb xof depmuj revo eht yrgna tac');
  });
});

describe('getMiddleChars', function () {
  it('returns [] when passed ""', function () {
    expect(getMiddleChars('')).to.eql([]);
  });
  it('returns ["l", "r"] when passed "hello world"', function () {
    expect(getMiddleChars('hello world')).to.eql(['l', 'r']);
  });
  it('returns ["l", "dg"] when passed "hello badger"', function () {
    expect(getMiddleChars('hello badger')).to.eql(['l', 'dg']);
  });
  it('returns ["e", "r", "or", "ow", "in", "h", "r", "ha", "ma"] when passed "there are more cows in the world than humans"', function () {
    expect(getMiddleChars('there are more cows in the world than humans')).to.eql(['e', 'r', 'or', 'ow', 'in', 'h', 'r', 'ha', 'ma']);
  });
});

describe('getPugNames', function () {
  it('returns [] when passed []', function () {
    expect(getPugNames([])).to.eql([]);
  });
  it('returns an array of pug names when passed an array of dog objects', function () {
    const dogs = [
      {name: 'Beatrice', breed: 'Lurcher'},
      {name: 'Max', breed: 'Pug'},
      {name: 'Poppy', breed: 'Pug'}
    ];
    expect(getPugNames(dogs)).to.eql(['Max', 'Poppy']);
    const dogs2 = [
      {name: 'Steven', breed: 'Lurcher'},
      {name: 'Daphne', breed: 'Pug'},
      {name: 'Sandy', breed: 'Labrador'},
      {name: 'Mike', breed: 'Pug'},
      {name: 'Spike', breed: 'Pug'}
    ];
    expect(getPugNames(dogs2)).to.eql(['Daphne', 'Mike', 'Spike']);
    const dogs3 = [
      {name: 'Kevin', breed: 'Labrador'},
      {name: 'Patch', breed: 'Rottweiler'},
      {name: 'Miles', breed: 'Lurcher'},
      {name: 'Sandy', breed: 'Pug'},
      {name: 'Spot', breed: 'Pug'},
      {name: 'Josephine', breed: 'Terrier'},
      {name: 'Eric', breed: 'Pug'}
    ];
    expect(getPugNames(dogs3)).to.eql(['Sandy', 'Spot', 'Eric']);
  });
});

describe('getDNAPairs', function () {
  it('returns [] when passed ""', function () {
    expect(getDNAPairs('')).to.eql([]);
  });
  it('returns ["GC"] when passed "G"', function () {
    expect(getDNAPairs('G')).to.eql(['GC']);
  });
  it('returns ["GC", "GC", "CG"] when passed "GGC"', function () {
    expect(getDNAPairs('GGC')).to.eql(['GC', 'GC', 'CG']);
  });
  it('returns ["GC", "TA", "CG", "AT"] when passed "GTCA"', function () {
    expect(getDNAPairs('GTCA')).to.eql(['GC', 'TA', 'CG', 'AT']);
  });
  it('returns ["GC", "AT", "TA"] when passed "gat"', function () {
    expect(getDNAPairs('gat')).to.eql(['GC', 'AT', 'TA']);
  });
  it('returns ["GC"] when passed "PGYYYHVB"', function () {
    expect(getDNAPairs('PGYYYHVB')).to.eql(['GC']);
  });
  it('returns ["GC"] when passed "bbiugp"', function () {
    expect(getDNAPairs('bbiugp')).to.eql(['GC']);
  });
});

describe('getFactorials', function () {
  it('returns [] when passed []', function () {
    expect(getFactorials([])).to.eql([]);
  });
  it('returns [6] when passed [3]', function () {
    expect(getFactorials([3])).to.eql([6]);
  });
  it('returns [6, 24, 120] when passed [3]', function () {
    expect(getFactorials([3, 4, 5])).to.eql([6, 24, 120]);
  });
  it('returns [6, 40320, 362880, 3628800] when passed [3, 8, 9, 10]', function () {
    expect(getFactorials([3, 8, 9, 10])).to.eql([6, 40320, 362880, 3628800]);
  });
  it('returns [1, 2, 24, 120, 120] when passed [1, 2, 4, 5, 5]', function () {
    expect(getFactorials([1, 2, 4, 5, 5])).to.eql([1, 2, 24, 120, 120]);
  });
});

describe('getMiddleNames', function () {
  it('returns [] when passed []', function () {
    expect(getMiddleNames([])).to.eql([]);
  });
  it('returns ["Hannah"] when passed ["Caroline Hannah Jamieson"]', function () {
    expect(getMiddleNames(['Caroline Hannah Jamieson'])).to.eql(['Hannah']);
  });
  it('returns ["Reuben", "Keith", "Clara"] when passed ["Steven Reuben Williams", "Carl Keith Morelli", "Sissel Clara Blomqvist"]', function () {
    expect(getMiddleNames(['Steven Reuben Williams', 'Carl Keith Morelli', 'Sissel Clara Blomqvist'])).to.eql(['Reuben', 'Keith', 'Clara']);
  });
  it('returns ["Reuben", null, "Clara"] when passed ["Steven Reuben Williams", "Carl Morelli", "Sissel Clara Blomqvist"]', function () {
    expect(getMiddleNames(['Steven Reuben Williams', 'Carl Morelli', 'Sissel Clara Blomqvist'])).to.eql(['Reuben', null, 'Clara']);
  });
  it('returns ["Reuben", null, null] when passed ["Steven Reuben Williams", "Carl Morelli", "Sissel"]', function () {
    expect(getMiddleNames(['Steven Reuben Williams', 'Carl Morelli', 'Sissel'])).to.eql(['Reuben', null, null]);
  });
});

describe('findPalindromes', function () {
  it('returns [] when passed []', function () {
    expect(findPalindromes([])).to.eql([]);
  });
  it('returns ["racecar"] when passed ["racecar"]', function () {
    expect(findPalindromes(['racecar'])).to.eql(['racecar']);
  });
  it('returns ["racecar"] when passed ["pineapple", "racecar", "pony"]', function () {
    expect(findPalindromes(['pineapple', 'racecar', 'pony'])).to.eql(['racecar']);
  });
  it('returns [] when passed ["pineapple", "watermelon", "pony"]', function () {
    expect(findPalindromes(['pineapple', 'watermelon', 'pony'])).to.eql([]);
  });
  it('returns ["foof", "racecar"] when passed ["foof", "watermelon", "racecar", "gremlin"]', function () {
    expect(findPalindromes(['foof', 'watermelon', 'racecar', 'gremlin'])).to.eql(['foof', 'racecar']);
  });
});