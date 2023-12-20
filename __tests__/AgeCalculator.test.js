import AgeCalculator from "../src/js/AgeCalculator"

let ageCalculator = new AgeCalculator(18);

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

describe(`yearsUntil`, () => {

  test(`should return difference between the inputted age and age if no planet is provided` , () => {
    expect(ageCalculator.yearsUntil(14)).toBeCloseTo(-4);
  });
  
  ageCalculator.planetModifiers.forEach((modifier, planet) => {
    test(`should properly return difference between the inputted age and age for ${planet}` , () => {

      expect(ageCalculator.yearsUntil(14, planet)).toBeCloseTo(-(4 / modifier));

      expect(ageCalculator.yearsUntil(21, planet)).toBeCloseTo((3 / modifier));
    });
  });
});

describe(`ageDifference`, () => {
  
  test(`should return difference between the inputted age and age in natural language if no planet is provided` , () => {

    expect(ageCalculator.ageDifference(14)).toEqual(`4 earth years have passed since you were 14 years old`);

    expect(ageCalculator.ageDifference(22)).toEqual(`you will turn 22 in 4 earth years`);
  });

  ageCalculator.planetModifiers.forEach((modifier, planet) => {
    test(`should properly return difference between the inputted age and age for ${planet} in natural` , () => {
      
      expect(ageCalculator.ageDifference(14, planet)).toEqual(`${Math.abs((-4) / modifier)} ${planet} years have passed since you were 14 years old`);

      expect(ageCalculator.ageDifference(22, planet)).toEqual(`you will turn 22 in ${4 / modifier} ${planet} years`);
    });
  });
});

describe(`numToLang`, () => {

  test.each([
    [0, "zero"],
    [0.4, "two fifths"],
    [1, "one"],
    [2.1, "two and a tenth"],
    [3.2, "three and a fifth"],
    [4.3, "four and a third"],
    [5.4, "five and two fifths"],
    [6.5, "six and a half"],
    [7.6, "seven and three fifths"],
    [8.7, "eight and seven tenths"],
    [9.8, "nine and four fifths"],
    [10.11, "ten and a tenth"],
    [11.55, "eleven and three fifths"],
    [13, "thirteen"],
    [21.66666, "twenty one and seven tenths"],
    [90.9, "ninety and nine tenths"],
    [100.123456, "one hundred and a tenth"],
    [201, "two hundred and one"],
    [720, "seven hundred and twenty"],
    [413.612, "four hundred and thirteen and three fifths"],
    [1000, "many, many"]
  ])("should convert %f to natural language", (input, expected) => {
    expect(ageCalculator.numToLang(input)).toEqual(expected);
  });
});