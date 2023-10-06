const { google } = require('googleapis');
const sheets = google.sheets('v4');
const key = require('./credentials.json/sheetKey.json');

var goldPrice18K;

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
        range: 'Price' // Specify the sheet name or range
    }, (err, response) => {
        if (err) {
            console.error('The API returned an error:', err);
            return;
        }
        const values = response.data.values;
        if (values.length) {
            console.log('Data from Google Sheet:');
            values.forEach((row) => {
                console.log(row);
                goldPrice18K = values;
            });
        } else {
            console.log('No data found in the Google Sheet.');
        }
    });
    
});

console.log(goldPrice18K);

const twentyTwoCarat = (price18Carat) => {
    return price = Math.floor(1.221 * price18Carat);
}

const twentyFourCarat = (price18Carat) => {
    return price = Math.floor(1.332 * price18Carat);
}

