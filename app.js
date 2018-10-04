
var scrambledAnimals = [
  ['d', 'c', 'p', 'c'],
  ['o', 'a', 'i', 'o'],
  ['g', 't', 'g', 'w']
];

//moved to global scope from inside singleAnimal function;
let singleLetters = [];
let oneAnimal = '';



var unscramble = function() {
  animalsGetPushed = [];
  for (let slow = 0; slow < scrambledAnimals[0].length; slow ++){
    for (let fast = 0; fast < scrambledAnimals.length; fast ++){
      singleLetters.push(scrambledAnimals[fast][slow]);

    }
  }
};


var singleAnimal = function() {
  for (let i = 0; i < singleLetters.length; i ++){
    console.log(oneAnimal.concat(singleLetters[i]));


  }
};


unscramble();
singleAnimal();
