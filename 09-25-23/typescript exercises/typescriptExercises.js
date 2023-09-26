// ex 1
var Person = /** @class */ (function () {
    function Person(name, age, ssn) {
        this.name = name;
        this.age = age;
        this.ssn = ssn;
    }
    Person.prototype.greet = function () {
        console.log("".concat(this.name, " is my name."));
    };
    //for Ex 4
    Person.statement = function () {
        console.log('This is a Person Class');
    };
    Object.defineProperty(Person.prototype, "myName", {
        //for Ex5
        get: function () {
            return console.log(this.name);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "myAge", {
        get: function () {
            return console.log(this.age);
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.breachSSN = function () {
        console.log("".concat(this.name, "'s ssn: ").concat(this.ssn));
    };
    Object.defineProperty(Person.prototype, "newName", {
        set: function (value) {
            this.name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "newAge", {
        set: function (value) {
            if (value < 0) {
                console.log("Age can't be negative!");
            }
            else {
                this.age = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var person1 = new Person('Aaron', 48, 12345);
var person2 = new Person('Becky', 47, 54321);
person1.greet();
person2.greet();
person1.breachSSN();
