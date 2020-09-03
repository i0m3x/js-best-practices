
var vendingMachine = require('./vendingMachine')

module.exports = {
    canAfford: function(amount){
        if(!this.isValidAmount(amount)){
          errorMessage = "Invalid Input";
        }
        if(errorMessage){
          throw new Error(errorMessage);
        }
        return amount <= balance;
      },
    
    decreaseBalance: function(amount){
        // This method decreases the balance of the vending machine. If the balance amount is not 
        // enough to cover the purchase, the method throws an error. 
        var errorMessage;
        if(!this.canAfford(amount)){
            errorMessage = 'Insufficient balance';
        }
        if(errorMessage){
            throw new Error(errorMessage);
        }
        balance -= amount;
      },
    
    //   getAmount: function(coinType) {
    //     // COINS:
    //     // [p]enny
    //     // [n]ickel
    //     // [d]ime
    //     // [q]uarter
    //     switch(coinType){
    //       case 'p': return 1;
    //       case 'n': return 5;
    //       case 'd': return 10;
    //       case 'q': return 25;
    //       default: throw new Error('Unrecognized coin ' + coinType);
    //     }
    //   },
      increaseBalance: function(amount){
        balance += amount;
      },
    
      getBalance: function(){ 
        return balance;
      },
};

// ## Separation of Concerns 1 (Exercise 2 of 8)



//   ✓ should have a function called increaseBalance()
//   ✓ should have a function called getBalance()
//   1) should have a function called canAfford()
//   ✓ should have a function called decreaseBalance()
//   2) should not have a function called getAmount()
//   ✓ should not have a function called insertCoin()
//   ✓ should not have a function called releaseChange()
//   ✓ should not have a function called getProducts()
//   ✓ should not have a function called getProduct()
//   ✓ should not have a function called isValidAmount()

//   8 passing (6ms)
//   2 failing

//   1)  should have a function called canAfford():

//       AssertionError: expected 'undefined' to equal 'function'
//       + expected - actual

//       -undefined
//       +function
      
//       at Context.<anonymous> (/Users/8tutor/.nvm/versions/node/v12.18.3/lib/node_modules/js-best-practices/exercises/decompose_balancemanager/exercise.js:19:51)
//       at processImmediate (internal/timers.js:456:21)

//   2)  should not have a function called getAmount():

//       AssertionError: expected 'function' to not equal 'function'
//       + expected - actual