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
}

const bonusVowels = {
  1: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'],
  3: ['A', 'E', 'I', 'O', 'U'],
 }

let word = "";


function oldScrabbleScorer(word) {
  //console.log(word);
  //word = word.toUpperCase();
	let letterPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += Number(pointValue);
      console.log(`Points for ${word[i]}: ${pointValue}. `);
		 }
 	  }
	}
  console.log();
  console.log(`Total points: ${letterPoints}.`);
	return letterPoints;
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
let newPointStructure = transform(oldPointStructure);

function initialPrompt() {
  console.log("Let's play some Scrabble!");
  console.log();
  word = input.question("Enter a word to score: ");
  word = word.toUpperCase()

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
  //let counter = 0;
  //word = word.toUpperCase();
  console.log();

  for (let i = 0; i < word.length; i++) {
    for (const pointValue in bonusVowels) {
      if (bonusVowels[pointValue].includes(word[i])) {
        vowelBonusScore += Number(pointValue);
      }
    }
  }

  console.log(`Your vowel bonus score is: ${vowelBonusScore}`);  

  return vowelBonusScore
}

let scrabbleScore = function(word) {
  let letterPoints = 0;
  word = word.toLowerCase();

  for (let i = 0; i < word.length; i++) {
 
	  for (let x in newPointStructure) {
      if(x === word[i]) {
	      letterPoints += newPointStructure[x];
      
        console.log(`Points for ${word[i]}: ${newPointStructure[x]}. `);
      }
    }
 	}
	
  console.log();
  console.log(`Total points: ${letterPoints}.`);
	return letterPoints;

}

const scoringAlgorithms = {
  name: [ 'Simple Score', 'Vowel Bonus', 'Scrabble' ],
  description: [ 'Each letter is worth 1 point.', 'Vowels are 3 pts, consonants are 1 pt.', 'The traditional scoring algorithm.' ],
  scoringFunction: [ simpleScore(word), vowelBonusScore(word), scrabbleScore(word)]
 }

function scorerPrompt() {
  let selectedFunction = input.question('Enter 0 for "Simple Scorer," 1 for l "Vowel Bonus," or 2 for "Scrabble Scoring:" ');
  let algorithmName = scoringAlgorithms.name[selectedFunction]
  let = chosenFunction = scoringAlgorithms.scoringFunction[selectedFunction]

  console.log();
  console.log(`Algorithm name: ${algorithmName}`);

  chosenFunction(word);
}

function transform(oldPointStructure) {
  let newPointStructure = {};
  for (let x in oldPointStructure) {
    for (let i = 0; i < oldPointStructure[x].length; i++) {
      newPointStructure[(oldPointStructure[x][i]).toLowerCase()] = Number(x);
    }
  }

  //console.log(newPointStructure);
  return newPointStructure;  
};

//let newPointStructure = transform(oldPointStructure);{
//   'A':[1],
//   'B':[3],
//   'C':[3],
//   'D':[2],
//   'E':[1],
//   'F':[4],
//   'G':[2],
//   'H':[4],
//   'I':[1],
//   'J':[8],
//   'K':[5],
//   'L':[1],
//   'M':[3],
//   'N':[1],
//   'O':[1],
//   'P':[3],
//   'Q':[10],
//   'R':[1],
//   'S':[1],
//   'T':[1],
//   'U':[1],
//   'V':[4],
//   'W':[4],
//   'X':[8],
//   'Y':[4],
//   'Z':[10]
//};

function runProgram() {
  //transform();
  initialPrompt();
  console.log();
  // console.log("Scrabble scoring values for");
  // console.log("letter a: ", newPointStructure.A);
  // console.log("letter j: ", newPointStructure.J);
  // console.log("letter z: ", newPointStructure["Z"]);
  scorerPrompt();
  //scrabbleScore(word);
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

