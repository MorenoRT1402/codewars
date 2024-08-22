const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Disgruntled Employee", () => { 
  it("Fixed tests", () => {
    assert.deepEqual(off(1), [1]);
    assert.deepEqual(off(2), [1]);
    assert.deepEqual(off(4), [1,4]);
    assert.deepEqual(off(9), [1,4,9]);
  });
});