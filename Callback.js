const fetchData = (callback) => {
    // Simulate fetching data from an API after 2 seconds
    setTimeout(() => {
        const data = 'Data fetched successfully';
        callback(data); // Call the callback function and pass the fetched data
    }, 2000);
}

const processData = (data) => {
    console.log('Processing data:', data);
}

// Usage of the callback function
fetchData(processData); // Pass processData function as a callback

const fetchData2 = (callback2) => {
    const data = 'Data Fetched succesfully';
    callback2(data);
}

const processData2 = (data) => {
    console.log(`Processing data: ${data}`);
}

fetchData2(processData2);