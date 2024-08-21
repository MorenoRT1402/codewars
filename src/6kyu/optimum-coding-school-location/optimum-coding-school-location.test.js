describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(optimumLocation([[3,7],[2,2],[14,1]], 
  [{id: 1, x: 3, y: 4}, {id: 2, x: 8, y: 2}]), 
  "The best location is number 1 with the coordinates x = 3 and y = 4")
  
  Test.assertEquals(optimumLocation([[152,7],[1,211],[14,56],[12,4],[142,7]], 
  [{id: 1, x: 63, y: 55}, {id: 2, x: 55, y: 21},{id: 3, x: 144, y: 12}]), 
  'The best location is number 2 with the coordinates x = 55 and y = 21')
    });
  });
  