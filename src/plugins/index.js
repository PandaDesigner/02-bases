const { getUUID } = require('./get-id.plugin');
const { getAge } = require('./get-age.plugin');
const { httpClient } = require('./http-client.plugin');
const buildLogger = require('./loggers.plugin');

module.exports = {
  getUUID,
  getAge,
  httpClient,
  buildLogger
};
