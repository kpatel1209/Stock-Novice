"use strict";
const log = global.console.log;

module.exports = {

  // inclusive min <= random <= inclusive max
  getRandom: (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random.toString();
  },

  parseSequelize: (sqlResults, key = [""], val = [0]) => {
    const queryData = [];
    sqlResults.forEach(element => {
      if (key[0].length > 0) {
        key.forEach((value, index) => {
          switch (key) {
          case "cash":
            element.dataValues[value] = element.dataValues.shares * element.dataValues.price;
            break;
          default:
            element.dataValues[value] = val[index];
          }
        });
      }
      queryData.push(element.dataValues);
    });
    return queryData;
  },

  negateSellShares: (shares, buy_sell) => {
    if (buy_sell == "sell") {
      shares = shares * -1;
    }
    log(`logic shares: ${typeof(shares)} ${shares}`);
    return shares;
  }

};