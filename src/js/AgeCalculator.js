export default class AgeCalculator {
  constructor(age) {
    this.age = parseInt(age);
    this.planetModifiers = new Map([[`mercury`, 0.24], [`venus`, 0.62], [`earth`, 1], [`mars`, 1.88], [`jupiter`, 11]]);
  }

  getPlanetMod(planet) {
    const planetMod = this.planetModifiers.has(planet) ? this.planetModifiers.get(planet) : [...this.planetModifiers.values()][planet];
    
    return planetMod;
  }

  newAge(age) {
    this.age = parseInt(age);
  }

  getAge(planet) {
    const planetMod = this.getPlanetMod(planet);

    return this.age / planetMod;
  }

  yearsUntil(ageInput, planet = `earth`) {
    const difference = ageInput - this.age
    const planetMod = this.getPlanetMod(planet);

    return (difference / planetMod);
  }

  ageDifference(ageInput, planet = `earth`) {
    const difference = this.yearsUntil(ageInput, planet);

    return difference < 0 ?  (`${Math.abs(difference)} ${planet} years have passed since you were ${ageInput} years old`) : (`you will turn ${ageInput} in ${difference} ${planet} years`);
  }

  numToLang(num) {
    if (num >= 1000) {
      return `many, many`
    }

    let separatedNum = Number((num)).toFixed(1).split(``);
    const decimalIndex = separatedNum.indexOf(`.`);
    let large = false;

    if (decimalIndex !== -1) {
      separatedNum.splice(decimalIndex, 1);
      if (separatedNum.length === 2) {
        separatedNum.unshift(`0`);
      }
    } else {
      large = true;
    }

    const numWords = new Map ([
      [0, ``],
      [1, `one`],
      [2, `two`],
      [3, `three`],
      [4, `four`],
      [5, `five`],
      [6, `six`],
      [7, `seven`],
      [8, `eight`],
      [9, `nine`]
    ])
    return separatedNum;
  }
}