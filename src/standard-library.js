const all = fn => (...list) => list.reduce(fn);

const add = all((a, b) => a + b);
const subtract = all((a, b) => a - b);
const multiply = all((a, b) => a * b);
const divide = all((a, b) => a / b);
const modulo = all((a, b) => a % b);
const max = all((a, b) => Math.max(a, b));
const log = console.log;

const environment = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  log,
  max,
  pi: Math.PI,
};

module.exports = { environment };
