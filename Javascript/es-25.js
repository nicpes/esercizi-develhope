const person = {

    get first(){
        return this._firstName;
    },
    set first(name){
        this._firstName = name;
    },
    get last(){
        return this._lastName;
    },
    set last(lastname){
        this._lastName = lastname;
    },

    fullName(){
        return `${this.first} ${this.last}`;
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
