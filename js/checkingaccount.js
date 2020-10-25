class CheckingAccount extends Account {
    constructor(number, overDraft) {
        super(number);
        this._overDraft = overDraft;
    }
    getOverDraft() {
        return this._overDraft;
    }
    setOverDraft(overDraft) {
        this._overDraft = overDraft;
    }
    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        else if (-this._overDraft > this._balance - amount) {
            throw new RangeError("You cannot withdraw more than the overdraft limit");
        }
        this._balance -= amount;
    }
    toString() {
        return "Checking Account " + this._number + ": balance " + this._balance + ": OverDraft " + this._overDraft;
    }
    endOfMonth() {
        return this._balance < 0 ? `Warning, low balance CheckingAccount ${this._number}: balance: ${this._balance} overdraft limit: ${this._overDraft}` : "";
    }
}