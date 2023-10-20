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

//Exception Handling in JS

try {
    // Code that might throw an exception
    let result = x / y;
    if (isNaN(result)) {
      throw new Error("Result is not a number");
    }
    console.log(result);
  } catch (error) {
    // Code to handle the exception
    console.error("An error occurred:", error.message);
  } finally {
    // Code that always runs
    console.log("Execution complete.");
  }
  