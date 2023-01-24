const Transaction = require ("./transaction")

class BankStatement {

  constructor() {
    this.transactions = []
  }

  addTransaction = (transaction) => {
    transaction.calculateBalance(this.currentBalance())
    this.transactions.push(transaction)
  }

  currentBalance = () => {
    let balance = 0
    this.transactions.forEach(transaction => {
      if (transaction.getType() === "debit") {
        balance -= transaction.getAmount()
      } else if (transaction.getType() === "credit") {
        balance += transaction.getAmount()
      }
    });
    return balance
  }

  statement = () => {
    console.log("date || credit || debit || balance")
    this.transactions.reverse().forEach(transaction => {
      let credit = 0
      let debit = 0
      if (transaction.getType() === "credit") {
        credit = transaction.getAmount()
      } else if (transaction.getType() === "debit") {
        debit = transaction.getAmount()
      }
      console.log(`${transaction.getDate()}  ||  ${credit}  ||  ${debit}  ||  ${transaction.getBalance()}`)
    })
  }
}


module.exports = BankStatement;
