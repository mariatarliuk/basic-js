const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
   if(Array.isArray(members)) {
      let arrName =[];
      let dreamTeam = [];
      members.map(item => {
         if(typeof item == "string") arrName.push(item.toUpperCase().trim())
     });
     arrName.map(item=> {
        dreamTeam.push(item[0])
    });
      let str = dreamTeam.sort().join("")
    return str.toUpperCase()
   }else {
      return false

   };
};
