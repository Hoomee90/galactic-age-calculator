export default class AgeCalculator {
  constructor(age) {
    this.age = parseInt(age);
    this.planetModifiers = new Map([[`mercury`, 0.24], [`venus`, 0.62], [`earth`, 1]]);
  }

  getPlanetMod(planet) {
    const planetMod = this.planetModifiers.has(planet) ? this.planetModifiers.get(planet) : [...this.planetModifiers.values()][planet];
    
    return planetMod;
  }

  newAge(age) {
    this.age = parseInt(age);
  }

  getAge(planetInput) {

    const planetMod = this.getPlanetMod(planetInput);

    return this.age * planetMod;
  }
}