//ASSIGNMENT
// Add new members to arrays without using the push() method,

var fruits = ['apple', 'banana', 'berries', 'kiwi'];

var veggies = ['tomato', 'potato', 'onion'];

var cart = [...fruits, ...veggies];


for (var i=0; i < cart.length; i++){
    console.log(cart[i]);
}

//Convert a string to an array

var name = 'Syed Wasi Ali';

var nameArr = [];

for (var i=0; i < name.length; i++){
    nameArr[i] = name[i];
    console.log(nameArr[i]);
}

//Simplified version of the above code is 
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

//Copy either an object or an array into a separate one
const car1 = {
    speed: 200,
    color: 'Blue'
}

const car2 = {...car1};

car2.color = 'Red';

console.log(car2.color);

const bike = [200, 'Yellow', 50];
const bike2 = [...bike];

bike2.push('TVS');

console.log(bike2);
