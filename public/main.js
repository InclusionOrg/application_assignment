fetch('/quote')
  .then(r => r.json())
  .then(data => {
    var quotes = require('random-movie-quotes')
console.log(quotes.getQuote())
    document.getElementById('quote').innerText = data.quote;
  });