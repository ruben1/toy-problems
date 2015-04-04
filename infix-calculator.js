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

Implementation for inputs with parenthesis (2*4-6/3)*(3*5+8/4))-(2+3)

*/


var infix = function(expression) {
  var stack = new Stack();
  var string = '';
  var previousCharIsInt = false;

  for(var i = 0; i < expression.length; i++) {
    var character = expression[i];
    var parsedChar = parseFloat(character);
    
    if(!isNaN(parsedChar)) {
      if(previousCharIsInt) {
        var previousInt = numberStack.pop();
        character = previousInt.toString() + character;
        parsedChar = parseFloat(character);
      }
      numberStack.push(parsedChar);
      previousCharIsInt = true;
    } else if(isOperator(character)){

    }
  }
};


/*

Implementation for inputs without parenthesis, 2 * 3 - 48/4 -4 * 5

*/

var infix2 = function(expression) {
  var numberStack = new Stack();
  var operatorStack = new Stack();
  var previousCharIsInt = false;
 
  for(var i = expression.length - 1; i >= 0; i--) {
    var character = expression[i];
    var parsedChar = parseFloat(character);

    if(character === ' ') {continue}

    if(!isNaN(parsedChar)) {
      if(previousCharIsInt) {
        var previousInt = numberStack.pop();
        character += previousInt.toString();
        parsedChar = parseFloat(character);
      }
      numberStack.push(parsedChar);
      previousCharIsInt = true;
    } else if(isOperator(character)) {
      if(operatorStack.first() === '*' || operatorStack.first() === '/' ) {
        var operator = operatorStack.pop();
        var number1 = numberStack.pop();
        var number2 = numberStack.pop();

        var calculation = operate[operator](number1, number2);

        numberStack.push(calculation);
        operatorStack.push(character);
      } else {
      	operatorStack.push(character);
      }
      previousCharIsInt = false;
    } 
  }

  while(operatorStack.size() > 0) {
    var operator = operatorStack.pop();
    var number1 = numberStack.pop();
    var number2 = numberStack.pop();
    var calculation = operate[operator](number1, number2);
    numberStack.push(calculation);
  }

  if(numberStack.size() !== 1) {throw 'There is not just 1 element in the stack'}
 
  return numberStack.pop();

};

