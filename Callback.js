const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        const Data = 'The Data is fetched successfully';
        resolve(Data);
    }, 2000);
});