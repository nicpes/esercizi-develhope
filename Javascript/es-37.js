class BankAccount{
    constructor(total){
        this.total = total
    }
deposit(value) {
    this.total += value
     return this.total
    }
 withdraw(value){
     this.total -= value
     return this.total
    }
    
view(){
    console.log(this.total)
    }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();

