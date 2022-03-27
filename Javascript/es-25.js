const person = {
   firstName : "",
   lastName : "",

    get first(){
        return this.firstName;
    },
    set first(name){
        this.firstName = name;
    },
    get last(){
        return this.lastName;
    },
    set last(lastname){
        this.lastName = lastname;
    },

    fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
  };

let john = Object.create(person)
let simon = Object.create(person)

john.first = "John";
john.last = "Doe";

simon.first = "Simon"
simon.last = "Collins"

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins
