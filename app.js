const { google } = require('googleapis');
const sheets = google.sheets('v4');
const key = require('./credentials.json/sheetKey.json');

let goldPrice18K;
let values;

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
  // Access your Google Sheet here

    sheets.spreadsheets.values.get({
        auth: jwtClient,
        spreadsheetId: '1LYmg6F0AtZelZC2RdITRioRGJigqFLMC3saVDzoeV08',
        range: 'Price'
    }, (err, response) => {
        if (err) {
            console.error('The API returned an error:', err);
            return;
        }
        values = response.data.values;
        goldPrice18K = response.data.values;
        if (values.length) {
            console.log('Data from Google Sheet:');
            values.forEach((row) => {
                console.log(row);
            });
        } else {
            console.log('No data found in Google Sheet.');
        }
    });
});

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


wait(2000).then(() => {
    console.log(goldPrice18K);
    const twentyTwoCarat = (price18Carat) => {
        return price = Math.floor(1.221 * price18Carat);
    }
    
    const twentyFourCarat = (price18Carat) => {
        return price = Math.floor(1.332 * price18Carat);
    }
    
    var ttcp = twentyTwoCarat(goldPrice18K);
    console.log(ttcp);
});


