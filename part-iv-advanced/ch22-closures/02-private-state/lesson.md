# Private state with closures

A closure can act as a small private module. The outside code receives functions that can use the hidden binding, but it does not receive the binding itself.

```javascript
function makeAccount(startingBalance) {
  let balance = startingBalance;

  return {
    deposit(amount) {
      balance += amount;
    },
    getBalance() {
      return balance;
    }
  };
}

const account = makeAccount(25);
console.log("balance: " + account.getBalance());
account.deposit(15);
console.log("after deposit: " + account.getBalance());
```

```text
balance: 25
after deposit: 40
```

The returned object has two methods. Both methods close over the same balance binding. Code outside the closure can call deposit and getBalance, but it cannot directly write account.balance because that property does not exist.

> Private state is data that callers cannot change directly. A closure can expose carefully chosen operations instead of exposing the binding itself.

## Try it Yourself

Add a withdraw method that refuses to subtract more than the current balance. Create two accounts and show that their balances remain independent.

---

