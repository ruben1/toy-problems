/*

Write quick sort

*/


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