const util = require('util'); // node module
const sleep = util.promisify(setTimeout); // converts setTimeout in a promise

module.exports = {
  async taskOne() {
    sleep(4000);
    return 'ONE VALUE';
  },

  async taskTwo() {
    sleep(2000);
    return 'TWO VALUE';
  }
}

