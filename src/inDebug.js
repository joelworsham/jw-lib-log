const debug = process.env.DEBUG || '';
const debugNamespace = process.env.JW_LOG_NAMESPACE;

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
  || (!strict && ['*', debugNamespace].includes(debug))
  // current debug mode matches namespace
  || debug.debug.split(',').includes(`${debugNamespace}:${namespace}`)
);
