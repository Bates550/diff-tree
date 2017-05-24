const util = require('util');

function print(msg, printable) {
  console.log(`${msg}\n`, util.inspect(printable, false, null));
}

module.exports = print;
