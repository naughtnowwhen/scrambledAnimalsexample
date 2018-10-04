'use strict';

var scrambledAnimals = [
  ['d', 'c', 'p', 'c'],
  ['o', 'a', 'i', 'o'],
  ['g', 't', 'g', 'w']
];

//moved to global scope from inside singleAnimal function;
let singleLetters = [];
let allAnimal = '';


// unscrambles the letters and puts em in a big array one letter per index
var unscramble = function() {
  let animalsGetPushed = [];
  for (let slow = 0; slow < scrambledAnimals[0].length; slow ++){
    for (let fast = 0; fast < scrambledAnimals.length; fast ++){
      singleLetters.push(scrambledAnimals[fast][slow]);

    }
  }
};

//concatenates the unscrambled letters into one single string rather than everything being a single letter in a big array that comes from unscramble.
var singleAnimal = function() {
  for (let i = 0; i < singleLetters.length; i ++){
    allAnimal.concat(allAnimal += singleLetters[i]);
  }
};

let oneAnimalMaker = '';
let oneAnimal = [];

var splitter = function(){
  for (var i = 0; i < allAnimal.length; i ++){
    oneAnimalMaker.concat(oneAnimalMaker += allAnimal[i]);
    if(oneAnimalMaker.length === 3){
      oneAnimal.push(oneAnimalMaker);
      console.log(allAnimal);
      allAnimal.substring(oneAnimal.length);
      console.log(allAnimal);
    //   debugger;

    //   var str = 'test_23';
    //     alert(str.substring('test_'.length));

    }
  }
};


unscramble();
singleAnimal();
splitter();