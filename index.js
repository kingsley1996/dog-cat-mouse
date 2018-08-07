var Dog = require('./dog');
var Cat = require('./cat');

var tom = new Cat('Tom');
var dog = new Dog('Simba');
dog.sayHi();
dog.eat(tom);
