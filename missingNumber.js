/*
Write a function that accepts an array of integers in random order of unknown length, 
but with one number missing. Return the missing number.

Ex: missingNumber([1,3,0,4,5]) --> 2
*/

var missingNumber = function(array) {
  var obj = {};
  var min = array[0];

  for(var i=0; i < array.length; i++) {
    obj[array[i]] = true;
    if(array[i] < min) {
      min = array[i];
    }
  }

  var rightNumbers = _.range(min, array.length + 1);

  for(var i=0; i < rightNumbers.length; i++) {
    var number = rightNumbers[i];

    if(!obj.hasOwnProperty(number)) {
      return number;
    }
  }
}