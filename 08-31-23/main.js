// function learnToCode(student ='Aaron', language = 'to code') {
// if (language.toLowerCase() === 'javascript') {
//   console.log('Are you learning Front-End Development');
// } else {console.log('Have you tried JavaScript');
// } console.log(`${student} became a developer by learning with Codefi`);

// }

// learnToCode('Aaron');
// learnToCode('Aaron', 'Java');
// learnToCode('Aaron', 'JavaScript');


// function gradeAssignment(score = 0) {
//   console.log(score);
//   return score;
// }

// const greet = function() {
//   console.log('hello');
//   learnToCode();
// }
// const filterWord = 'name'
// const student = {
//   name: 'Jacob',
//   shouldBuildProjects: true,
//   age: '700',
//   introduce: function () {
//     return `I am ${this.name}`},
//   motivate: function (reasonForLearningToCode) {
//     return `I want to learn to code so I can ${reasonForLearningToCode}`;
//   }
//   }


// console.log('Dot Notation: ',student.name)
// console.log('Bracket Notation: ', student['name'])
// console.log('Dot Notation', student.filterWord)
// console.log('Bracket Notation with variable', student[filterWord])

// const sayHello = student.introduce();
// console.log(sayHello);

// const findingYourWhy = student.motivate('make $$$');
// console.log(findingYourWhy);

// console.log(window);

// const myString = ('       TESTING methods          ');
// console.groupCollapsed('String Methods')
// console.log('toUpperCase():', myString.toUpperCase());
// console.log('toLowerCase():', myString.toLowerCase());
// console.log('startsWith():', myString.startsWith('T'));
// console.log('trim: ', myString.trim());
// console.log('repeat', myString.repeat(3));
// console.log('charAt: ', myString.charAt(9));
// console.log('split: ', myString.split('T'));
// console.log('Replace: ', myString.replace('methods', 'complete'));
// console.groupEnd();

// const myNumber = 3.14159263

// console.groupCollapsed('Number Methods');
// console.log('toString()', myNumber.toString());
// console.log('isInteger(): ', Number.isInteger(myNumber));
// console.log('toFixed(): ', myNumber.toFixed(3));
// console.log('isNaN(): ', isNaN(myNumber));
// console.groupEnd();

// console.groupCollapsed('Math Methods');
// console.log('random(): ', Math.random());
// console.log('floor(): ', Math.floor(3.9))
// console.log('ceil(): ', Math.ceil(3.00004))
// console.log('round(): ', Math.round(3.57))
// console.log('min(): ', Math.min(3, 4, 2, 5, 1))
// console.log('max(): ', Math.max(3, 4, 2, 5, 1))
// console.groupEnd();

// console.groupCollapsed('Date Methods')
// console.log('now: ', Date.now());
// console.log('getDate(): ', new Date().getDate());

// console.groupEnd();

// console.groupCollapsed('Document Methods')
// console.log('title: ', document.title);
// console.log('url: ', document.URL);
// console.log('body: ', document.body);
// console.log('images: ', document.images);
// console.log('query selector: ', document.querySelector('h1'));
// console.log('createElement: ', document.createElement('h1'))
// console.groupEnd();


// const myArray = [1,'Hello',false,20,true];
// console.group('Array Methods');
// console.log('length: ', myArray.length);
// console.log('push', myArray.push('LastItem'));
// console.log('pop', myArray.pop('LastItem'));
// console.log('include', myArray.includes('Hello'));
// console.log('indexOf', myArray.indexOf('Hello'));
// console.log(myArray);
// console.groupEnd();

// 1
let myName = 'Aaron';
function greet() {
    console.log(`Hello, ${myName}`);
};
greet(myName);

// 2
function multiply(a,b) {

  console.log(a*b)
}
multiply(5,4);

//3
const person = {
  name: 'Aaron',
  age: 48,
  gender: 'male'
}

console.log(person);

// 4
const car = {
  make: 'Chrysler',
  model: 'Pacifica',
  year: '2019'
}
console.log(car);

// 5

function reverseString(a) {
    let newString='';
  for (let i=(a.length)-1; i>=0; i--) {
  console.log(a.length);
  console.log(i);
    newString = newString + a[i];
    console.log(newString);
    
    
  } 
}

// reverseString('Hello');
console.groupCollapsed('5');
console.log(reverseString('Hello'))
console.groupEnd()

//6
function calculateArea(r) {
  a=Math.PI*(r**2);
  return a;
}

console.log(calculateArea(5))

//7 
let date = new Date();
let month = date.getMonth() + 1;
let day = date.getDate();
let year = date.getFullYear();

let currentDate = `${month}/${day}/${year}`;
console.log(currentDate)
//console.log((new Date().getMonth)+1,'/',new Date().getDay(),'/',new Date().getFullYear())

// 8
console.log(Math.ceil(10*(Math.random())))



 // 9
 function q10(a) {
  console.log(`${a} is my value`)
 }
 q10('Aaron')

 // 10
function ex10function(){
  let user={name:'Aaron',age: 48,occupation:'Developer',};
  for (i in user){
      console.log(user[i]);
  }
}

 // 11
 
 
 function objSplitReturn(obj){
  let arrayKeys=[];
  arrayKeys=Object.keys(obj);
  //console.log(arrayKeys);
  let arrayKeysSorted=arrayKeys.sort();
  console.log(arrayKeysSorted);
  let arrayValuesSorted=[];
  for (i in arrayKeysSorted){
    let v=arrayKeysSorted[i];
    arrayValuesSorted.push(obj[v]);
       
  }
  console.log(arrayValuesSorted);
 }
 objSplitReturn({ a: 1, c: 2, b: 3 });

 // 12
 let stringEX12='The quick brown fox jumps over the lazy dog.';
 //console.log(stringEX12.split(' ')); //testing
  function reverseString12 (myString12){
    let stringArray=myString12.split(' ');
    let revArray=[];
    for (i=stringArray.length-1;i>=0;i--){
      revArray[(stringArray.length-1)-i]=stringArray[i];
    }
    return console.log(revArray);
 }
reverseString12(stringEX12);

// 13
let string13="'(', ')', ', ', '[', ']'";
// No clue where to begin here




// 14
function isAnagram (a,b){
  if (a.length != b.length) return false;
  let arrayA=a.split("");
  let arrayB=b.split("");
  arrayA.sort();
  arrayB.sort();
  console.log(arrayA);
  console.log(arrayB);
  for (let i=0;i<arrayA.length;i++){
    if (arrayA[i]!=arrayB[i]) return false;
    
  }return true;
}
console.log(isAnagram ('aaron','anora'));

// 15
function FizzBuzz(){
  for (let i=1; i<=100; i++){
    let z=i%3;
    let y=i%5;
    if (z && y == 0) {
      console.log('FizzBuzz')
    } else if (y==0){
      console.log('Buzz')
    } else if (z==0){
      console.log('Fizz')
    } else {
    console.log(i)
    };
  }
}
FizzBuzz(); //something still slightly wrong && is not resolving correctly