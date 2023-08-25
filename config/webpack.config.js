const client = require('./webpack.client');
const server = require('./webpack.server');

module.exports = [
  { name: 'client', ...client },
  { name: 'server', ...server }
];
