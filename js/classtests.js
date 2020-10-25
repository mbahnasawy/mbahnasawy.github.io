"use strict"

describe("Savings Account",()=>{

    let acc = new SavingsAccount(15235);
    it("Create Savings Account: Account Number 15235",()=>{
        assert.equal(acc.toString(),"Savings Account 15235: balance 0: Interest 0");
    });
    it("Add 1000 balance and Interest 12%",()=>{
        acc.deposit(1000);
        acc.setInterest(12);
        assert.equal(acc.toString(),"Savings Account 15235: balance 1000: Interest 12")
    });
    it("Add Interest -> balance = 1120",()=>{
        acc.addInterest();
        assert.equal(acc._balance,1120);
    });

});

describe("Checking Account",()=>{

    let acc = new CheckingAccount(611071,500);
    acc.deposit(1000);
    it("Create Savings : Account Number 611071, balance 1000, overdraft limit 500 ",()=>{
        assert.equal(acc.toString().trim(),"Checking Account 611071: balance 1000: OverDraft 500".trim());
    });
    it("withdraw 600 from Checking account 611071 --> balance: 400",()=>{
        acc.withdraw(600);
        assert.equal(acc.getBalance(),400);
    });
    it("Withdraw 1000 more than the overdraft limit throws RangeError",()=>{
        assert.throws(()=>{acc.withdraw(1000)},RangeError);
    });

});

describe("Bank",()=>{
    const midWest = new Bank();
    it("add new normal Account ",()=>{
        assert.equal(midWest.addAccount(),1);
    });
    it("add new Checking Account with overdraft 500",()=>{
        assert.equal(midWest.addCheckingAccount(500),2);
    });
    it("add new Savings Account with interest 2.5%",()=>{
        assert.equal(midWest.addSavingsAccount(2.5),3);
    });
    it("Account Report",()=>{
        assert.equal(midWest.accountReport().trim().replace(/(\n)/gm,""),"Account 1: balance 0Checking Account 2: balance 0: OverDraft 500Savings Account 3: balance 0: Interest 2.5".trim());
    });
    it("Remove Account number 1",()=>{
       midWest.closeAccount(1);
       assert.equal(midWest.accountReport().trim().replace(/(\n)/gm,""),"Checking Account 2: balance 0: OverDraft 500Savings Account 3: balance 0: Interest 2.5".trim());
    });
});

describe("End of Month method",()=>{
    const midWest2 = new Bank();
    it("add new 3 acounts",()=>{
        midWest2.addAccount();
        midWest2.addCheckingAccount(500);
        midWest2.addSavingsAccount(2.5);
        midWest2._accounts.forEach((a)=>a.deposit(100));
        console.log(midWest2.accountReport());
        midWest2._accounts[1].withdraw(200);
    });
    it("EndOfMonth method",()=>{
        assert.equal(midWest2.endOfMonth().replace(/(\n)/gm,""),"Warning, low balance CheckingAccount 5: balance: -100 overdraft limit: 500Interest added SavingsAccount 6: balance: 102.5 interest: 2.5".trim());
        console.log(midWest2.endOfMonth());
    });
});