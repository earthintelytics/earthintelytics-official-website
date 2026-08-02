const fs = require('fs');
const https = require('https');
const path = require('path');

const url = 'https://www.okomunigeria.com/images/logo.png';
const outPath = path.join(__dirname, 'public', 'clients', 'okomu.png');

https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' } }, (res) => {
    if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(outPath));
        console.log('Logo downloaded successfully.');
    } else {
        console.log(`Failed to download: ${res.statusCode}`);
    }
}).on('error', (err) => {
    console.error(`Error: ${err.message}`);
});
