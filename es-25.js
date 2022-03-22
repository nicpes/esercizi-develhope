const person = {
   
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

    fullName : function(){
        return `${this.firstName} ${this.lastName}`;
    }
  };

let john = Object.assign({}, person)
let simon = Object.assign({}, person)

john.firstName = "John";
john.lastName = "Doe";

simon.firstName = "Simon"
simon.lastName = "Collins"

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins