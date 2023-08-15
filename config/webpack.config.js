const clientDevConfig = require('./webpack.client');
const serverConfig = require('./webpack.server');

module.exports = [
  { name: 'client', ...clientDevConfig },
  { name: 'server', ...serverConfig }
];
