/*
Given an integer array, output all pairs that sum up to a specific value k. 
Consider the fact that the same number can add up to k with its duplicates in the array.

Ex: 

arrayPairSum(10, [3, 4, 5, 6, 7]) // [ [6, 4], [7, 3] ]
arrayPairSum(8, [3, 4, 5, 4, 4]) // [ [3, 5], [4, 4], [4, 4], [4, 4] ]
*/

var arrayPairSum = function(sum, array) {
  //create result array
  var results = [];
  var combinationSum;
  //recursive function that takes the current index
  var recursive = function(index) {
    //start loop at element of current index and end it at lenght - 2
    for(var i=index; i < array.length; i++) {
      //sum that element plus next
      combinationSum = array[index] + array[i];
      //if result of sum equals sum passed 
      if(combinationSum === sum) {
        //push subarray to results array
        results.push([ array[index], array[i] ]);
      }
    }
    if(index < array.length - 1) {
      recursive(index + 1);
    }
  };
  recursive(0);
  return results;
};

