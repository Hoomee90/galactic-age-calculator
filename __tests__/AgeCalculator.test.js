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

  test(`newAge should replace the age property with something new`, () => {
    ageCalculator.newAge(413);
    expect(ageCalculator.age).toEqual(413);
  });
});

describe(`getAge`, () => {

  test(`should return age property value when given either 'earth' or 0` , () => {
    expect(ageCalculator.getAge(`earth`)).toEqual(18);
    expect(ageCalculator.getAge(0)).toEqual(18);
  });
});