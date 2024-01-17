let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js');

// Write your code below:
async function serveDinnerAgain(){
  const foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]);
  let vegetable = foodArray[0];
  let starch = foodArray[1];
  let protein = foodArray[2];
  let side = foodArray[3];
  console.log(`Dinner is served. We're having ${vegetable}, ${starch}, ${protein}, and ${side}.`)
}
serveDinnerAgain();