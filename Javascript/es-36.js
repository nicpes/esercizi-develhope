class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  static fromObject(obj) {
    this.firstName = obj.firstName;
    this.lastName = obj.lastName;
    return new Person(this.firstName, this.lastName);
  }
}

const obj = {
  firstName: "Mario",
  lastName: "Rossi",
};

const person = Person.fromObject(obj);
console.log(`${person.firstName} ${person.lastName}`);
