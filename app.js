
var scrambledAnimals = [
  ['d', 'c', 'p', 'c'],
  ['o', 'a', 'i', 'o'],
  ['g', 't', 'g', 'w']
];

//moved to global scope from inside singleAnimal function;
let singleLetters = [];
let animalAppender = '';


var unscramble = function() {
  animalsGetPushed = [];
  for (let slow = 0; slow < scrambledAnimals[0].length; slow ++){
    for (let fast = 0; fast < scrambledAnimals.length; fast ++){
      var singleAnimal = function() {
        singleLetters.push(scrambledAnimals[fast][slow]);
        if(singleLetters.length >= 12){
          for (let i = 0; i < 3; i ++){
            animalAppender.concat(singleLetters[i]);
          }
        }
      };
      singleAnimal();

      // if(animalAppender.length === 2){
      // animalsGetPushed.push(animalAppender);
      // }


    }
  }
};

unscramble();
