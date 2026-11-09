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
