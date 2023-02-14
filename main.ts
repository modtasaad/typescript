

class Account {
        accNo: number;
        balance: number;
    
        constructor(accNo: number, balance: number) {
        this.accNo = accNo;
        this.balance = balance;
        }
    
        debitAmount(amount: number) {
        this.balance -= amount;
        }
    
        creditAmount(amount: number){
        this.balance += amount;
        }
    
        getBalance(){
        return this.balance;
        }
    }
    
    interface IAccount {
        dateOfOpening: Date;
        addCustomer(): void;
        removeCustomer(): void;
    }
    
    class CurrentAccount extends Account implements IAccount {
        interestRate: number;
        dateOfOpening: Date;
        constructor(accNo: number, balance: number, interestRate: number) {
        super(accNo, balance);
        this.interestRate = interestRate;
        }
    
        addCustomer() {
        }
    
        removeCustomer(){
        }
    }
        class SavingAccount extends Account implements IAccount {
        minBalance: number;
        dateOfOpening: Date;
        
        constructor(accNo: number, balance: number, minBalance: number) {
            super(accNo, balance);
            this.minBalance = minBalance;
        }
        
        addCustomer(){
    
        }
        
        removeCustomer(){
    
        }
        
    }