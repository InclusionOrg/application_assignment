const quote = require("../lib/quote");

test('Returns a string', () => {
  expect(typeof quote()).toBe('string');
});

test('Returns something truthy', () => {
  expect(quote()).toBeTruthy();
});

