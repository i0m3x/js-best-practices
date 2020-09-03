const vendingMachine = require('./vendingMachine')

module.exports = {
  
    getAmount: function(coinType) {
  
        if(coinType == 'p') {
          return 1
        } else if (coinType == 'n') {
          return 5
        } else if (coinType == 'd') {
          return 10
        } else if (coinType == 'q') {
          return 25
        } else {
          throw new Error('Unrecognized coin ' + coinType);
        }
      },
};

//Mike had me erase the comments, which made it work

// strict equality - definitely this

// double equals = type