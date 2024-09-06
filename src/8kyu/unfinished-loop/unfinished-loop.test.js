const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Fix Timmys Counter", function() {
  it("Fixed Tests", function() {
    assert.deepEqual(createArray(1),[1]);
    assert.deepEqual(createArray(2),[1,2]);
    assert.deepEqual(createArray(3),[1,2,3]);
    assert.deepEqual(createArray(4),[1,2,3,4]);
    assert.deepEqual(createArray(5),[1,2,3,4,5]);
  });
});