const prepareMessage = require('../prepareMessage');

let message = 'Hi there.';

describe('Prepare Message', () => {
  it('has a "HH::mm::ss::SSS sippable" timestamp prefix', () => {
    expect(prepareMessage(message)).toEqual(
      expect.stringMatching(/^(\d+):(\d+):(\d+):(\d+) sippable/)
    );
  });

  it('ends with the message', () => {
    expect(prepareMessage(message)).toEqual(
      expect.stringMatching(new RegExp(`${message}$`))
    );
  })

  it('can hide the timestamp', () => {
    expect(prepareMessage(message, { hideTimestamp: true })).toEqual(
      expect.not.stringMatching(/^(\d+):(\d+):(\d+):(\d+)/)
    );
  });

  it('can hide the namespace', () => {
    expect(prepareMessage(message, { hideNamespace: true })).toEqual(
      expect.not.stringContaining('sippable')
    )
  });

  it('can indent', () => {
    expect(prepareMessage(message, { indent: 2 })).toEqual(
      expect.stringMatching(/ {3}sippable/) // includes the initial space
    );
  })
});
