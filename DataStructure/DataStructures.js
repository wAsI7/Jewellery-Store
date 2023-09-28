/*Data Structures - Arrays */

const fruits = [ 'Apple', 'Banana', 'Custard', 'Orange', 'Pineapple', 'Watermelon' ];

function appendIndex(fruit, index){
    console.log(`Fruit with Index ${index} is ${fruit}`);
}

fruits.forEach(appendIndex);

//Without Arrow Functions
const vegetables = [ 'Onion', 'Tomato', 'Potato', 'Chillies' ];

vegetables.forEach(function(veggie, index){
    console.log(`Vegetable with Index ${index} is ${veggie}`);
});

//Above Code with Arrow Functions

vegetables.forEach((veggie, index) => {
    console.log(`Vegetable with Index ${index} is ${veggie}`);    
});



/*Data Structures - Objects */

var car = {
    color: 'Red',
    speed: 120,
    mileage: 25,
    brand: 'Honda'
};

// Accessing properties
console.log(`The Color of the Car is: ${car.color}`);

// Modifying properties
car.color = 'Blue';
console.log(`The Color of the Car is: ${car.color}`);

// Adding new properties
car.modelYear = 2006;
console.log(`The Manufacturing Year of the Car is: ${car.modelYear}`);

// Iterating through an object
for(var feature in car){
    console.log(`The ${feature} of the Car is: ${car[feature]}`);
}



/*Data Structures - Sets */
const uniqueNumbers = new Set([1, 2, 3, 2, 4, 5, 4]);

// Adding and deleting elements
uniqueNumbers.add(6);
uniqueNumbers.delete(3);

// Checking if an element exists
console.log(uniqueNumbers.has(5)); // Output: true

// Iterating through a Set
uniqueNumbers.forEach(number => {
    console.log(number);
});



/*Data Structures - Maps */

const bookPrices = new Map();

bookPrices.set('Harry Potter', 20);
bookPrices.set('Lord of the Rings', 25);

// Accessing values
console.log(bookPrices.get('Harry Potter')); // Output: 20

// Modifying values
bookPrices.set('Harry Potter', 22);

// Checking if a key exists
console.log(bookPrices.has('Lord of the Rings')); // Output: true

// Iterating through a Map
bookPrices.forEach((price, book) => {
    console.log(`${book}: Rs ${price}/-`);
});
