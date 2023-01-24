const Transaction = require("../transaction")

describe("Transaction", () => {
  it("withdraw returns type as debit", () => {
    const transaction = new Transaction("withdraw", 500)

    expect(transaction.getType()).toBe("debit")
  });


  it("deposit returns type as credit", () => {
    const transaction = new Transaction("deposit", 500)

    expect(transaction.getType()).toBe("credit")
  });


  it("returns the correct transaction amount", () => {
    const transaction = new Transaction("withdraw", 500)

    expect(transaction.getAmount()).toEqual(500)
  });


  it("returns the updated bank balance", () => {
    const transaction = new Transaction("withdraw", 500)
    
    transaction.calculateBalance(1000)
    expect(transaction.getBalance()).toEqual(500)
  });


  it("returns the updated bank balance", () => {
    const transaction = new Transaction("deposit", 500)
    
    transaction.calculateBalance(1000)
    expect(transaction.getBalance()).toEqual(1500)
  });
});