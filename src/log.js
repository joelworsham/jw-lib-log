const inDebug = require('./inDebug');
const prepareMessage = require('./prepareMessage');
const theme = require('./theme');

/**
 * Logs a message to the console.
 *
 * @param {Function} themeFn Chalk function used to style/display message
 * @param {String} message The message text
 * @param {Object|Array} json Optional object/array to stringify to JSON and show under message
 * @param {Number} indent Indentation for message
 * @param {String} namespace Optional namespace, so message only shows if set in debug
 * @param {Error} error Error object for the log
 * @param {Boolean} display If false, will return message, rather than display to console
 * @param {Boolean} debug If true, will only show if in DEBUG=
 * @param {Boolean} hideNamespace Hides the namespace from the log if true
 * @param {Boolean} hideTimestamp Hides the timestamp from the log if true
 */
module.exports = (
  {
    themeFn,
    message,
    options: {
      json,
      indent = 0,
      namespace,
      error = undefined,
      display = true,
      debug = false,
      hideNamespace = false,
      hideTimestamp = false,
    },
  },
) => {
  const preparedMessage = themeFn(
    prepareMessage(message, {
      namespace,
      indent,
      hideNamespace,
      hideTimestamp,
    }),
  );

  if (display) {
    if (debug && !inDebug(namespace)) return preparedMessage;

    // eslint-disable-next-line no-console
    console.log(preparedMessage);
  } else {
    return preparedMessage;
  }

  if (json) {
    // eslint-disable-next-line no-console
    console.log(
      theme.debug(
        prepareMessage(
          JSON.stringify(json, null, 2),
          {
            hideNamespace: true,
            hideTimestamp: true,
          },
        ),
      ),
    );
  }

  if (error && inDebug(namespace, true)) {
    // eslint-disable-next-line no-console
    console.trace(error);
  }

  return preparedMessage;
};
