import { countCorrectCharacters, differentLengthsError } from "./guessTheWord";

describe("Guess the Word: Count Matching Letters", () => {
  it('should throw an error when guess & correct word has different lengths', () => {
    expect(() => countCorrectCharacters("dog", "doggy")).toThrow(new Error(differentLengthsError));
  })
  it('should return number of characters in correct position', () => {
    expect(countCorrectCharacters('dog', 'car')).toBe(0);
    expect(countCorrectCharacters('dog', 'god')).toBe(1);
    expect(countCorrectCharacters('dog', 'cog')).toBe(2);
    expect(countCorrectCharacters('dog', 'cod')).toBe(1);
    expect(countCorrectCharacters('dog', 'bog')).toBe(2);
    expect(countCorrectCharacters('dog', 'dog')).toBe(3);
  })
})