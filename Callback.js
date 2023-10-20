const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        const Data = 'Data Fetched';
        resolve(Data);
    }, 2000);
});

//
fetchData.then((result) => {
    console.log('Data received:', result);
}).catch((error) => {
    console.error('Error:', error);
});

//Hoisting

let { x, y } = { x: 3, y: 4 };

console.log(x);