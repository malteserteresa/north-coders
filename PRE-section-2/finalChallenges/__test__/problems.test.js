const expect = require('chai').expect;
const {
  collectStrings,
  extractLongWords,
  findHappyPeople,
  findPasswordsWithNumbers,
  countPeopleInValencia,
  getTotalLegs,
  countHashtags,
  extractHashtags,
  replaceLettersWithDashes,
  countHashtagsAndMentions,
  findLuckyPerson,
  getEachNameOnce,
  getNamesBeginningWithVowels,
  changeIntonation,
  replaceWhitespaceWithCharacter
} = require('../src/problems');

describe('collectStrings', () => {
  it('it returns an array', function () {
    expect(collectStrings([])).to.be.an('array');
  });
  it('returns ["foo"] when passed [1, 2, 3, 4, "foo"]', function () {
    expect(collectStrings([1, 2, 3, 4, 'foo'])).to.eql(['foo']);
  });
  it('returns ["foo", "bar", "cat"] when passed ["foo", 1, 2, "bar", "cat", true, false]', function () {
    expect(collectStrings(['foo', 1, 2, 'bar', 'cat', true, false])).to.eql(['foo', 'bar', 'cat']);
  });
  it('returns [] when passed [1, 2, 3, 4]', function () {
    expect(collectStrings([1, 2, 3, 4])).to.eql([]);
  });
  it('returns ["true"] when passed [true, true, "true", false]', function () {
    expect(collectStrings([true, true, 'true', false])).to.eql(['true']);
  });
  it('returns ["cat"] when passed [1, 2, 3, 4, "", "cat", false]', function () {
    expect(collectStrings([1, 2, 3, 4, '', 'cat', false])).to.eql(['cat']);
  });
});

describe('extractLongWords', function () {
  it('returns an array', function () {
    expect(extractLongWords('')).to.be.an('array');
  });
  it('returns [] for "hello world"', function () {
    expect(extractLongWords('hello world')).to.eql([]);
  });
  it('returns ["spikiest", "porcupine"] for "the spikiest animal in the world is a porcupine"', function () {
    expect(extractLongWords('the spikiest animal in the world is a porcupine')).to.eql(['spikiest', 'porcupine']);
  });
  it('returns ["longitude", "everything", "effervescent"] for "at this longitude everything is effervescent"', function () {
    expect(extractLongWords('at this longitude everything is effervescent')).to.eql(['longitude', 'everything', 'effervescent']);
  });
  it('returns ["unusual", "occurrence", "central", "Manchester"] for "this is an unusual occurrence for central Manchester"', function () {
    expect(extractLongWords('this is an unusual occurrence for central Manchester')).to.eql(['unusual', 'occurrence', 'central', 'Manchester']);
  });
  it('returns ["establishing", "building", "forever"] for "we are still establishing if this building will stand forever"', function () {
    expect(extractLongWords('we are still establishing if this building will stand forever')).to.eql(['establishing', 'building', 'forever']);
  });
});

describe('findHappyPeople', function () {
  it('returns an array', function () {
    expect(findHappyPeople([])).to.be.an('array');
  });
  it('returns an empty array when nobody is happy', function () {
    expect(findHappyPeople([
      { name: 'John', disposition: 'Dumpy' },
      { name: 'Kev', disposition: 'Grumpy' },
    ])).to.eql([]);
  });
  it('returns all names when everybody is happy', function () {
    expect(findHappyPeople([
      { name: 'Don', disposition: 'Happy' },
      { name: 'Trev', disposition: 'Happy' },
    ])).to.eql(['Don', 'Trev']);
  });
  it('returns the happy names from a mixed bunch', function () {
    expect(findHappyPeople([
      { name: 'Ron', disposition: 'Ambivalent' },
      { name: 'Bev', disposition: 'Happy' },
    ])).to.eql(['Bev']);
    expect(findHappyPeople([
      { name: 'Schlon', disposition: 'Happy' },
      { name: 'Schlev', disposition: 'Neutral' },
      { name: 'Schliebermeister', disposition: 'Quite Unhappy Really' }
    ])).to.eql(['Schlon']);
  });
});

describe('findPasswordsWithNumbers', function () {
  it('returns an array', function () {
    expect(findPasswordsWithNumbers([])).to.be.an('array');
  });
  it('returns the single array item that meets the condition of containing a number, because it is a number', function () {
    expect(findPasswordsWithNumbers(['42'])).to.eql(['42']);
  });
  it('does not return anything if the item does not contain a digit', function () {
    expect(findPasswordsWithNumbers(['forty-two'])).to.eql([]);
  });
  it('returns items that contain some digits', function () {
    expect(findPasswordsWithNumbers(['forty-2', '40-two'])).to.eql(['forty-2', '40-two']);
  });
  it('returns the items that contain digits in a mixed array', function () {
    expect(findPasswordsWithNumbers(['password', 'passw0rd', 'password123', 'PASSWORD'])).to.eql(['passw0rd', 'password123']);
  });
});

describe('countPeopleInValencia', function () {
  it('returns a number', function () {
    expect(typeof countPeopleInValencia([])).to.eql('number');
  });
  it('returns 0 when nobody is from Valencia', function () {
    expect(countPeopleInValencia([
      { name: 'Sandra', lives: { country: 'UK', city: 'Manchester' }, age: 32 },
      { name: 'Sandrella', lives: { country: 'Spain', city: 'Bilbao' }, age: 32.5 }
    ])).to.eql(0);
  });
  it('returns the length of the array when everyone is from Valencia', function () {
    expect(countPeopleInValencia([
      { name: 'Cassandra', lives: { country: 'Spain', city: 'Valencia' }, age: 32.5 },
      { name: 'Cassandrella', lives: { country: 'Spain', city: 'Valencia' }, age: 35.55 }
    ])).to.eql(2);
  });
  it('returns the number of people who are actually from the fair city of Valencia', function () {
    expect(countPeopleInValencia([
      { name: 'Melissandra', lives: { country: 'Spain', city: 'Valencia' }, age: 55.5 },
      { name: 'Melissandrella', lives: { country: 'Spain', city: 'Valencia' }, age: 55.555 },
      { name: 'Keith', lives: { country: 'UK', city: 'Newport Pagnell' }, age: 2 }
    ])).to.eql(2);
    expect(countPeopleInValencia([
      { name: 'Imeldarina', lives: { country: 'Spain', city: 'Valencia' }, age: 15.2 },
      { name: 'Bob', lives: { country: 'Wales', city: 'Abertillery' }, age: 555555555555.555 },
      { name: 'Terry', lives: { country: 'England', city: 'Newport Pagnell' }, age: 0.00000002 }
    ])).to.eql(1);
  });
});

describe('getTotalLegs', function () {
  it('returns a number', function () {
    expect(typeof getTotalLegs([])).to.equal('number');
  });
  it('returns 0 when there are no legs to count', function () {
    expect(getTotalLegs([
      { species: 'Worm', legs: 0 }
    ])).to.equal(0);
  });
  it('returns the number of legs in a one item array', function () {
    expect(getTotalLegs([
      { species: 'Unlucky Spider', legs: 7 }
    ])).to.equal(7);
  });
  it('returns the number of legs in a collection of species', function () {
    expect(getTotalLegs([
      { species: 'Unlucky Spider', legs: 7 },
      { species: 'Unlucky Ant', legs: 5 },
      { species: 'Unlucky Snail', legs: -1 }
    ])).to.equal(11);
    expect(getTotalLegs([
      { species: 'Lucky Dachsund', legs: 5 },
      { species: 'Lucky Rottweiler', legs: 5 },
      { species: 'Lucky Snail', legs: 25 }
    ])).to.equal(35);
  });
});

describe('replaceLettersWithDashes', function () {
  it('returns a string', function () {
    expect(typeof replaceLettersWithDashes('')).to.equal('string');
  });
  it('replaces a single letter with a dash', function () {
    expect(replaceLettersWithDashes('Z')).to.equal('-');
  });
  it('does not replace a non-letter character', function () {
    expect(replaceLettersWithDashes('~')).to.equal('~');
    expect(replaceLettersWithDashes('-')).to.equal('-');        
  });
  it('replaces sentences with dashes as appropriate', function () {
    expect(replaceLettersWithDashes('I like Alan')).to.equal('- ---- ----');
    expect(replaceLettersWithDashes('Don\'t you?')).to.equal('---\'- ---?');
  });
});

describe('countHashtags', function () {
  it('returns a number', function () {
    expect(typeof countHashtags('')).to.equal('number');
  });
  it('finds one hashtag and returns one', function () {
    expect(countHashtags('#yolo')).to.equal(1);
  });
  it('finds returns 0 if there are no hashtags', function () {
    expect(countHashtags('yolo')).to.equal(0);
  });
  it('finds multiple hashtags and returns that number', function () {
    expect(countHashtags('#yolo #bolo #golo')).to.equal(3);
    expect(countHashtags('#boyo #goyo #loyo #zoyo')).to.equal(4);
    expect(countHashtags('"So excited to start at @northcoders on Monday! #learntocode #codingbootcamp"')).to.equal(2);
  });
});

describe('extractHashtags', function () {
  it('returns an array', function () {
    expect(extractHashtags('')).to.be.an('array');
  });
  it('returns a one word hashtag if it has one...', function () {
    expect(extractHashtags('#yolo')).to.eql(['#yolo']);
  });
  it('...and does not return one if it does not have one', function () {
    expect(extractHashtags('@yolo')).to.eql([]);
  });
  it('extracts multiple hashtags and returns them in an array', function () {
    expect(extractHashtags('#yo lo #bo lo #go lo')).to.eql(['#yo', '#bo', '#go']);
    expect(extractHashtags('#boyo #go goyo #loyo yo #z oyo')).to.eql(['#boyo', '#go', '#loyo', '#z']);
    expect(extractHashtags('So excited to start at @northcoders on Monday! #learntocode #codingbootcamp')).to.eql(['#learntocode', '#codingbootcamp']);
  });
});

describe('countHashtagsAndMentions', function () {
  it('returns an object', function () {
    expect(typeof countHashtagsAndMentions('')).to.equal('object');
  });
  it('returns {hashtags: 0, mentions: 0} if it finds none', function () {
    expect(countHashtagsAndMentions('hello this is a tweet guaranteed to get very little engagement')).to.eql({ hashtags: 0, mentions: 0 });
  });
  it('returns {hashtags: 1, mentions: 0} if it finds 1 hashtag and no mentions', function () {
    expect(countHashtagsAndMentions('#yolo')).to.eql({ hashtags: 1, mentions: 0 });
  });
  it('returns {hashtags: 0, mentions: 1} if it finds 0 hashtags and 1 mention', function () {
    expect(countHashtagsAndMentions('@yobo')).to.eql({ hashtags: 0, mentions: 1 });
  });
  it('finds multiple hashtags and mentions and returns that number', function () {
    expect(countHashtagsAndMentions('#yolo @bolo #golo')).to.eql({ hashtags: 2, mentions: 1 });
    expect(countHashtagsAndMentions('@boyo #goyo @loyo #zoyo')).to.eql({ hashtags: 2, mentions: 2 });
    expect(countHashtagsAndMentions('"So excited to start at @northcoders on Monday! #learntocode #codingbootcamp"')).to.eql({ hashtags: 2, mentions: 1 });
  });
});

describe('findLuckyPerson', function () {
  it('finds the lucky person when there is nobody unlucky to find', function () {
    expect(findLuckyPerson(['lucky'])).to.equal('The lucky person is number 1 in the list!');
  });
  it('finds no lucky person when there is no lucky person to find...', function () {
    expect(findLuckyPerson(['unlucky'])).to.equal('There is no lucky person in the list :(');
  });
  it('...even when there are literally LOADS of people to choose from...', function () {
    expect(findLuckyPerson(['unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky'])).to.equal('There is no lucky person in the list :(');
  });
  it('...but it will find him/her if they are there, even if they are hiding at the very end...', function () {
    expect(findLuckyPerson(['unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'lucky'])).to.equal('The lucky person is number 26 in the list!');
  });
  it('...or if he/she is hanging out at the start', function () {
    expect(findLuckyPerson(['unlucky', 'lucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky', 'unlucky'])).to.equal('The lucky person is number 2 in the list!');
  });
});

describe('getEachNameOnce', function () {
  it('returns an object', function () {
    expect(getEachNameOnce([])).to.be.an('array');
  });
  it('returns the name in an array of one name', function () {
    expect(getEachNameOnce(['Lucky Chuck'])).to.eql(['Lucky Chuck']);
  });
  it('returns each name once in an array of two different names', function () {
    expect(getEachNameOnce(['Lucky Chuck', 'Flukey Luke'])).to.eql(['Lucky Chuck', 'Flukey Luke']);
  });
  it('returns one name in an array with the name repeated twice or muliple times', function () {
    expect(getEachNameOnce(['Favourable Mabel', 'Favourable Mabel'])).to.eql(['Favourable Mabel']);
    expect(getEachNameOnce(['Favourable Mabel', 'Favourable Mabel', 'Favourable Mabel', 'Favourable Mabel', 'Favourable Mabel'])).to.eql(['Favourable Mabel']);
  });
  it('returns several names only once when a mix of repeated and unique names are present', function () {
    expect(getEachNameOnce(['Doughy Chloe', 'Needy Edie', 'Needy Edie'])).to.eql(['Doughy Chloe', 'Needy Edie']);
    expect(getEachNameOnce(['Doughy Chloe', 'Doughy Chloe', 'Needy Edie'])).to.eql(['Doughy Chloe', 'Needy Edie']);
  });
});

describe('changeIntonation', function () {
  it('returns a string', function () {
    expect(typeof changeIntonation('')).to.equal('string');
  });
  it('inverts the punctuation mark as described', function () {
    expect(changeIntonation('!')).to.equal('?');
    expect(changeIntonation('?')).to.equal('!');
    expect(changeIntonation('?!')).to.equal('!?');
  });
  it('does not change a sentence without punctuation marks', function () {
    expect(changeIntonation('hey babba boo dooby')).to.equal('hey babba boo dooby');
  });
  it('inverts punctuation in the context of a sentence', function () {
    expect(changeIntonation('Hey! How are you?')).to.equal('Hey? How are you!');
  });
  it('capitalises when passed a true shouting boolean', function () {
    expect(changeIntonation('ssshhhh', true)).to.equal('SSSHHHH');
  });
  it('capitalises when passed a true shouting boolean and inverts punctuation', function () {
    expect(changeIntonation('why? because I said so!', true)).to.equal('WHY! BECAUSE I SAID SO?');
  });
});

describe('getNamesBeginningWithVowels', function () {
  it('it returns a name that begins with a vowel', function () {
    expect(getNamesBeginningWithVowels(['Angelino'])).to.eql(['Angelino']);
  });
  it('it does not return a name that does not start with a vowel', function () {
    expect(getNamesBeginningWithVowels(['ZsaZsa'])).to.eql([]);
  });
  it('it only returns names beginning with a vowel', function () {
    expect(getNamesBeginningWithVowels(['Xavierania', 'Oprahlina'])).to.eql(['Oprahlina']);
    expect(getNamesBeginningWithVowels(['Avonne', 'Brabant', 'Chobra', 'Devaun', 'Echoli'])).to.eql(['Avonne', 'Echoli']);
  });
  it('it even works when that name, contrary to normal practice, begins with a lowercase vowel', function () {
    expect(getNamesBeginningWithVowels(['a\'Delilah', 'b\'Grogo'])).to.eql(['a\'Delilah']);
  });
});

describe('replaceWhitespaceWithCharacter', function () {
  it('returns a string', function () {
    expect(typeof replaceWhitespaceWithCharacter('')).to.equal('string');
  });
  it('replaces a space with a given character', function () {
    expect(replaceWhitespaceWithCharacter('A B C', '&')).to.equal('A&B&C');
  });
  it('replaces multiple spaces', function () {
    expect(replaceWhitespaceWithCharacter('A  B  C', '&')).to.equal('A&B&C');
  });
  it('replaces new lines and tabs', function () {
    expect(replaceWhitespaceWithCharacter('         yo', '*')).to.equal('*yo');
    expect(replaceWhitespaceWithCharacter(`
        
        
        
        
        yo`, '*')).to.equal('*yo');
    expect(replaceWhitespaceWithCharacter(`
        
        
        
        
                                        yo
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                                        `, '*')).to.equal('*yo*');
  });
  it('replaces multiple spaces', function () {
    expect(replaceWhitespaceWithCharacter('A  B  C', '&')).to.equal('A&B&C');
  });
  it('replaces whitespace with the default underscore if no character given', function () {
    expect(replaceWhitespaceWithCharacter('A  B  C')).to.equal('A_B_C');
  });
});