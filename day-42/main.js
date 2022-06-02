class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
      }
    display() {
        console.log(`Name: ${this.name}, Age:${this.age}, Gender:${this.gender}`);
    }
  }
module.exports = Person;