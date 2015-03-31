/*

Write quick sort

*/

/*
Implementation without taking into account space complexity

var quickSort = function(array) {
  if(array.length === 0 || array.length === 1) {
  	return array;
  }

  var smallerElems = [];
  var biggerElems = [];
  var pivot = array[0];
  
  for(var i = 0; i < array.length; i++) {
    var element = array[i];
    if(element < pivot) {
      smallerElems.push(element);
    } else if(element > pivot) {
      biggerElems.push(element);
    }
  }

  return quickSort(smallerElems).concat(pivot).concat( quickSort(biggerElems) );
};
*/

//Implementation with pure recursion and in-place/constant space complexity
var quickSort = function(array, from, to) {
  from = from === undefined ? 0 : from;
  to = to === undefined ? array.length - 1 : to;

  if(from >= to) {
    return;
  }

  var pivot = array[from];

  var min = from;
  var max = to;

  var free = min;
  
  while(min < max) {
    if(free === min) {
      if(array[max] <= pivot) {
        array[free] = array[max];
        min += 1;
        free = max;
      } else {
        max -= 1;
      }
    } else if(free === max) {
      if(array[min] >= pivot) {
        array[free] = array[min];
        max -= 1;
        free = min;
      } else {
        min += 1;
      }
    } else {
      throw 'Chiquillo, que ejz ezto'
    }
  }

  array[free] = pivot;

  quickSort(array, from, free - 1)
  quickSort(array, free + 1, to);

  return array; 
};