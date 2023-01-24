class Transaction {

  constructor(type, amount) {
    this.date = (new Date (Date.now())).toDateString();
    this.type = type
    this.amount = amount
    this.balance = 0
  }

  getType = () => {
    if (this.type === "withdraw") {
      return "debit"
    } else if (this.type === "deposit") {
      return "credit"
    } else {
      throw "Invalid. Please type `withdraw` or `deposit`"
    }
  }

  getAmount = () => {
    return this.amount
  }

  getDate = () => {
    return this.date
  }

  calculateBalance = (previousBalance) => {
    if (this.type === "withdraw") {
      this.balance = previousBalance - this.amount
    } else if (this.type === "deposit") {
      this.balance = previousBalance + this.amount
    } else {
      throw "Invalid. Please type `withdraw` or `deposit`"
    }
  }

  getBalance = () => {
    return this.balance
  }
}

module.exports = Transaction;
