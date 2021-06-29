// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

const bonusVowels = {
  1: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'],
  3: ['A', 'E', 'I', 'O', 'U'],
 };

// const vowel = ['A', 'E', 'I', 'O', 'U'];

// const consonant = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];
//console.log(consonant.length)

let word = "";


function oldScrabbleScorer(word) {
	//console.log(typeof word);
  //console.log(word);
  //word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i].toUpperCase())) {
			letterPoints += `Points for '${word[i]}': ${pointValue}`;
      console.log(`Points for "${word[i]}": ${pointValue}. `)
      
		 }
 	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  console.log("Let's play some Scrabble!");
  console.log();
  word = input.question("Enter a word to score: ");

  return word
}

let simpleScore = function(word) {
  let simpleScore = 0; 
  console.log();
  for (let i = 0; i < word.length; i++) {
    simpleScore += 1
  }
  console.log(`Your simple score is: ${simpleScore}`);
  return simpleScore
}

let vowelBonusScore = function(word) {
  //console.log(vowel)
  let vowelBonusScore = 0;
  let counter = 0;
  //word = word.toUpperCase();
  console.log();

  for (let i = 0; i < word.length; i++) {
    for (const pointValue in bonusVowels) {
      if (bonusVowels[pointValue].includes(word[i].toUpperCase())) {
        vowelBonusScore += Number(pointValue);
      }
    }
  }

  console.log(`Your vowel bonus score is: ${vowelBonusScore}`);  
  return vowelBonusScore
}

let scrabbleScore;

const scoringAlgorithms = {
  name: ['Simple Score', 'Bonus Vowels', 'Scrabble'],
  description: ['Each letter is worth 1 point.', 'Vowels are 3 pts, consonants are 1 pt.', 'The traditional scoring algorithm.'],
  scoringFunction: [simpleScore, vowelBonusScore, oldScrabbleScorer]
 };

function scorerPrompt() {
let selectedFunction = input.question('Enter 0 for "Simple Scorer," 1 for Vowel "Bonus," or 2 for "Scrabble Scoring: "');
let algorithmName = scoringAlgorithms.name[selectedFunction]
let = chosenFunction = scoringAlgorithms.scoringFunction[selectedFunction]

console.log();
console.log(`Algorithm name: ${algorithmName}`);

console.log(`Scoring Function result: ${chosenFunction(word)}`);
};

function transform() {};

let newPointStructure;

function runProgram() {
  initialPrompt();
  console.log();
  scorerPrompt();
  // oldScrabbleScorer(word);
  // simpleScore(word);
  // vowelBonusScore(word)
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

