const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
   constructor (boolean=true) {
      this.direction = boolean;
   }
   encrypt(str,key) {
      if(str===undefined || key===undefined) {
         throw new Error('Not enough arguments!') 
      }
      let keyStr = '';
      let result = '';
      let alphabet = 'abcdefghijklmnopqrstuvwxyz';
      for(let i=0; i<Math.ceil(str.length/key.length);i++) {
         if(str[i]=='') keyStr+=str[i]
         for(let j=0;j<key.length;j++) {
            keyStr+=key[j] 
         }
      }
      for(let i=0; i<str.length;i++) {
         if(alphabet.includes(str[i].toLowerCase())) {
           let num = alphabet.indexOf(str[i].toLowerCase())+alphabet.indexOf(keyStr[i].toLowerCase())
           if(num>=alphabet.length) num = Math.abs(num-alphabet.length)
           result+=alphabet[num]
      }else {
            result+=str[i]
          keyStr= keyStr.split('');
          keyStr.splice(i,0,' ')
          keyStr = keyStr.join('')
      }
      }
      if(!this.direction) return result.split('').reverse().join('').toUpperCase()
         return result.toUpperCase()

   }

   decrypt(str, key) {
      if(str===undefined || key===undefined) {
         throw new Error('Not enough arguments!') 
      }

      let keyStr = '';
      let result = '';
      let alphabet = 'abcdefghijklmnopqrstuvwxyz';
      for(let i=0; i<Math.ceil(str.length/key.length);i++) {
         if(str[i]=='') keyStr+=str[i]
         for(let j=0;j<key.length;j++) {
            keyStr+=key[j] 
         }
      }
      for(let i=0; i<str.length;i++) {
         if(alphabet.includes(str[i].toLowerCase())) {
           let num = alphabet.indexOf(str[i].toLowerCase())-alphabet.indexOf(keyStr[i].toLowerCase())
           if(num<0) num +=alphabet.length
           result+=alphabet[num]
      }else {
            result+=str[i]
          keyStr= keyStr.split('');
          keyStr.splice(i,0,' ')
          keyStr = keyStr.join('')
      }
      }
      if(!this.direction) return result.split('').reverse().join('').toUpperCase()
         return result.toUpperCase()

   }

}

module.exports = VigenereCipheringMachine;
