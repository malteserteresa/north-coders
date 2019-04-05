// Fill in the body of the functions following the instructions.
// Important! Don't change the name of the functions.

function collectStrings(arr) {
   /*
    This function receives an array 
    [
      "", "me", 1, false
    ]
  
    The function should return an array of string only 
    */
		return arr.filter(function(x) {return typeof x === "string" && x !== ""});
}

function extractLongWords(sentence) {
  const tokenized_sentence = sentence.split(" ")

  return tokenized_sentence.filter(function(x) {return x.length >= 7});

}

function findHappyPeople(people) {
  /*
    This function receives an array of people in the format:
    [
      {name: 'John', disposition: 'Happy' },
      {name: 'Kev', disposition: 'Grumpy' },
    ]
  
    The function should return an array of names of people who have a Happy disposition
    */
   function isHappy(person) { if (person.disposition === "Happy") { return person.name } };
   const happyPeople = people.filter(isHappy);
   return happyPeople.map(person => person.name);
   
}

function findPasswordsWithNumbers(passwords) {
  /* This function receives an array of passwords, such as the ones below

    ['password', 'passw0rd', 'password123', 'PASSWORD']

    The function should return an array of the passwords that contain a digit (0 to 9).
    */
   function isDigit(password){if (password.match(/[0-9]/g)) { return password; }}
  
   return  passwords.filter(isDigit);

}

function countPeopleInValencia(people) {
  /* This function receives an array of people objects in for format:
    [ 
      { name: 'Sandra', lives: { country: 'UK', city: 'Manchester' }, age: 32 }
    ]
  
    The function should return the count of people who live in the city of Valencia
    */
   let count = 0;
   
   people.forEach(function(person){ if (person['lives']['city'] === "Valencia") { return count++; }})

   return count;

}

function getTotalLegs(animals) {
  /*
    This function receives an array of animal objects in the format: 
    [
      {species: 'Pigeon', legs: 2 }
    ]
  
    The function should return a count of the total legs belonging to all the animals
    */

   let numberLegs = 0;

   animals.forEach(function(animal){ return numberLegs+= animal.legs; })

   return numberLegs;
}

function replaceLettersWithDashes(str) {
  /* This function will receive a string with a mix of characters. It should return the string with all letters replaced by dashes ('-').

    For example 'I like Alan' should return '- ---- ----', and 'Easy as 1, 2, 3' should return '---- -- 1, 2, 3'.

    */
   split = str.split("");
   for(i = 0; i < split.length; i++){ if(split[i].match(/[a-zA-Z]/g)){ split[i] = '-'; }};
   return split.join("");
    
}

function countHashtags(str) {
  /* This function receives a string that will contain a number of mentions and hashtags as on Twitter.
    
    E.g. "So excited to start at @northcoders on Monday! #learntocode #codingbootcamp"
  
    The function should return the number of hashtags in the string
    */
   matches = str.match(/[#]/g);
   if(matches == null) {return 0;} 
   else {return matches.length;} 
}

function extractHashtags(str) {
  /* This function receives a string that will contain a number of mentions and hashtags as on Twitter.
    E.g. "So excited to start at @northcoders on Monday! #learntocode #codingbootcamp"
  
    The function should return an array of hashtags used the string
    */
   matches = str.match(/#(\w+)/g);
   if(matches == null) {return [];} 
   else {return matches;} 
  
}

function countHashtagsAndMentions(str) {
  /* This function receives a string that will contain a number of mentions and hashtags as on Twitter.
    
    E.g. "So excited to start at @northcoders on Monday! #learntocode #codingbootcamp"
  
     The function should return an object describing the number of hashtags and mentions found:
     { hashtags: 2, mentions: 1 }
     */
    function returnMatches(matches){ if(matches === null){ return 0; } else{ return matches.length; }};

    return { hashtags : returnMatches(str.match(/#(\w+)/g)), mentions: returnMatches(str.match(/@(\w+)/g)) }
}

function findLuckyPerson(arr) {
  /*
    This function will receive an array in the format
    ['unlucky', 'unlucky', 'unlucky', 'unlucky', 'lucky', 'unlucky']
  
    The function should return a string in the format:
    "The lucky person is number 5 in the list!"
    or
    "There is no lucky person in the list :("
    */
    luckyPerson = false;
    position = null;
    for(i = 0; i < arr.length; i++) {
      if( arr[i] === "lucky") {
        luckyPerson = true;
        position = i;
      }
    }
    if(luckyPerson) {return `The lucky person is number ${position+1} in the list!`;} else { return "There is no lucky person in the list :("; }
}

function getEachNameOnce(names) {
  /*
    This function will receive an array of names and should return an array with any duplicate names removed
  
    e.g. ['sam', 'sam', 'francine'] returns ['sam', 'francine']
    */
   s = new Set(names);

   return Array.from(s) ;
}


function changeIntonation(str, isShouting) {
  /*
    This function will receive a sentence string and a true/false 'shouting' argument
    
    It should return the string, replacing any question marks with exclamation marks and vice versa.

    If 'shouting' is true, all letters should be in uppercase

    e.g. 
    changeIntonation('Me! No?', false) should return 'Me? No!'
    changeIntonation('What?', true) should return 'WHAT!'
    
    For added challenge, DO NOT USE A FOR LOOP!
    */
   sentence = [];
   punctuation = { "?" : "!", "!": "?"};

   for(i = 0; i < str.length; i++ ) {
     nWord = []; 
     word = str[i].split("");

     for(j = 0; j < word.length; j++) { 
      if(word[j] === "!" || word[j] === "?") { nWord.push(punctuation[word[j]]); } else { nWord.push(word[j]); } 
      }
      
      joined = nWord.join("");
      if(isShouting) {
        sentence.push(joined.toUpperCase());
      } else {
        sentence.push(joined);
      }
  
    };

    return sentence.join("");

   
}

function getNamesBeginningWithVowels (names) {
  /* This function will receive an array of names, and should return just the names that begin a vowel.

    */
   return names.filter(function(name){ return name.match(/\b[AEIOUaeiou][^\s]*?/g);}); // \b word boundary [first letter vowel][rest of word not other character]
}

function replaceWhitespaceWithCharacter (str, character) {
  
  /* This function receives a string. It also takes an optional character, which should default to an undrscore ('_') when not given.
    
    It should return the same string, but with all groups of whitespace (spaces, tabs and line breaks) replaced by a single instance of the character in the second argument.

    replaceWhitespaceWithCharacter('Hi Mum!', '•')
        returns 'Hi•Mum!'

    replaceWhitespaceWithCharacter('   do   not   
                enter               ')
        returns '_do_not_enter_'
    */

    var character = (!character) ? "_" : character;
    str = str.replace(/\s/g, "character");
    return str.replace(/([character]+)/g, character);
   
}

// ---------- Do not change the code below this line --------------

module.exports = {
  collectStrings,
  extractLongWords,
  findHappyPeople,
  findPasswordsWithNumbers,
  countPeopleInValencia,
  getTotalLegs,
  countHashtags,
  replaceLettersWithDashes,
  extractHashtags,
  countHashtagsAndMentions,
  findLuckyPerson,
  getEachNameOnce,
  changeIntonation,
  replaceWhitespaceWithCharacter,
  getNamesBeginningWithVowels
};
