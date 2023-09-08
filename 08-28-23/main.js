// const heading = document.querySelector("#h1");
//     console.log (heading);
//     heading.innerText = "Javascript changed me!";

    
    
// const greeting = 'Hello, World!';
//     console.log(greeting);


// const myName = 'Aaron Whitmer';
//   console.log(myName);

// let length = 11;
// let width = 5;

// let area = length * width;

// console.log(area);

// if (area%2==0) {
//   console.log('even');
// } else {
//   console.log('odd');
// }

// for (let i=1; i<11; i++) {
  // console.log(i);
//}

// const yourName = prompt("Enter your name: ");
// console.log('Hello, '+ yourName+'!' );

// const myNumber = 0;
// let f = 1;
// for (i=0; i<myNumber; i++) {
//   f=f*(myNumber-i);
 
// }
// console.log('Factorial is: '+ f);

// year=prompt('Enter a year: ');
// if (year % 4 == 0 && year % 400 == 0) {
//   console.log('Leap Year!');
// } else if (year % 100 == 0) {
//   console.log('Not a leap year.');
// } else if (year % 4 == 0){
//   console.log('Leap Year!!');
// }

// let sum = 0;
// for (let i=0; i<=100; i++) {
//   sum = sum + i;
// }
// console.log (sum);

// const num1 = prompt ('First number: ');
// const num2 = prompt ('Second number: ');

// console.log(parseInt(num1)+parseInt(num2));
// console.log(num1-num2);
// console.log(num1*num2);
// console.log(num1/num2);

// let a = 'Hello';
// let b = 10;
// let c = true;
// let d = null;
// let e;
// let f = {name: 'Aaron', hobby: 'Music',};
// let g = ['hello', 10, true];
// let h;


let menu = [{name: 'canSoda', price: 1,},{name: 'candyBar', price: .5,},{name: 'Popcorn',price: 2,},{name: 'nachos',  price: 2.5,}];

let list = document.getElementById("myList");
for (let i=0; i < menu.length; i++) {
  let list = document.createElement('li');
  list.innerText = menu[i].name;
  document.querySelector('#myList').appendChild(list);
  

}

