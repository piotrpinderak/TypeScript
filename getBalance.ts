/**
 * Create a BankAccount class that :
 *
 * - Has a balance field of type number, initialized in the constructor
 * - Includes a deposit(amount: number) method that increases the balance
 * - Includes a withdraw(amount: number) method that decreases the balance (if sufficient funds are available)
 * - Includes a getBalance() method that returns the current balance
 *
 * Test data:
 * 1. Create an account with a balance of 100
 * 2. Deposit 50
 * 3. Withdraw 30
 * 4. Withdraw 200 (too much – balance remains unchanged)
 * 5. Check the balance
 */

/**
 * Class representing a bank account with basic operations.
 */
class BankAccount {
  private balance: number;

  // Constructor initializes the account with a starting balance
  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  // Method to deposit money into the account
  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  // Method to withdraw money if sufficient funds are available
  withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
    }
  }

  // Method to get the current balance
  getBalance(): number {
    return this.balance;
  }
}

// Test data
const account = new BankAccount(100);
account.deposit(50);
account.withdraw(30);
account.withdraw(200);
console.log(account.getBalance());
