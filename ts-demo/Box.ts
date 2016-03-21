var a = require('./a.js');
exports.done = function(name: String){
    a.done();
    console.log(name);
}

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

var greeter = new Greeter("world");
