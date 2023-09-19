// function gotoSchool (){
//   console.log("The Bus! Welp, I missed the bus!");
// }

// function code(){
//   console.log("I successfully coded all day!");
//   }

// console.groupCollapsed("Synchronous Coding");
// gotoSchool();
// code();
// console.groupEnd();

// // Callbacks

// function growCorn(){
//   setTimeout(() => {
//     console.log("Corn has been grown!");
//   }, 3000
//   );

// }

// function waterCorn() {
//   console.log("Corn has been watered!");
// }
// console.groupCollapsed("Callbacks");
// growCorn();
// waterCorn();
// console.groupEnd();

// Promises

// const someAPIRequest = {
//   success: false, //Math.random *5,
//   data: "Here is your data!",
// }

// const getDetails = new Promise((resolve,reject) => {
//   if (someAPIRequest.success) {
//     resolve(someAPIRequest.data);
//   } else {
//     reject(new Error ("API Request Failed. Try Again"));
//   }
//   }
// );

// getDetails.then((done) => {
//   console.log("We are done here: ", done);
// }).catch((err) => {
//   console.log("Houston, we have a problem: ", err);
// });

// Async/Await

// ******Old School******

// function useBoredAPI(){
//   const data = fetch('http://www.boredapi.com/api/activity').then((res) => {
//     return res.json();
//   }).then((data) => console.log("data: ", data)).catch((err) => console.log("err: ",err));
// }
// useBoredAPI();

// async function asyncBoredApi () {
//   try{
//     const data = await fetch('http://www.boredapi.com/api/activity');
//     const res = await data.json();
//     console.log("Async/Await: ", res);

//   } catch (err) {
//     console.log('err: ',err)
//   }

//   }
// asyncBoredApi();

//Ex1

// class Subject {
// 	constructor() {
// 		this.observers = [];
// 	}
// 	// Add methods here
//   addObserver(observer) {
//     this.observers.push(observer);
//     console.log(this.observers);
//   }
//   removeObserver(observer) {
//     this.observers.pop(observer);
//   }
//   notifyObserver(){
//     // for (let observer in this.observers){
//     //   return observer.update();
//     // }
//     this.observers.forEach((obv) => {
//       obv.update();
//     });
//   }
// }

// class Observer {
//   constructor(name,location){
//     this.name=name,
//     this.location=location
//   }
// 	update() {
// 		console.log('Observer updated!');
// 	}
// }

// const mySubjects = new Subject;
// const observer1 = new Observer('Aaron','Piedmont');
// const observer2 = new Observer('Becky','Jackson');
// // console.groupCollapsed('Observers');
// // console.log(observer1);
// // console.log(observer2);
// // console.groupEnd();
// mySubjects.addObserver(observer1);

// mySubjects.addObserver(observer2);
// mySubjects.notifyObserver();

//Ex 2
// const person = {
// 	name: 'John',
// 	age: 30,
// 	address: {
// 		city: 'New York',
// 		country: 'USA',
// 	},
// };
// const fruits = ['apple', 'banana', 'cherry', 'date'];


// const {name:personName,age:personAge} = person; 
 
// console.log(personName);
// console.log(personAge);
// console.log(person);
// let [,item2,,item4] = fruits;

// //console.log(item1);
// console.log(item2);
// //console.log(item3);
// console.log(item4);

// Ex3

// async function fetchPosts(){
//   try {
//     const data = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
// 		const res = await data.json();
// 		console.log('ASYNC/AWAIT:', res);
//   }
//   catch (err) {
//     console.log('err: ', err)
//   }
// }
// fetchPosts();

//Ex4
class Subject {
	constructor() {
		this.observers = [];
	}

	addObserver(observer) {
		// TODO: Add observer to the list
    this.observers.push(observer);
	}

	removeObserver(observer) {
		// TODO: Remove observer from the list
    this.observers.pop(observer);
	}

	notifyObservers(data) {
		// TODO: Notify all observers with given data
    this.observers.forEach((obs)=>{
      obs.update(data);
    });
	}

	async fetchAndNotify() {
		try {
      const url = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
      const data = await url.json();
      this.notifyObservers(data);
      
    }
    catch (err) {
      
      this.observers.forEach((obs) => {
        this.notifyObservers(err);
        
      })
		// TODO: Fetch data from the API and notify observers
    
}}}

class Observer {
	update(data) {
		// TODO: Handle the received data. If it's an error message, log it.
    const isValidJSON = data => {
      try {
        JSON.parse(data);
        return true;
      } catch (e) {
        return false;
      }
    }
    console.log(isValidJSON(data));
		// If it's the list of posts, destructure and log the title of the first post.
    console.log(data);
	}
}

// TODO: Instantiate the Subject, add observers, and call the fetchAndNotify method

const mySubjects = new Subject;
const obs1 = new Observer;
const obs2 = new Observer;
mySubjects.addObserver(obs1);
mySubjects.addObserver(obs2);
mySubjects.fetchAndNotify();
