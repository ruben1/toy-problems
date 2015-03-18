/*
Given an amount of money as a float, format it as a string.

formatMoney(2310000.159897); // '2 310 000.16'
formatMoney(1600); // '1 600.00'

*/

var moneyFormat = function(floatPassed) {
  var formatted = ".";

  var arr = floatPassed.toString().split('.').slice(0, 2);
  if(arr[1]) {
    formatted += arr[1].slice(0, 2);
  } else {
    formatted += "00";
  }
  
  var index = 3;
  var number = arr[0].split('');
  for(var i=number.length - index; i >= 0; i -= 3) {
    number.splice(i, 0, " ");
    index += 3;
  }
  if(number[0] === " ") {
    number.shift();
  }
  return number.join('') + formatted;
};