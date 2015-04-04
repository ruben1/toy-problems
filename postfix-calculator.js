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

var isOperator = function(character) {
  if(!operate[character]) {return false}
  return true;
}
/*
Implementation for expressions like  2 3 * 4 2 / + 5 3 * 6 + -
*/

var postfix = function(expression) { 
  var stack = new Stack();
  var previousCharIsInt = false;

  for(var i = 0; i < expression.length; i++) {
    var character = expression[i];
    var parsedChar = parseFloat(character);
    if(character === ' ') {
      previousCharIsInt = false;
      continue;
    }
 
    if(!isNaN(parsedChar)) {
      if(previousCharIsInt) {
        var previousInt = stack.pop();
        character = previousInt.toString() + character;
        parsedChar = parseFloat(character);
      }
      stack.push(parsedChar);
      previousCharIsInt = true;
    } else if(isOperator(character)) {
      var number1 = stack.pop();
      var number2 = stack.pop();
      var calculation = operate[character](number2, number1);
      stack.push(calculation);
      previousCharIsInt = false;
    }
  }

  if(stack.size() !== 1) {throw 'There is not just 1 element in the stack'}

  return stack.pop();
};






