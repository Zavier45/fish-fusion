const { boatInventory } = require("./fishingBoat.js");

const mongerInventory = () => {
  const mongerWorthy = [];
  for (const fish of boatInventory()) {
    if (fish.price <= 7.5 && fish.amount >= 10) {
      mongerWorthy.push(fish);
    }
  }
  return mongerWorthy;
};

const chefStandard = (chefBudget) => {
  let chefWorthy = [];
  for (const fish of mongerInventory()) {
    if (fish.price <= chefBudget) {
      chefWorthy.push(fish);
      fish.amount /= 2;
      fish.amount = Math.floor(fish.amount);
    }
  }
  return chefWorthy;
};

module.exports = { chefStandard };
