
var scrambledAnimals = [
  ['d', 'c', 'p', 'c'],
  ['o', 'a', 'i', 'o'],
  ['g', 't', 'g', 'w']
];

//moved to global scope from inside singleAnimal function;
let singleLetters = [];
let allAnimal = '';



var unscramble = function() {
  animalsGetPushed = [];
  for (let slow = 0; slow < scrambledAnimals[0].length; slow ++){
    for (let fast = 0; fast < scrambledAnimals.length; fast ++){
      singleLetters.push(scrambledAnimals[fast][slow]);

    }
  }
};


var singleAnimal = function() {
  let stringy = '';
  for (let i = 0; i < singleLetters.length; i ++){
    stringy.concat(stringy += singleLetters[i]);
  }
  console.log(stringy);
  console.log(allAnimal);
};


unscramble();
singleAnimal();
