const moment = require('moment');

const debugNamespace = process.env.JW_LOG_NAMESPACE;

/**
 * Prepares the message string for logging, adding the namespace prefix and any indentation.
 *
 * @param {String} message Message text
 * @param {String} namespace Optional namespace, so message only shows if set in debug
 * @param {Boolean} hideNamespace Hides the namespace from the log if true
 * @param {Boolean} hideTimestamp Hides the timestamp from the log if true
 * @param {Number} indent Indentation for message
 * @returns {String} Final message to be logged
 */
module.exports = (
  message,
  {
    namespace = undefined,
    hideNamespace = false,
    hideTimestamp = false,
    indent = 0,
  } = {},
) => {
  const indentStr = new Array(indent + 1).join(' ');
  const timestampStr = hideTimestamp ? '' : `${moment().format('HH:mm:ss:SSS')} `;
  const prefixStr = hideNamespace ? '' : `${debugNamespace}${namespace ? `:${namespace} ` : ''}`;
  return `${timestampStr}${indentStr}${prefixStr} ${message}`;
};
