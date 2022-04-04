const persons = [
  {
    id: 1,
    firstName: "Mario",
    lastName: "Rossi",
    age: 25,
  },
  {
    id: 2,
    firstName: "Maria",
    lastName: "Verdi",
    age: 32,
  },
  {
    id: 3,
    firstName: "Giovanni",
    lastName: "Rossi",
    age: 35,
  },
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    persons.forEach((object) => {
      if (object.id === id) {
        resolve(persons.filter((item) => item.id === id));
      } else {
        reject(new Error("Id not valid"));
      }
    });
  });
}

fetchPersonById(1).then((person) => console.log(person));

fetchPersonById(4)
  .then((person) => console.log(person))
  .catch((error) => console.log("Id not valid"));
