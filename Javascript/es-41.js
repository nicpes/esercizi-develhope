class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if (amount < 0) {
      throw new Error("negative number");
    } else {
      this.#amount += amount;
    }
  }

  withdraw(amount) {
    if (amount < 0) {
      throw new Error("negative number");
    } else if (amount > this.#amount) {
      throw new Error("can't withdraw the selected import");
    } else {
      this.#amount -= amount;
    }
  }

  view() {
    console.log(this.#amount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000);
bankAccount.view();
