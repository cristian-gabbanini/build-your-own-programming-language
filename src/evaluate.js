const { environment } = require('./standard-library');
const last = collection => collection[collection.length - 1];

const apply = node => {
  const fn = environment[node.name];
  const args = node.arguments.map(evaluate);
  if (typeof fn !== 'function') {
    throw new TypeError(`❌ ${node.name} is not a function`);
  }
  return fn(...args);
};

const getIdentifier = node => {
  const identifier = environment[node.name];
  if (typeof identifier === 'undefined') {
    throw new ReferenceError(`❌ ${node.type} is not defined`);
  }
  return identifier;
};

const define = node => {
  environment[node.identifier.name] = node.assignment.value;
};

const evaluate = node => {
  if (node.type === 'VariableDeclaration') return define(node);

  if (node.type === 'CallExpression') return apply(node);

  if (node.type === 'Identifier') return getIdentifier(node);

  if (node.value) return node.value;
};

module.exports = { evaluate };
