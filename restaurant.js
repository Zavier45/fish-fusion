const { chefStandard } = require("./fishMonger.js");

const fishMenu = (chefBudget) => {
  let fishFood = ``;
  fishFood += `<h1>Menu</h1>
  <article class="menu">\n`;
  for (const menu of chefStandard(chefBudget)) {
    fishFood += `
    <h2>${menu.species}</h2>\n
    <section class="menu__item">${menu.species} Soup</section>
    <section class="menu__item">${menu.species} Sandwich</section>
    <section class="menu__item">Grilled ${menu.species}</section>\n`;
  }
  fishFood += `\n</article>`;
  return fishFood;
};

module.exports = { fishMenu };
