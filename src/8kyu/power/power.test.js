const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(numberToPower(4, 2), 16);
    assert.strictEqual(numberToPower(10, 4), 10000);
    assert.strictEqual(numberToPower(10, 0), 1);
  });
});