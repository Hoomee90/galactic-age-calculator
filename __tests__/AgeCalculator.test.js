import AgeCalculator from "../src/js/AgeCalculator"

describe(`AgeCalculator`, () => {

  let ageCalculator;

  beforeEach(() => {
    ageCalculator = new AgeCalculator();
  });

  test(`should correctly create an Age Calculator object` , () => {
    expect(typeof ageCalculator).toEqual(`object`);
  });
});