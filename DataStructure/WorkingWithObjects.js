const arr = [];
const drone = {
    speed: 200,
    color: 'Red'
}

const droneKeys = Object.keys(drone);
droneKeys.forEach(function(key){
    arr.push(key, drone[key]);
})

console.log(`Values fetched in the array from drone object is ${arr}`);

//Extra Code to know the type of each array value
for(var i=0; i<4; i++){
    console.log(typeof(arr[i]));
}