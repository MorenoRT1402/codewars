const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertSimilar(horseRacing([1,2,3],[1,2,3]), 2, "2 Vs 1, 3 Vs 2, Tian Ji win 2 times");
Test.assertSimilar(horseRacing([1,2,3],[4,5,6]), 3, "all win");
Test.assertSimilar(horseRacing([4,5,6],[1,2,3]), 0, "all lose");
Test.assertSimilar(horseRacing([1,3,5],[2,4,6]), 3, "2 Vs 1, 4 Vs 3, 6 Vs 5, Tian Ji win 3 times");
Test.assertSimilar(horseRacing([2,4,6],[1,3,5]), 2, "3 Vs 2, 5 Vs 4, Tian Ji win 2 times");
Test.assertSimilar(horseRacing([1,7,8,6,100],[2,37,10,5,8]), 4, "37 Vs 8, 10 Vs 7, 8 Vs 6, 5 Vs 1, Tian Ji win 4 times");
Test.assertSimilar(horseRacing([19,73,15,54,50],[4,19,21,35,95]), 3, 
"95 Vs 73, 35 Vs 19, 21 Vs 15, Tian Ji win 3 times");
var long1=[82,57,86,48,55,23,100,88,99,88,13,83,80,28,28,66,56,100,82,61,63,22,86,38,48,69,34,64,82,43,75],
    long2=[70,44,22,64,78,90,38,55,16,80,63,100,29,60,43,98,35,32,80,56,34,78,5,65,63,5,32,87,77,69,17];
Test.assertSimilar(horseRacing(long1,long2),23,
"100Vs99, 98Vs88, 90Vs88, 87Vs86, 80Vs75, 80Vs69, 78Vs66, 78Vs64, 77Vs63,"+
"70Vs61, 69Vs57, 65Vs56, 64Vs55, 63Vs48, 63Vs48, 60Vs43, 56Vs38, 55Vs34,"+
"44Vs28, 43Vs28, 38Vs23, 35Vs22, 34Vs13, Tian Ji win 23 times");

  });
});
