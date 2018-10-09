'use strict';

var scrambledAnimals = [
  ['d', 'c', 'p', 'c'],
  ['o', 'a', 'i', 'o'],
  ['g', 't', 'g', 'w']
];

//moved to global scope from inside singleAnimal function;
let singleLetters = [];
let allAnimal = '';

// constructor that takes in 3 letter
//this.first = singleLetters[0];
//this.second = sing....


// unscrambles the letters and puts em in a big array one letter per index
var testerString = '';
var testerArr = [];

var unscramble = function() {
  let animalsGetPushed = [];
  for (let slow = 0; slow < scrambledAnimals[0].length; slow ++){
    // console.log('SLOW', scrambledAnimals[slow]);
    for (let fast = 0; fast < scrambledAnimals.length; fast ++){
      console.log('BOTH', scrambledAnimals[fast][slow]);
      testerString += scrambledAnimals[fast][slow];
      if(testerString.length === 3){
        testerArr.push(testerString);
        testerString = '';
      }
      singleLetters.push(scrambledAnimals[fast][slow]);
      //all animal += scrambledAnimals[fast][slow]
    }
  }
  console.log(testerString, 'testerString');
};

//concatenates the unscrambled letters into one single string rather than everything being a single letter in a big array that comes from unscramble.
var singleAnimal = function() {
  for (let i = 0; i < singleLetters.length; i ++){
    allAnimal.concat(allAnimal += singleLetters[i]);
  }
};

let AnimalMaker = '';
let oneAnimal = [];
let animalFarm = [];

//split string method.
//splice





//michael's tinkering
// function splitter() {
//   let animalHouse = [];
//   for (var i = 0; i < arrayStrings.length; i ++){
//     console.log(arrayStrings.length);
//     let animal = '';

//     for (var j = 0; j< arrayStrings[i] ; j++){
//       console.log("letter", arrayStrings[i][j]);
//       animal = animal+arrayStrings[i][j];
//     }
//     animalHouse.push(animal);

//   }
//   console.log('ANIMAL HOUSE', animalHouse);
// }


unscramble();
singleAnimal();
console.log(allAnimal);
// splitter();
console.log(allAnimal);
