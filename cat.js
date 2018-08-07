const Mouse = require('./mouse');
const mickey = new Mouse("jerry");
const tom = new Cat('tom');


function Cat(name) {
    this.name = name;
    this.stomach = [];
}

Cat.prototype.eat = function(mouse) {
    this.stomach.push(mouse);
    mouse.die();
}
tom.eat(mickey);
console.log(tom);
console.log(mickey);
module.exports = Cat;   