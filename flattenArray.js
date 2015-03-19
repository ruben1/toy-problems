/*
Write a function that accepts a multi dimensional array and returns a flattened version.

Ex: flattenArray([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]

*/

var flattenArray = function(array) {
  var flattenedArray = [];
  var flatten = function(subArray) {
  	for(var i = 0; i < subArray.length; i++) {
  	  var element = subArray[i];
      if (Array.isArray(element)) {
        flatten(element);
      } else {
        flattenedArray.push(element);
      }
    }
  };
  flatten(array);
  return flattenedArray;
};