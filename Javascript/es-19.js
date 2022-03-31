const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName = "Simon";

// Modifica la proprietà "firstName" di person2 in "Simon"

console.log(person1);
console.log(person2);

//modificando l'oggetto person2 viene modificato anche l'oggetto person1 perchè in seguito all'assegnazione entrambe le variabili fanno riferimento allo stesso oggetto
