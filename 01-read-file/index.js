const fs = require('fs');
const path = require('path');

const pathTextFile = path.join(__dirname, 'text.txt');
const stream = new fs.createReadStream(pathTextFile, 'utf-8');

let data = '';

stream.on('data', chunk => data += chunk);
stream.on('data', data => console.log(data))
stream.on('error', error => console.log('Error', error.message));
