const {expect} = require('chai');
const {
  getLength,
  SHOUTstring,
  putNamesTogether,
  capitaliseString,
  dontShoutSentence,
  getLastChar,
  getMiddle,
  getLastWord,
  hyphenateWords,
  convertToCamelCase,
  
} = require('../src/strings');

describe('getLength', () => {
  it('returns the length of the passed string', () => {
    expect(getLength('')).to.equal(0);
    expect(getLength('hello')).to.equal(5);
    expect(getLength('hello northcoders')).to.equal(17);
  });
});

describe('SHOUTstring', () => {
  it('returns the passed string IN ALL CAPPS', () => {
    expect(SHOUTstring('hello')).to.equal('HELLO');
    expect(SHOUTstring('hello northcoders')).to.equal('HELLO NORTHCODERS');
  });
});

describe('putNamesTogether', () => {
  it('returns the passed names separated by a space', () => {
    expect(putNamesTogether('Kevin', 'Durant')).to.equal('Kevin Durant');
  });
});

describe('capitaliseString', () => {
  it('returns the passed string with the first letter capitalised', () => {
    expect(capitaliseString('hello')).to.equal('Hello');
    expect(capitaliseString('hello northcoders')).to.equal('Hello northcoders');
  });
});

describe('dontShoutSentence', () => {
  it('returns the passed sentence in lower case, keeping the first char capitalised', () => {
    expect(dontShoutSentence('HELLO NORTHCODERS!!!')).to.equal('Hello northcoders!!!');
  });
});

describe('getLastChar', () => {
  it('returns the last character of the passed string', () => {
    expect(getLastChar('hello')).to.equal('o');
    expect(getLastChar('hello northcoders!')).to.equal('!');
  });
});

describe('getMiddle', () => {
  it('returns the middle character of an odd length string', () => {  
    expect(getMiddle('abcde')).to.equal('c');
  });
  it('returns the middle two chracters of an even length string', () => {
    expect(getMiddle('aabbcc')).to.equal('bb');
  });
});

describe('getLastWord', () => {
  it('returns the last word of the passed sentence', () => {
    expect(getLastWord('hello')).to.equal('hello');
    expect(getLastWord('hello northcoders')).to.equal('northcoders');
    expect(getLastWord('hello northcoders, what is going on')).to.equal('on');
  });
});

describe('hyphenateWords', () => {
  it('returns the passed string with spaces replaced by hyphens', () => {
    expect(hyphenateWords('hello')).to.equal('hello');
    expect(hyphenateWords('hello northcoders')).to.equal('hello-northcoders');
    expect(hyphenateWords('what is going on')).to.equal('what-is-going-on');
  });
});

describe('convertToCamelCase', () => {
  it('returns the passed string convertedToCamelCase', () => {
    expect(convertToCamelCase('hello')).to.equal('hello');
    expect(convertToCamelCase('hello northcoders')).to.equal('helloNorthcoders');
    expect(convertToCamelCase('what is going on')).to.equal('whatIsGoingOn');
  });
});
