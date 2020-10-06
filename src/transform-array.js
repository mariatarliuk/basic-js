const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
   if(!Array.isArray(arr)) throw new Error('Error')
   let newArr = arr.concat();
   let result =[];
      for(let i=0; i<newArr.length;i++) {
         if(newArr[i]==='--discard-next') {
            if(newArr.indexOf(newArr[i])!==newArr.length-1) {
               newArr[i]=undefined;
               newArr[i+1]=undefined;
            }else {
               newArr[i] = undefined;
            }
         }

         if(newArr[i]==='--double-next') {
            if(newArr.indexOf(newArr[i])!==newArr.length-1) {
               newArr[i]=newArr[i+1];
            }else {
               newArr[i] = undefined;
            }
         }

         if(newArr[i]==='--discard-prev') {
            if(newArr.indexOf(newArr[i])!==newArr.length-1) {
               newArr[i]=undefined;
               newArr[i-1]=undefined;
            }else {
               newArr[i] = undefined;
            }
         }

         if(newArr[i]==='--double-prev') {
            if(newArr.indexOf(newArr[i])!==newArr.length-1) {
               newArr[i]=newArr[i-1];
            }else {
               newArr[i] = undefined;
            }
         }


      }
      newArr.map(item=>{
         if(typeof item !=='undefined') result.push(item)
      })
   return result
};
