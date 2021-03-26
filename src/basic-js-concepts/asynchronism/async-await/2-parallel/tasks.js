const util = require('util'); // node module
const sleep = util.promisify(setTimeout); // converts setTimeout in a promise

module.exports = {
  
  async taskOne() {
    try {
      // throw new Error('There has been an Error')
      sleep(4000);
      return 'ONE VALUE';
    }
    catch(e){
      console.log(e)
    }
  },

  async taskTwo() {
    try {
      sleep(2000);
      return 'TWO VALUE';
    }
    catch(e){
      console.log(e)
    }
  }
}

// With this implementation, there is ERROR HANDLERING, so it shows catch message and continues execution! :D
