const vendingMachine = require('./vendingMachine')

module.exports = {
  
    getAmount: function(coinType) {
        // COINS:
        // [p]enny
        // [n]ickel
        // [d]ime
        // [q]uarter
        // switch(coinType){
        //   case 'p': return 1;
        //   case 'n': return 5;
        //   case 'd': return 10;
        //   case 'q': return 25;
        //   default: throw new Error('Unrecognized coin ' + coinType);
        // }

        //SOLUTION: https://github.com/prochafilho/js-best-practices/blob/master/changeHandler.js

        if(coinType =='p') {
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