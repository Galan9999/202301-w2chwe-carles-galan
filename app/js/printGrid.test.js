import printGrid from "./printGrid";

describe("Given pirntGrid function", () => {
  describe("When it receives 1 row and 1 column", () => {
    test("Then it should return and array with 1 object", () => {
      const rows = 1;
      const columns = 1;

      const expectedArray = [[{}]];

      const arrayGenerated = printGrid(rows, columns);
      expect(arrayGenerated).toEqual(expectedArray);
    });
  });
});
