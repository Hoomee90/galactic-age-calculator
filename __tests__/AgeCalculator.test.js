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
    expect(ageCalculator.getPlanetMod(2)).toEqual(1);
  });

  test(`newAge should replace the age property with something new`, () => {
    ageCalculator.newAge(413);
    expect(ageCalculator.age).toEqual(413);
  });
});

describe(`getAge`, () => {

  test(`should return age property value properly modified when given either 'mercury' or 0` , () => {
    expect(ageCalculator.getAge(`mercury`)).toBeCloseTo(75);
    expect(ageCalculator.getAge(0)).toBeCloseTo(75);
  });

  test(`should return age property value properly modified when given either 'venus' or 1` , () => {
    expect(ageCalculator.getAge(`venus`)).toBeCloseTo(29.032);
    expect(ageCalculator.getAge(1)).toBeCloseTo(29.032);
  });

  test(`should return age property value unchanged when given either 'earth' or 2` , () => {
    expect(ageCalculator.getAge(`earth`)).toEqual(18);
    expect(ageCalculator.getAge(2)).toEqual(18);
  });

  test(`should return age property value unchanged when given either 'earth' or 2` , () => {
    expect(ageCalculator.getAge(`mars`)).toBeCloseTo(9.574);
    expect(ageCalculator.getAge(3)).toBeCloseTo(9.574);
  });

  test(`should return age property value unchanged when given either 'earth' or 2` , () => {
    expect(ageCalculator.getAge(`jupiter`)).toBeCloseTo(1.636);
    expect(ageCalculator.getAge(4)).toBeCloseTo(1.636);
  });
});

describe(`ageDifference`, () => {

  test(`should return difference between the inputted age and age property` , () => {
    expect(ageCalculator.ageDifference(14)).toBe(4);
    expect(ageCalculator.ageDifference(21)).toBe(3);
  });
});
