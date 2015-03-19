/*
Write a function that accepts two parameters, a parent and a child string. 
Determine how many times the child string - or an anagram of the of the child string - appears 
in the parent string. 

Ex: f('AdnBndAndBdaBn', 'dAn') // 4 ("Adn", "ndA", "dAn", "And")
Ex: f('AbrAcadAbRa', 'cAda') // 2
*/

//TODO
var anagramDetection = function(parentStr, childStr) {
  var anagrams = [];
  //calculate anagrams
  var recursive = function(anagramArr, lettersLeft) {
  	if(anagramArr.length === childStr.length) {
  	  anagrams.push(anagramArr);
  	  return;
  	}
	for(var i=0; i < lettersLeft.length; i++) {
	  var letter = lettersLeft[i];
   	  if(letter) {
   	  	var temp = anagramArr.concat(letter);
   	  }
   	  lettersLeft.splice(i, 1);
	  recursive(temp, lettersLeft);
	}
  };
  recursive( [], childStr.split('') );
  return anagrams;
};