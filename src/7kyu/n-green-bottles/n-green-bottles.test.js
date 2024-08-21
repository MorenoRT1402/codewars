import { assertEquals } from '@codewars/test-compat';

describe("ExampleTests", function() {

  it("ex", function() {
    const expected = 
    "Two green bottles hanging on the wall,\n"+
    "Two green bottles hanging on the wall,\n"+
    "And if one green bottle should accidentally fall,\n"+
    "There'll be one green bottle hanging on the wall.\n"+
    "\n"+
    "One green bottle hanging on the wall,\n"+
    "One green bottle hanging on the wall,\n"+
    "If that one green bottle should accidentally fall,\n"+
    "There'll be no green bottles hanging on the wall.\n";
    // actual, expected
    assertEquals(tenGreenBottles(2), expected);
  });
  
});