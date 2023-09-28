/* forEach method in Arrays */
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


/* filter method in Arrays */
const numbers = [0, 10, 20, 30, 40, 50];

const returnedNumbers = numbers.filter(num => {
    return num > 20;
});

console.log(`The Numbers ${returnedNumbers} are greater than 30`);

/* Map method in Arrays */


const returnValuesMap = [0,10,20,30,40,50].map( function(num) {
    return num / 10;
})

console.log(`The returned values of Map method is ${returnValuesMap}`);