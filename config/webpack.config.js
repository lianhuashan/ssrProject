const client = require('./webpack.client');
const server = require('./webpack.server');

module.exports = {
  client: { ...client },
  server: { ...server }
};
