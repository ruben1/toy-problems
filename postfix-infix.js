var Stack = function() {

  this.storage = {};
  this.count = 0;
};


Stack.prototype.push = function(value){
  this.storage[this.count] = value;
  this.count++;
};

Stack.prototype.pop = function(){
  if(this.count > 0) {
    this.count--
    var value = this.storage[this.count];
    delete this.storage[this.count];
    return value;
  }
};

Stack.prototype.size = function(){
  return this.count;
};

Stack.prototype.first = function() {
  return this.storage[this.count - 1];
};

var operate = {
  '+': function(x, y) {return x + y},
  '-': function(x, y) {return x - y},
  '*': function(x, y) {return x * y},
  '/': function(x, y) {return x / y}
};

/*
Implementation for expressions like  2 3 * 4 2 / + 5 3 * 6 + -
*/

var postfix = function(expression) { 
  var stack = new Stack();

  for(var i = 0; i < expression.length; i++) {
    var character = expression[i];
    var parsedChar = parseFloat(character);
    if(character === ' ') {continue}
 
    if(!isNaN(parsedChar)) {
      stack.push(parsedChar) ;
    } else if(character === '+' || character === '-' || character === '*' || character === '/') {
      var number1 = stack.pop();
      var number2 = stack.pop();
      var calculation = operate[character](number2, number1);
      stack.push(calculation);
    }
  }

  if(stack.size() !== 1) {throw 'There is no just 1 element in the stack'}

  return stack.pop();
};
/*

Implementation for inputs with parenthesis (2*4-6/3)*(3*5+8/4))-(2+3)

*/


var infix = function(expression) {
  var stack = new Stack();
  var string = '';

  for(var i = 0; i < expression.length; i++) {
    var character = expression[i];

    if(typeof character === 'number') {
      string += character + '\n';
    } else if(character === '+' || '-' || '*' || '/') {

    }
  }
};


/*

Implementation for inputs without parenthesis, 2 * 3 - 48/4 -4 * 5

*/

var infix2 = function(expression) {
  var numberStack = new Stack();
  var operatorStack = new Stack();

  for(var i = expression.length - 1; i >= 0; i--) {
    var character = expression[i];

    if(typeof character === 'number') {
      numberStack.push(character);
    } else if(character === '+' || '-' || '*' || '/') {
      if(operatorStack.size === 0 || ) {

      } else {
      	operatorStack.push(character);
      }
    } 
  }
};







