// ex 1






// ex 2




// ex 3
// let person: {
//   name: string;
//   age: number;
//   gender: string
// }

// person = {
//   name: "Aaron",
//   age: 48,
//   gender: "male"
// }

// // ex 4

// let car: {
//   make: string;
//   model: string;
//   year: number
// }

// car = {
//   make: "Chevy",
//   model: "Corvette",
//   year: 1985
// }
// console.log(car);

// ex 2 (9-11-23)

interface personInt {
  name: string;
  age: number;
  greet: (name: string) => void;
  }

class Person implements personInt {
  constructor (
    public name: string, 
    public age: number,
    private ssn: number
  ){}

  greet(){
    console.log(`${this.name} is my name.`)
  }
  //for Ex 4
  static statement() {
    console.log('This is a Person Class')
  }
  //for Ex5
  get myName(){
    return console.log(this.name)
  }
  get myAge(){
    return console.log(this.age)
  }

  breachSSN (){
    console.log(`${this.name}'s ssn: ${this.ssn}`)
  }
  set newName(value: string){
    this.name=value;
  }
  set newAge(value: number){
    if (value < 0){
      console.log("Age can't be negative!")
    } else {
      this.age=value;
    }
  }
}
const person1= new Person('Aaron',48,12345);
const person2= new Person ('Becky',47,54321);

person1.greet();
person2.greet();

person1.breachSSN();