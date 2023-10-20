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

//IIFE

(function () {
    // IIFE body
    var x = "IIFE executed!"
    console.log(x);
  })();

//console.log(x); Cannot Access here