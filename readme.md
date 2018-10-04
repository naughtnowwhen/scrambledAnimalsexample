ahha! I wasn't getting anything out of singleAnimal(); then I realized I was calling it before unscramble(); so it wasn't getting any data, put the call to where it is now and it started working. ACP. 


Ok, I wasn't able to get the string values from singleLetters[i] to allAnimal or stringy, and found the problem, it was because I was misusing .concat. .concat returns a string that is a concatenation of two or more strings and I was only doing on at a time, like...
stringy.concat(singleLetter[i]);

the real solution is on line 28; 
ACP