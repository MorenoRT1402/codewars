import { customChristmasTree } from "./customChristmassTree";

describe("Custom Christmas Tree", () => {
    it("should work for basic tests.", () => {
        expect(customChristmasTree("*@o", 3)).toBe(`  *
 @ o
* @ o
  |`);

        expect(customChristmasTree("*@o", 6)).toBe(`     *
    @ o
   * @ o
  * @ o *
 @ o * @ o
* @ o * @ o
     |
     |`);

        expect(customChristmasTree("1234", 6)).toBe(`     1
    2 3
   4 1 2
  3 4 1 2
 3 4 1 2 3
4 1 2 3 4 1
     |
     |`);

        expect(customChristmasTree("123456789", 3)).toBe(`  1
 2 3
4 5 6
  |`);
    });
});
