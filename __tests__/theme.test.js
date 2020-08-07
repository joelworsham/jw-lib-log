const theme = require('../theme');
const chalk = require('chalk');

describe('Theme', () => {
  it('highlighting', () => {
    expect(theme).toEqual(
      expect.objectContaining({
        error: chalk.bold.red,
        success: chalk.bold.green,
        debug: chalk.bold.gray
      })
    );
  });
});
