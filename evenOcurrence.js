/*
Given an integer array, one element occurs even number of times and all others have odd occurrences. 
Find the element with even occurrences.
*/


var evenOcurrence = function(array) {
  var ocurrences = {};
  var element;
  var count;

  for(var i = 0; i < array.length; i++) {
    element = array[i];
    if(!ocurrences.hasOwnProperty(element)) {
      ocurrences[element] = 0;
    }
    ocurrences[element] += 1;
  }

  for(var key in ocurrences) {
  	count = ocurrences[key];
    if(count % 2 === 0) {
      return key;
    }
  }
};