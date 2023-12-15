export default class AgeCalculator {
  constructor(age) {
    this.age = parseInt(age);
    this.planetModifiers = new Map([[`earth`, 1]])
  }

  getPlanetMod(planet) {
    const planetMod = this.planetModifiers.has(planet) ? this.planetModifiers.get(planet) : Array.from(this.planetModifiers.values())[planet];
    
    return planetMod;
  }

  newAge(age) {
    this.age = parseInt(age)
  }

  getAge(planetInput) {

    const planetMod = this.getPlanetMod(planetInput);

    return this.age * planetMod;
  }
}