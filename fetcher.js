const fs = require('fs');
const request = require('request');

const url = process.argv[2];
const path = process.argv[3];

request (url, (error, response, body) => {
  console.log('error: ', error);
  fs.writeFile(`${path}`, body, function(error) {
    if (error) {
      console.log('error: ', error);
    } else {
      console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${path}`);
    }
  });
});