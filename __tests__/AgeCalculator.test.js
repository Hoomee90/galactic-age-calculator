import AgeCalculator from "../src/js/AgeCalculator"

let ageCalculator;

  beforeEach(() => {
    ageCalculator = new AgeCalculator(18);
  });

describe(`AgeCalculator`, () => {

  test(`should correctly create an Age Calculator object` , () => {
    expect(typeof ageCalculator).toEqual(`object`);
  });

  test(`should have an age property equal to inputted age argument`, () => {
    expect(ageCalculator.age).toEqual(18);
  });

  test(`getPlanetMod should return the proper modifier for the inputted planet name or num`, () => {
    expect(ageCalculator.getPlanetMod(`earth`)).toEqual(1);
    expect(ageCalculator.getPlanetMod(0)).toEqual(1);
  });

  test(`newAge should replace the age property with something new`, () => {
    ageCalculator.newAge(413);
    expect(ageCalculator.age).toEqual(413);
  });
});

describe(`getAge`, () => {

  test(`should return age property value properly modified when given either 'mercury' or 0` , () => {
    expect(ageCalculator.getAge(`mercury`)).toEqual(18);
    expect(ageCalculator.getAge(0)).toEqual(18);
  });

  test(`should return age property value properly modified when given either 'venus' or 1` , () => {
    expect(ageCalculator.getAge(`venus`)).toEqual(18);
    expect(ageCalculator.getAge(1)).toEqual(18);
  });

  test(`should return age property value unchanged when given either 'earth' or 2` , () => {
    expect(ageCalculator.getAge(`earth`)).toEqual(18);
    expect(ageCalculator.getAge(2)).toEqual(18);
  });
});