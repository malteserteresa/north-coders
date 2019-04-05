const { expect } = require('chai');
const {
  getYearOfBirth,
  isOver40,
  getUserAge,
  createProduct,
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

} = require('../src/objects');

describe('getYearOfBirth', function () {
  it('returns the year of birth of a user with a yearOfBirth property', function () {
    expect(getYearOfBirth({ yearOfBirth: 1950 })).to.equal(1950);
  });
});

describe('isOver40', function () {
  it('returns true if the user is over 40', function () {
    expect(isOver40({age: 55})).to.be.true;
    expect(isOver40({age: 41})).to.be.true;
    expect(isOver40({age: 107})).to.be.true;
    expect(isOver40({age: 999})).to.be.true;
  });
  it('returns false if the user is 40 or younger', function () {
    expect(isOver40({age: 40})).to.be.false;
    expect(isOver40({age: 4})).to.be.false;
    expect(isOver40({age: 10})).to.be.false;
    expect(isOver40({age: 29})).to.be.false;
  });
});

describe('getUserAge', () => {
  it('returns the age of the passed user based on its yearOfBirth property', () => {
    const currentYear = new Date().getFullYear();
    const user = {
      yearOfBirth: 1989
    };
    expect(getUserAge(user)).to.equal(currentYear - 1989);
  });
});

describe('createProduct', function () {
  it('should create the expected product', function () {
    expect(createProduct()).to.haveOwnProperty('type');
    expect(createProduct()).to.haveOwnProperty('price');
    expect(createProduct().price).to.be.a('number');
    expect(createProduct().type).to.be.a('string');
  });
});

describe('addPriceToProduct', () => {
  it('adds a price property to the passed product set to the passed price', () => {
    const product = {
      type: 'Tofu slices'
    };
    let newProduct = addPriceToProduct(product, 1.25);
    expect(newProduct).to.eql({ type: 'Tofu slices', price: 1.25});
    newProduct = addPriceToProduct(product, 1.35);
    expect(newProduct).to.eql({ type: 'Tofu slices', price: 1.35});
  });
});

describe('createNorthcoder', () => {
  it('returns an object with a \'name\' property set to the passed name argument', () => {
    const northcoder = createNorthcoder('Mauro');
    expect(northcoder).to.haveOwnProperty('name');
    expect(northcoder.name).to.equal('Mauro');
  });
  it('returns an object with an \'age\' property set to the user\'s age in the year 2017 according to the passed yearOfBirth argument', () => {
    const northcoder = createNorthcoder('Mauro', 1989);
    expect(northcoder).to.haveOwnProperty('age');
    expect(northcoder.age).to.equal(28);
  });
  it('returns an object with a \'language\' property set to JavaScript', () => {
    const northcoder = createNorthcoder('Mauro', 1989);
    expect(northcoder).to.haveOwnProperty('language');
    expect(northcoder.language).to.equal('JavaScript');
  });
});

describe('createUserString', () => {
  it('returns a string containing "name : <user\'s name>"', () => {
    const mitchObj = { name: 'Mitch', age: 27, language: 'Javascript' };
    const actual = createUserString(mitchObj);
    expect(actual.includes('name: Mitch')).to.be.true;
  });
  it('returns a string containing "age : <user\'s age>"', () => {
    const mitchObj = { name: 'Mitch', age: 27, language: 'Javascript' };
    const actual = createUserString(mitchObj);
    expect(actual.includes('age: 27')).to.be.true;
  });
  it('returns a string containing "language : <user\'s language>"', () => {
    const mitchObj = { name: 'Mitch', age: 27, language: 'Javascript' };
    const actual = createUserString(mitchObj);
    expect(actual.includes('language: Javascript')).to.be.true;
  });
  it('returns a whole string with all of the user\'s details', () => {
    const mitchObj = { name: 'Mitch', age: 27, language: 'Javascript' };
    const actual = createUserString(mitchObj);
    expect(actual.includes('name: Mitch, age: 27, language: Javascript')).to.be.true;
  });
});

describe('getAlbumProperties', () => {
  it('returns an array of the album\'s keys', () => {
    const input = { title: 'Pablo Honey', yearReleased: 1993, producer: 'Nigel Godrich' };
    const actual = getAlbumProperties(input);
    const expected = ['title', 'yearReleased', 'producer'];
    expect(actual).to.eql(expected);
  });
});

describe('getAlbumValues', () => {
  it('returns an array of the album\'s values', () => {
    const input = { title: 'Pablo Honey', yearReleased: 1993, producer: 'Nigel Godrich' };
    const actual = getAlbumValues(input);
    const expected = ['Pablo Honey', 1993, 'Nigel Godrich'];
    expect(actual).to.eql(expected);
  });
});

describe('countKeys', function () {
  it('counts the keys on an object', function () {
    expect(countKeys({})).to.equal(0);
    expect(countKeys({ a: 6 })).to.equal(1);
    expect(countKeys({ a: 1, b: 2 })).to.equal(2);
    expect(countKeys({ a: 1, b: 2, c: 4, d: 7 })).to.equal(4);
  });
});

describe('addBandName', () => {
  it('adds a "bandName" property with a value of "Rad iohead" to a single object in an array', () => {
    const input = [
      {
        title: 'Pablo Honey',
        yearReleased: 1993,
        producer: 'Nigel Godrich'
      }];
    const actual = addBandName(input);
    const expected = [
      {
        bandName: 'Radiohead',
        title: 'Pablo Honey',
        yearReleased: 1993,
        producer: 'Nigel Godrich'
      }];
    expect(actual).to.eql(expected);
  });
  it('adds a "bandName" property with a value of "Radiohead" to several objects in an array', () => {
    const input = [
      {
        title: 'Pablo Honey',
        yearReleased: 1993,
        producer: 'Nigel Godrich',
      },
      {
        title: 'The Bends',
        yearReleased: 1995,
        producer: 'Nigel Godrich'
      }];
    const actual = addBandName(input);
    const expected = [
      {
        title: 'Pablo Honey',
        bandName: 'Radiohead',
        yearReleased: 1993,
        producer: 'Nigel Godrich',
      },
      {
        title: 'The Bends',
        bandName: 'Radiohead',
        yearReleased: 1995,
        producer: 'Nigel Godrich'
      }];
    expect(actual).to.eql(expected);
  });
});

describe('deletePassword', function () {
  it('deletes the password key/value pair from a user object', function () {
    expect(deletePassword({ name: 'foo', password: 'cat' })).to.eql(
      { name: 'foo' }
    );
    expect(deletePassword({ name: 'bar', password: 'secretsecret' })).to.eql(
      { name: 'bar' }
    );
    expect(deletePassword({ name: 'claire', username: 'claire1988', password: 'pineapple' })).to.eql(
      { name: 'claire', username: 'claire1988' }
    );
  });
});

describe('deleteManyPasswords', function () {
  it('deletes the password key value pair on every object in an array of createUserString', function () {
    expect(deleteManyPasswords([
      { name: 'Barry', password: 'ilovetea' },
      { name: 'Sandeep', password: 'ilovecoffee' },
      { name: 'Kavita', password: 'ilovepie' }
    ])).to.eql([
      {name: 'Barry'},
      {name: 'Sandeep'},
      {name: 'Kavita'}
    ]);
    expect(deleteManyPasswords([
      { name: 'Carmen', password: 'ilovetea' },
      { name: 'Lisa', password: 'ilovepie' }
    ])).to.eql([
      {name: 'Carmen'},
      {name: 'Lisa'}
    ]);
  });
});

describe('countTheObjects', function () {
  it('returns the count of objects inside an array of random data types', function () {
    expect(countTheObjects([])).to.equal(0);
    expect(countTheObjects([1, 3, 4, 5])).to.equal(0);
    expect(countTheObjects([1, 3, 4, 5, 'foo'])).to.equal(0);
    expect(countTheObjects([1, 3, 4, 5, {}, {}, {}, 'foo'])).to.equal(3);
    expect(countTheObjects([1, [], 3, 4, 5, {}, {}, {}, 'foo'])).to.equal(3);
    expect(countTheObjects([1, [], null, 3, 4, 5, {}, {}, {}, 'foo'])).to.equal(3);
    expect(countTheObjects([1, {}, [], null, null, 'foo', 3, 4, 5, {}, {}, {}, 'foo'])).to.equal(4);
  });
});
