function createElement(data) {
  let paragraph = document.createElement("p");
  paragraph.content = data;
  document.body.appendChild(paragraph);
}

const https = require('https');

function queryWikipedia(callback) {
  https.get('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*', (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      let response = JSON.parse(data);
      let extract = response.query.pages[0].extract;
      callback(extract);
    });
  });
};

  queryWikipedia(createElement);