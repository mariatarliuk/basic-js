const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
   calculateDepth(arr, rezultArr=[], depth=1) {
      rezultArr.push(depth)
      arr.forEach(array=>{
         if(Array.isArray(array)) {
            this.calculateDepth(array, rezultArr, depth+1)
         }
      })
      return Math.max(...rezultArr)
    }
}
