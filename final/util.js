let session = require('./session');

// beer list -> get from user id

const addToBeerList = function (username, beerID, beerItems) {
  let currBeerList = session.users[username];
  const price = getTotalPrice(beerItems);
  currBeerList = Object.assign(
    { [beerID]: { beerItems: beerItems, id: beerID, price: price } },
    currBeerList
  );
  session.users[username] = currBeerList;
  return currBeerList;
};

const getTotalPrice = function (beerItems) {
 return beerItems.reduce((total, item) => total + item.quantity * 3.99, 0).toFixed(2);
};
const util = {
  addToBeerList,
};

module.exports = util;