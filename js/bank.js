class Bank{
    _accounts=[];
    static _nextNumber = 1;
    
    addAccount(){
        this._accounts.push(new Account(Bank._nextNumber));
        return Bank._nextNumber++;
    }
    addSavingsAccount(interest){
        this._accounts.push(new SavingsAccount(Bank._nextNumber,interest));
        return Bank._nextNumber++;
    }
    addCheckingAccount(overdraft){
        this._accounts.push(new CheckingAccount(Bank._nextNumber,overdraft));
        return Bank._nextNumber++;
    }
    closeAccount(number){
        this._accounts.splice(this._accounts.findIndex((e)=>e.getNumber()===number),1);
    }
    accountReport(){
       return this._accounts.reduce((acc,cur)=>{
            return acc+"\n"+cur;
        });
    }
    endOfMonth(){
        return this._accounts.reduce((acc,cur)=>{
            return acc +"\n"+cur.endOfMonth();
        },"").trim();
    }
}