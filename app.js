const { google } = require('googleapis');
const sheets = google.sheets('v4');
const key = require('./credentials.json/sheetKey.json');

let goldPrice18K;

const jwtClient = new google.auth.JWT(
    key.client_email,
    null,
    key.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
);

jwtClient.authorize((err) => {
    if (err) {
        console.error('Authorization failed:', err);
        return;
    }

    sheets.spreadsheets.values.get({
        auth: jwtClient,
        spreadsheetId: '1LYmg6F0AtZelZC2RdITRioRGJigqFLMC3saVDzoeV08',
        range: 'Price'
    }, (err, response) => {
        if (err) {
            console.error('The API returned an error:', err);
            return;
        }

        goldPrice18K = response.data.values;

        if (goldPrice18K.length) {
            console.log('Data from Google Sheet:');
            goldPrice18K.forEach((row) => {
                console.log(row);
            });

            delayedExecution();
        } else {
            console.log('No data found in Google Sheet.');
        }
    });
});

async function delayedExecution() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Calculate prices for 22 carat and 24 carat
    const ttcp = twentyTwoCarat(goldPrice18K);
    const tfcp = twentyFourCarat(goldPrice18K);
    
    // Update DOM elements with calculated prices
    const twentyTwoCaratPriceElement = document.getElementById('twentyTwoCaratPrice');
    const twentyFourCaratPriceElement = document.getElementById('twentyFourCaratPrice');
    
    twentyTwoCaratPriceElement.textContent = `Price for 22 carat: ${ttcp}`;
    twentyFourCaratPriceElement.textContent = `Price for 24 carat: ${tfcp}`;
}

const twentyTwoCarat = (price18Carat) => {
    return Math.floor(1.221 * price18Carat);
}

const twentyFourCarat = (price18Carat) => {
    return Math.floor(1.332 * price18Carat);
}