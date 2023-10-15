const config = require('../lib/config');
const logger = require('../lib/logger');
const log = logger(config.logger);
module.exports = (z) => {
    return log.child({ traceId: Zone.current.get('traceId') });
};