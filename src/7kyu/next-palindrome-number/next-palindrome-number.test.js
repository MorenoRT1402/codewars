import { assert } from 'chai';

describe("Example Tests", function() {
  it( "Test", () => {
    assert.strictEqual(nextPal(11), 22)
    assert.strictEqual(nextPal(188), 191)
    assert.strictEqual(nextPal(191), 202)
    assert.strictEqual(nextPal(2541), 2552)
  });
});