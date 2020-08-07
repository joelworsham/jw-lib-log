const config = require('../config');

/**
 * Determines if the namespace passed is in the current DEBUG configuration.
 *
 * @param {String} namespace Debug namespace
 * @param {Boolean} strict If true, must be exact namespace match.
 * @returns {Boolean}
 */
module.exports = (namespace, strict = false) => (
  // no namespace, always show
  !namespace
  // wildcard/global-namespace
  || (!strict && ['*', 'sippable'].includes(config.debug))
  // current debug mode matches namespace
  || config.debug.split(',').includes(`sippable:${namespace}`)
);
