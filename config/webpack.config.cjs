const client = require('./webpack.client.cjs');
const server = require('./webpack.server.cjs');

module.exports = [
  { name: 'client', ...client },
  { name: 'server', ...server }
];
