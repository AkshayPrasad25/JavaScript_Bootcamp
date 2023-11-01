//Assignment 1 Code:

//Creating empty array fruits
let fruits = []
//Using .push() method to append to the array/object
fruits.push("apple", "banana", "orange")
//Printing the result on the console
console.log("Assignment 1 Output")
console.log(fruits)

/**************************************************************************************/

//Assignment 2 Code:

//Creating emptu person object
let person ={}

//Adding values to person object
person.name = "John";
person.age = 30;
person.city = "New York";

//Deleting age key from person object
delete person.age

//Adding key job with value Engineer to end of the person object
person.job="Engineer"

//Updating city key from New York to San Francisco
person.city="San Francisco"

//Printing result on console
console.log("Assignment 2 Output")
console.log(person)

/**************************************************************************************/

//Assignment 3 Code:

//Creating empty array cars
let cars = [];

//Adding three car objects
cars.push({
  make: "Toyota",
  model: "Camry",
  year: 2018
}, {
    make: "Toyota",
    model: "Camry",
    year: 2018
  }, {
    make: "Toyota",
    model: "Camry",
    year: 2018
});

//Removing the first car object from the cars array.
cars.splice(1,1);

//Adding a new car object to the cars array.
cars.push({
  make: "Honda",
  model: "Civic",
  year: 2020
});

//Updating the model property of the second car object in the array to Accord
cars[1].model = "Accord";

//Printing result on console
console.log("Assignment 3 Output")
console.log(cars);

/**************************************************************************************/

/* Akshay Prasad
   github.com/AkshayPrasad25
*/