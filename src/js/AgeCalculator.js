export default class AgeCalculator {
  constructor(age) {
    this.age = parseInt(age);
    this.planetModifiers = new Map([[`earth`, 1]])
  }

  newAge(age) {
    this.age = parseInt(age)
  }

  getAge(planetInput) {
    const planet = this.planetModifiers.has(planetInput) ? planetInput : Array.from(this.planetModifiers)[planetInput][0];
    
    const calculatedAge = this.age * this.planetModifiers.get(planet);

    return calculatedAge;
  }
}