const traverseNode = ({ node, parent, visitor }) => {
  const { enter, exit } = visitor[node.type] || {};

  if (enter) {
    enter({ node, parent });
  }

  if (node.arguments) {
    traverseArray({ array: node.arguments, parent: node, visitor });
  }

  if (exit) {
    exit({ node, parent });
  }
};

const traverseArray = ({ array, parent, visitor }) => {
  array.forEach(node => {
    traverseNode({ node, parent, visitor });
  });
};

const traverse = (node, visitor) => {
  traverseNode({ node, visitor });
};

module.exports = { traverse };
