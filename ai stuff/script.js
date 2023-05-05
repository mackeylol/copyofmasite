const cheerio = require('cheerio');
const express = require('express');
const app = express();

app.get('/search', (req, res) => {
  const searchTerm = req.query.q;
  const html = '<html><body><p>some text to search</p></body></html>';

  const $ = cheerio.load(html);
  const matchingElements = $('body').find(`:contains('${searchTerm}')`);
  // Do something with the matching elements, such as send them back as a response
});
