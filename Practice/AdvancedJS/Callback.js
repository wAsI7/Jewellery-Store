function fetchData(callback) {
    // Simulate fetching data from an API after 2 seconds
    setTimeout(function() {
        const data = 'Data fetched successfully';
        callback(data); // Call the callback function and pass the fetched data
    }, 2000);
}

function processData(data) {
    console.log('Processing data:', data);
}

// Usage of the callback function
fetchData(processData); // Pass processData function as a callback