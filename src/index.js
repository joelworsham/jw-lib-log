const log = require('./log');
const theme = require('./theme');

/**
 * Sends a debug message to the log. Will only display if DEBUG has the passed namespace.
 *
 * E.G. ep:routes
 *
 * @param {String} message Message text
 * @param {String} namespace Optional namespace to append to `ep`
 * @param {Object|Array} json Optional object/array to stringify to JSON and show under message
 * @param {Number} indent Indentation for message
 * @param {Boolean} display If false, will return message, rather than display to console
 */
const debug = (
  message,
  namespace = undefined,
  {
    json = undefined,
    indent = 0,
    display = true,
  } = {},
) => (
  log({
    themeFn: theme.debug,
    message,
    options: {
      json,
      indent,
      namespace,
      display,
      debug: true,
    },
  })
);

/**
 * Sends a success message to the log.
 *
 * @param {String} message Message text
 * @param {String} namespace Optional namespace, so message only shows if set in debug
 * @param {Object|Array} json Optional object/array to stringify to JSON and show under message
 * @param {Number} indent Indentation for message
 * @param {Boolean} display If false, will return message, rather than display to console
 * @param {Boolean} hideNamespace Hides the namespace from the log if true
 * @param {Boolean} hideTimestamp Hides the timestamp from the log if true
 */
const success = (
  message,
  namespace = undefined,
  {
    json = undefined,
    indent = 0,
    display = true,
    hideNamespace = false,
    hideTimestamp = false,
  } = {},
) => (
  log({
    themeFn: theme.success,
    message,
    options: {
      json,
      indent,
      namespace,
      display,
      hideNamespace,
      hideTimestamp,
    },
  })
);

/**
 * Sends an informative message to the log.
 *
 * @param {String} message Message text
 * @param {String} namespace Optional namespace, so message only shows if set in debug
 * @param {Object|Array} json Optional object/array to stringify to JSON and show under message
 * @param {Number} indent Indentation for message
 * @param {Boolean} display If false, will return message, rather than display to console
 * @param {Boolean} hideNamespace Hides the namespace from the log if true
 * @param {Boolean} hideTimestamp Hides the timestamp from the log if true
 */
const inform = (
  message,
  namespace = undefined,
  {
    json = undefined,
    indent = 0,
    display = true,
    hideNamespace = false,
    hideTimestamp = false,
  } = {},
) => (
  log({
    themeFn: theme.inform,
    message,
    options: {
      json,
      indent,
      namespace,
      display,
      hideNamespace,
      hideTimestamp,
    },
  })
);

/**
 * Explains something to the user in a separated block of content, without a namespace.
 *
 * @param {String} message Message text
 * @param {String} namespace Optional namespace, so message only shows if set in debug
 * @param {Boolean} display If false, will return message, rather than display to console
 */
const explain = (
  message,
  {
    display = true,
  } = {},
) => (
  log({
    themeFn: theme.inform,
    message: (
      `\n============================================\n${
        message
      }\n============================================\n`
    ),
    options: {
      display,
      hideNamespace: true,
      hideTimestamp: true,
    },
  })
);

/**
 * Sends an error message to the log.
 *
 * @param {String} message Message text
 * @param {String} namespace Optional namespace, so message only shows if set in debug
 * @param {Error} errorObj Optional error object, used in stack tracing
 * @param {Object|Array} json Optional object/array to stringify to JSON and show under message
 * @param {Number} indent Indentation for message
 * @param {Boolean} display If false, will return message, rather than display to console
 * @param {Boolean} shouldThrow Throws an Error if true.
 * @param {Boolean} hideNamespace Hides the namespace from the log if true
 * @param {Boolean} hideTimestamp Hides the timestamp from the log if true
 */
const error = (
  message,
  namespace = undefined,
  errorObj = undefined,
  {
    json = undefined,
    indent = 0,
    display = true,
    shouldThrow = false,
    hideNamespace = false,
    hideTimestamp = false,
  } = {},
) => {
  log({
    themeFn: theme.error,
    message,
    options: {
      json,
      indent,
      namespace,
      error: errorObj,
      display,
      hideNamespace,
      hideTimestamp,
    },
  });

  if (shouldThrow) throw errorObj;
};

module.exports = {
  debug,
  inform,
  explain,
  error,
  success,
};
