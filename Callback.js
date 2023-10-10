const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        const Data = 'The Data is fetched successfully';
        resolve(Data);
    }, 2000);
});

fetchData.then((result) => {
    console.log('Data received:', result);
}).catch((error) => {
    console.error('Error:', error);
});
