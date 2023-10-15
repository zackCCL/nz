const ServerError = require('../../lib/error');
const loggers = require('../loggers');
var pjson = require('../../../package.json');
/**
 * @param {Object} options
 * @throws {Error}
 * @return {Promise}
 */
module.exports.getVerson = async (options) => {
  // Implement your business logic here...
  //
  // This function should return as follows:
  //
  // return {
  //   status: 200, // Or another success code.
  //   data: [] // Optional. You can put whatever you want here.
  // };
  //
  // If an error happens during your business logic implementation,
  // you should throw an error as follows:
  //
  // throw new ServerError({
  //   status: 500, // Or another error code.
  //   error: 'Server Error' // Or another error message.
  // });

  let i = 0;
  while (i < 5) {
    setTimeout(() => {
      loggers().debug(`getVerson service`);
    }, Math.random() * 1000 * 2);
    i++;
  }

  return {
    status: 200,
    data: { version: pjson.version }
  };
};

