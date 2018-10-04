ahha! I wasn't getting anything out of singleAnimal(); then I realized I was calling it before unscramble(); so it wasn't getting any data, put the call to where it is now and it started working. ACP. 


Ok, I wasn't able to get the string values from singleLetters[i] to allAnimal or stringy, and found the problem, it was because I was misusing .concat. .concat returns a string that is a concatenation of two or more strings and I was only doing on at a time, like...
stringy.concat(singleLetter[i]);

the real solution is on line 28; 
ACP

Ok, reached a stopping point where I want to try different string erase methods id function splitter() so that allAnimal can erase oneAnimal, thus allowing for the next animal on deck to start with a clean index of 0, so that it can grab and push the next animal when its index reaches 3. 

But I think I may want to checkout branches so that I can maybe try different methods and pull whatever branch works into master. And I think I want to get some help on which different string erase methods I should use. 
ACP. 