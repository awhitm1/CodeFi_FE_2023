// console.groupCollapsed('This');
// console.log("'this' in a global scope: ", window);
// console.groupEnd();
// //implicit scope for 'this'

// const classroom={
//   name: 'Math class',
//   students: ['Jacob','Gerald','Robert','Joe'],
//   printStudents: function (){
//     console.log("'this' in an implicit scope: ", this.students[3],this.name.split(" "));
//   },
// };
// console.groupCollapsed('implicit This');
// classroom.printStudents();
// console.groupEnd();

// // Explicit Binding

// const getname = function () {
//   console.log("'this' in explicit scope: ", this.name);
// };

// const player = {
//   name: 'Russell Westbrook',
//   team: 'LA Clippers',
// }
// console.groupCollapsed('explicit This');
// getname.call(player);
// console.groupEnd();
// // Object-Oriented Programming

// class Animal {
//   constructor (name,species,legNum) {
//     this.name = name;
//     this.species = species;
//     this.legNum = legNum
//   }
//     speak() {
//       console.log(`I am a ${this.species} named ${this.name} and I have ${this.legNum} legs.`);
//     }
// }

// const animal1 = new Animal ('Bartok','bat',2);
// const animal2 = new Animal ('Nemo','fish',0);

// console.groupCollapsed('Object Class');
// console.log(animal1);
// console.log(animal2);
// animal2.speak();
// animal1.speak();
// console.groupEnd();


// class Calculator {
//   static add(a,b) {
//     return a+b;
//   }
// }
// console.groupCollapsed('static methods');
// console.log(Calculator.add(4,5));
// console.groupEnd();


// class Rectangle {
//   constructor (width,height) {
//     this.width = width;
//     this.length = height;
//   }
//   get area() {
//     return this.width * this.height;
//   }
//   set dimensions (value) {
//     [this.width, this.height] = value;
//   }
// }
// const rect1 = new Rectangle (4,5);
// const arr = [1,1,1,1,1,1];
// console.groupCollapsed('Getters & Setters');
// console.log(rect1.area); 
// rect1.dimensions = [2,3];
// console.log(rect1.area);

// class Circle {
//   #radius; 

//   constructor (radius) {
//     this.#radius = radius;
//   }
//   getArea(){
//     return Math.PI*this.#radius*this.#radius;

//   }
// };

// const circle = new Circle (5);
// console.log(circle.getArea());

// Ex #1
// Global
// const recipe={
//     name: 'eggs', 
//     amount: 2,
//   printShoppingList: function (){
//     console.log(this.name);
//   },
// }
// console.log(recipe.printShoppingList());
// // Object method
// class Recipe {
//   constructor(name,qty){
//     this.name=name;
//     this.qty=qty;
//   }
//   getList(){
//     console.log(`I need to buy ${this.name}`);
//   } 
// }
// const boiledEgg = new Recipe('eggs',2);
// boiledEgg.getList();

// const cat = {
//   name: 'Red',
//   age: 1,
//   //makePurr(){console.log(`${this.name} is a good kitty!`)}
//   makePurr: () => console.log(`${this.name} is a good kitty!`)
// }
// cat.makePurr();
// // 'this' works differently in the arrow function

// // Ex 2
// class Person {
//   constructor(name,age){
//     this.name=name;
//     this.age=age;
//   }
//   greet(){
//     console.log(`${this.name} is my name.`)
//   }
//   //for Ex 4
//   static statement() {
//     console.log('This is a Person Class')
//   }
//   //for Ex5
//   get myName(){
//     console.log(this.name)
//   }
//   get myAge(){
//     console.log(this.age)
//   }
//   set newName(value){
//     this.name=value;
//   }
//   set newAge(value){
//     if (value < 0){
//       console.log("Age can't be negative!")
//     } else {
//       this.age=value;
//     }
//   }
// }
// const person1= new Person('Aaron',48);
// const person2= new Person ('Becky',47);

// person1.greet();
// person2.greet();

// // Ex 3 same?

// // Ex 4
// Person.statement();

// // Ex 5 
// person1.myName;
// person2.myAge;
// person1.newName='AJ';
// person1.myName;
// person1.newAge=-12;
// person1.newAge=100;
// person1.myAge;

// x=Math.ceil(Math.random()*(10**3));
// console.log(x);

// Ex 6 - all worked - in the other repo

// Ex 7


class Book {
  #isbn;
  
  constructor(isbn,title,author,yearPublished){
    this.#isbn=isbn;
    this.title=title;
    this.author=author;
    this.yearPublished=yearPublished;
  }

};

class Library {
  //  books=[];
    constructor (){
      //let books=[];
      this.books=[];
    }
    addBook(book){
      this.books.push(book);
    }
    removeBook(book){
      this.books.pop(this.book);
    }
    catalog(book){
      console.log(this.books)
    }
  
  };
book1=new Book(123,'Book1','me',2010);
book2=new Book(456,'Book2','you',2011);
book3=new Book(789,'Book3','him',2012);
book4=new Book(012,'Book4','her',2013);
book5=new Book(345,'Book5','they',2014);
book6=new Book(678,'Book6','them',2015);
// arrBooks=[book1,book2,book3];
// console.log(arrBooks);
console.groupCollapsed('Book Shelf');
console.log(book1);
console.log(book2);
console.log(book3);
console.log(book4);
console.log(book5);
console.log(book6);
console.groupEnd();

alexandria = new Library();
alexandria.addBook(book1);
alexandria.addBook(book3);
alexandria.addBook(book5);
alexandria.removeBook(book5);
alexandria.catalog();
// Something still not right above
//Ex 8
class Student {
  grades=[];
  
  constructor (name,grades){
    this.name=name;
    this.grades=grades;
  }
  
  // addGrade (newGrade){
  //   this.grades.push(newGrade);
  // }
  // avgGrade (){
  //   let tot=0;
  //   for (let number of this.grades){
  //     tot+=number;
  //   }
  //   let avg=tot/this.grades.length;
  //   console.log(avg);
  //}
  addGrade = (grade) => this.grades.push(grade);
  avgGrade = () => {
    // let tot=0;
    // for (let number of this.grades){
    //   tot+=number;
    // }
    // let avg=tot/this.grades.length;
    return this.grades.reduce((sum,grade)=> sum + grade, 0) /this.grades.length;
  }
}
const student1= new Student('Aaron',[92,94,88,99]);
console.log(student1.grades);
console.log(student1.avgGrade());
console.log(student1.addGrade(55));
console.log(student1.grades);
console.log(student1.avgGrade());
console.log(student1.addGrade(80));
console.log(student1.addGrade(75));
console.log(student1.addGrade(100));
console.log(student1.avgGrade());
console.log(student1.grades);