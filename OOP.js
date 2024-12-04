function Person(name, email) {
    this.name = name;
    this.email = email;
}

var person = new Person("Hopago", "ghwns818@gmail.com");

if (person instanceof Person) {
    console.log(person)
}

Object.create = function (o) {
    function F() { }
    F.prototype = o;
    return new F()
}

var person = {
    name: "",
    yell: function () {
        alert("My name is " + this.name)
    }
}
var hopago = Object.create(person)
hopago.name = "hopago"
// console.log(hopago instanceof person) // TypeError
console.log(hopago.name)
console.log(Object.getPrototypeOf(hopago));
console.log(Object.getOwnPropertyDescriptor(hopago))

function Person(name) {
    this.name = name;
}
Person.prototype = {
    yell: function () {
        alert("My name is " + this.name)
    }
}

var hopago = Object.create(Person.prototype, {
    name: {
        value: "Dopago",
        configurable: true,
        enumerable: true,
        writable: true,
    }
})

function Person() {
    this.name = "anonymous"
}
function Hopago() {
    this.name = "Hopago";
}
Hopago.prototype = Object.create(Person.prototype, {
    constructor: {
        value: Hopago,
    }
})
var hopago = new Hopago();
console.log(hopago instanceof Person)
console.log(hopago instanceof Hopago)
console.log(Hopago.constructor)
console.log(Hopago.name);