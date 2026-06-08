class bank
{
    #balance;
    constructor(owner,balance)
    {
        this.owner = owner;
        this.#balance = balance;
    }
    get balance()
    {
        return this.#balance;
    }
    set balance(amount)
    {
        if (amount >= 0)
        {
            this.#balance = amount;
        }
    }
    deposit(amount)
    {
        this.balance += amount;
    }
}
const acc = new bank("Divya",10000);
acc.deposit(500);
console.log(acc.balance)