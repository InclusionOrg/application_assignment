const express = require("express");
const app = express();
const port = 3000;

const quotes = require("./lib/quote");

app.use(express.static("public"));

app.get("/quote", async (req, res, next) => {
  const quote = await quotes();
  res.json({ quote });
  next();
});

app.listen(port, () => console.log(`Awesome app listening on port ${port}!`));

module.exports = app;
