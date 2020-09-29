const CustomError = require("../extensions/custom-error");

module.exports = function countCats() {
  let array = [...arguments];
  let str = '^^';
  count = 0;
  for(let i=0; i<array.length; i++) {
     for(let j=0;j<array[i].length; j++) {
        for(let n=0; n<array[i][j].length;n++) {
           if(str==array[i][j][n]) count++
        }
     }
  }
  return count
};
