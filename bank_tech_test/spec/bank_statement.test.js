const BankStatement = require("../bank_statement")

describe("BankStatement", () => {
  it("shows 0 balance if no transactions have been made", () => {
    const bankStatement = new BankStatement

    expect(bankStatement.currentBalance()).toEqual(0)
  });


  it("adds transactions to the bank balance", () => {
    const bankStatement = new BankStatement

    bankStatement.addTransaction(new Transaction("deposit", 500))
    bankStatement.addTransaction(new Transaction("deposit", 500))
    bankStatement.addTransaction(new Transaction("withdraw", 200))
    expect(bankStatement.currentBalance()).toEqual(800)
  });


  it("prints a statement for the user", () => {
    const bankStatement = new BankStatement

    bankStatement.addTransaction(new Transaction("deposit", 500))
    bankStatement.currentBalance()
    expect(bankStatement.statement()).toContain("Tue Jan 24 2023  ||  500  ||  0  ||  500")
  });

});