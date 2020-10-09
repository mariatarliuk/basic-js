const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
   calculateDepth(arr, level=1) {
     if(Array.isArray(arr)) {
       return (level > 0 ? 1 : 0) + arr.map(array =>this.calculateDepth(array, level+1)).reduce((sum, ac) => sum+ac,0)
    }
    return 0
   }
};
