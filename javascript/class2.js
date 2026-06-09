class Bank {
    #balance;

    constructor(owner, balance) {
        this.owner = owner;
        this.#balance = balance;
    }

    get balance() {
        return this.#balance;
    }

    set balance(amount) {
        if (amount >= 0) {
            this.#balance = amount;
        }
    }

    deposit(amount) {
        let previousBalance = this.#balance;
        this.balance += amount;

        console.log("Name            :", this.owner);
        console.log("Previous Balance:", previousBalance);
        console.log("Deposit Amount  :", amount);
        console.log("Current Balance :", this.#balance);
        console.log("----------------------------");
    }
}

const acc1 = new Bank("Divya", 10000);
acc1.deposit(600);

const acc2 = new Bank("Kaviya", 15000);
acc2.deposit(1000);

const acc3 = new Bank("Priya", 20000);
acc3.deposit(2000);