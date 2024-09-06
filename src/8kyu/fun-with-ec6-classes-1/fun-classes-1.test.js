const { assert } = require('chai');
describe("Example Tests", () => {
  it("should have the correct defaults", () => {
    let john = new Person();
    assert.strictEqual(john.firstName, "John");
    assert.strictEqual(john.lastName, "Doe");
    assert.strictEqual(john.age, 0);
    assert.strictEqual(john.gender, "Male");
    assert.strictEqual(john.sayFullName(), "John Doe");
  });
  it("should work with a person Jane Doe", () => {
    let jane = new Person("Jane", "Doe", 25, "Female");
    assert.strictEqual(jane.firstName, "Jane");
    assert.strictEqual(jane.lastName, "Doe");
    assert.strictEqual(jane.age, 25);
    assert.strictEqual(jane.gender, "Female");
    assert.strictEqual(jane.sayFullName(), "Jane Doe");
  });
  it("should have the class method", () => {
    assert.strictEqual(Person.greetExtraTerrestrials("Martians"), "Welcome to Planet Earth Martians");
  });
});