const quotes = require("random-movie-quotes");

module.exports = () => {
  return quotes.getQuote();
}
