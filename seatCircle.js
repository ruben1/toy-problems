/*
Seat Circle

Input: 100 chairs in a circle and they are labeled from 1 to 100

Condition: 
Pattern of change is that seat 1 is asked to leave, seat 2 is asked to stay, seat 3 is asked to leave...
Pattern continues of skipping one and asking one to leave till only one is left

Output: Return who the last person left

*/

var seatCircle = function(numberOfChairs) {
  var index = 0;
  //make array with numbers up to the one passed
  var chairsArray = _.range(numberOfChairs);

  //while there's more than 2 numbers
  while(chairsArray.length > 1) {
  	//remove number in current index
    chairsArray.splice(index, 1);
    //increase index just by 1 because since there's one element less the new index will point to the second following element
    index += 1;
    //if index is bigger than number of elements
    if(index % chairsArray.length > 0) {
      //rest length to have real index
      index = index % chairsArray.length;
    }
  }
  //return element left
  return chairsArray[0];
};

//could be implemented with doubly linked list