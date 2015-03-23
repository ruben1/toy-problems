/*
Write a function that accepts an array of random integers and an integer n. 
Determine the number of times where two integers in the array have the difference of n.

f(4, [1, 1, 5, 6, 9, 16, 27]) // 3 (Due to 2x [1, 5], and [5, 9])
f(2, [1, 1, 3, 3]) // 4 (Due to 4x [1, 3])

*/

var integerDifference = function(result, array) {
  var count = 0;
  var index = 0;

  while(index < array.length) {
    for(var i = index; i < array.length; i++) {
      var difference = Math.abs(array[index] - array[i]);
      if(difference === result) {
        count += 1;
      }
    }
    index += 1;
  }
  return count;
};