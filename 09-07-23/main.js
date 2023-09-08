// Lecture
// let nameFirst = 'Aaron';

// function myName() {
//   console.log(nameFirst);
// }

// myName();

// Exercise 1
// Starting Code
// function outerFunction() {
// 	let outerVar = "I'm outside!";

// 	function innerFunction() {
// 		let innerVar = "I'm inside!";
// 		console.log(outerVar); // Can we access outerVar?
// 		console.log(innerVar); // Can we access innerVar?
// 	}

// 	innerFunction();
// }

// outerFunction();
// outerVar is Function scope - has Closure to innerFunction() 
// innerVar is Local scope - no access outside of innerFunction()

// Exercise 2
function mainFunction() {
	// Call the hoistedFunction here
  hoistedFunction();
	// Now, declare the hoistedFunction below
  function hoistedFunction() {
    console.log('hello');
  }
}

mainFunction();

// Exercise 3
let myDog = 'Sweetie';
function myDogsName() {
  let breed = 'chihuahua'  
  console.log(`My dog's name is ${myDog}.`);
  function moreInfo(){
    console.log(`My dog is a ${breed}.`);
  }
  return moreInfo();
}

myDogsName();

// Exercise 4
let temperature = 75;

function newTemp(){
  let temperature = 80;
  console.log(temperature);
}

function altTemp(){
  let temperature = 85;
  console.log(temperature);
}
altTemp();
newTemp();
console.log(temperature);

// Exercise 5

function functionFactory(){
  let myHobby = 'fish';
  console.log(`I like to ${myHobby}.`);
  function hobbyTime(){
    console.log(`I never have enough time to ${myHobby}.`);
  }
  return hobbyTime();
}
functionFactory();

// Exercise 6
let a='aa';

function hoistingTest() {
  a = a + 'aaa';
  // Try printing a variable here
  console.log(a);

  // Declare the variable after the console.log
  
  
}

hoistingTest();


//Exercise 7
// function setupCounter() {
//   // Define a count variable here
//   let i=0;
//   function increment() {
//       // Increment and print the count
//       i=i+1;
//       console.log(i);
//   }
//   return increment();
// }
// // Create a counter instance and invoke it to test
// setupCounter();
// Something wrong above?

// Exercise 8
function moreCounting(){
  for (let j=0;j<=10;j++){
  function innerCounting(){
    if (j==10){
      j=0;
      console.log(j);
    }
    else {
    j+=1;
    console.log(j);
    }
     
  }
}
return innerCounting();
  
}
moreCounting();
// Exercise 9

let firstName = 'Aaron';
function change1(){
  firstName = 'AJ';
  console.log(firstName);
}

function change2(){
  let lastName = 'W';
  console.log(lastName);
  lastName += 'hitmer';
  console.log(lastName);
  
}

change1();
change2();
console.log(firstName);


