const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
   let repeatTimes = options.repeatTimes || 1
   let addition = options.addition;
   let separator = options.separator || '+';
   let additionSeparator = options.additionSeparator || '|';
   let additionRepeatTimes = options.additionRepeatTimes || 1;
   if(addition || addition===false || addition===null) {
      let addit = (addition+additionSeparator).repeat(additionRepeatTimes)
      str = str+addit;
      str = str.split('').reverse()
      str.splice(0,additionSeparator.length)
      str = str.reverse().join('')
   }
   let result = (str+separator).repeat(repeatTimes)
   result = result.split('').reverse();
   result.splice(0, separator.length);
  return result.reverse().join('')
};
