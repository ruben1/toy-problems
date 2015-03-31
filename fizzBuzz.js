/*
	Fizzbuzz

	Input: list of integers
	Output: Write a script that will print 1-100 except:

	if divisable by 3 - write fizz
	if divisable by 5 - write buzz
	if divisable by 15 - write fizz buzz
*/


var fizzBuzz = function(array) {
  var number;
  for(var i = 0; i < array.length; i++) {
    number = array[i];
    if(number === 0) {
      continue;
    }
    if(number % 3 === 0 && number % 5 === 0) {
      console.log(number, 'fizz buzz');
    } else if(number % 5 === 0) {
      console.log(number, 'buzz');
    } else if(number % 3 === 0) {
      console.log(number, 'fizz');
    } else {
      console.log(number);
    }
  }
};