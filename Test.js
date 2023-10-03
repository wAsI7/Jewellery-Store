// Creating a WeakSet
let weakSet = new WeakSet();

// Creating an object
let obj = { message: 'Hello, WeakSet!' };

// Adding the object to the WeakSet
weakSet.add(obj);

// Checking if the object is in the WeakSet
console.log(weakSet.has(obj)); // Output: true

// Removing the object reference
obj = null;

// The object is automatically removed from the WeakSet
console.log(weakSet.has(obj)); // Output: false
