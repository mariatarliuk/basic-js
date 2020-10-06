const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
   let sampleActivityNum = +sampleActivity;
   console.log(sampleActivityNum)
   if(typeof sampleActivity !=="string" || sampleActivity.length==0 || isNaN(sampleActivityNum) || sampleActivityNum > 15 || sampleActivity <= 0 ) {
      return false
   }else {
         return Math.ceil((Math.log(MODERN_ACTIVITY/sampleActivityNum)*HALF_LIFE_PERIOD)/0.693)
   }
};
