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
      return `many, many`;
    }
    if (num === 0) {
      return `zero`;
    }

    const units = [`zero`,`one`, `two`, `three`,`four`, `five`, `six`, `seven`,`eight`,`nine`];
    const teens = [`ten`,`eleven`, `twelve`, `thirteen`,`fourteen`, `fifteen`, `sixteen`, `seventeen`,`eighteen`,`nineteen`];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const decimals = ["a tenth", "a fifth", "a third", "two fifths", "a half", "three fifths", "seven tenths", "four fifths", "nine tenths", "ninety"];

    const convertLanguage = (num) => {
      let words = ``;
      if (num > 99) {
        words += `${units[Math.floor(num / 100)]} hundred `;
        num %= 100;
        if (num) {
          words += `and `;
        }
      }
      if (num > 19) {
        words += `${tens[Math.floor(num / 10)]} `;
        num %= 10;
      }
      if (num > 0) {
        words += (num < 10) ? units[num] : teens[num - 10];
      }
      return words.trim();
    }

    let [integer, decimal] = num.toFixed(1).split(`.`);

    let words = convertLanguage(parseInt(integer));
    decimal = parseInt(decimal);

    if (decimal) {
      if (words) {
        words += ` and `
      }
      words += `${decimals[parseInt(decimal) - 1]}`
    }

    return words;
  }
}