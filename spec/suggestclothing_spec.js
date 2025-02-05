import {suggestClothing} from './suggestclothing.js'

// 2) Take a variable with the temperature and another variable with the relative humidity and output a clothing 
     suggestion.
describe("A suite", function() {
    it("chooses clothing for a hot humid day", function() {
      let sClothing =suggestClothing(28,80);
      expect(sClothing).toBe("shorts,t-shirt,birkenstocks");
    });
  });
  describe("A suite", function() {
    it("chooses clothing for a lovely spring day", function() {
      let sClothing =suggestClothing(-3,100);
      expect(sClothing).toBe("toque,boots,heavy coat");
    });
  });
    });
  });
  describe("A suite", function() {
   it("chooses clothing for a lovely spring day", function() {
    let sClothing =suggestClothing(14,35);
    expect(sClothing).toBe("long pants,running shoes,hoodie");
  });
});
  