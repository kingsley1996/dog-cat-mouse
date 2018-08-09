var Dog = require('./dog');
var Cat = require('./cat');
var Mouse = require('./mouse');

var jerry = new Mouse('Jerry');
var tom = new Cat('Tom');
var dog = new Dog('Simba');
// dog.sayHi();
dog.eat(tom);
// tom.eat(jerry);
try {
    tom.eat(dog);
} catch (error) {
    console.log('Error while cat eating a dog');
}

console.log(tom);
// console.log(dog);