const CustomError = require("../extensions/custom-error");

const chainMaker = {
   'value': [],
  getLength() {
    return this.value.length;
  },
  addLink(value) {
     if(arguments.length===0 || value==='') {
        this.value=='' ? this.value.push(`( )`) : this.value.push(`~~( )`);
     }else {
        this.value=='' ? this.value.push(`( ${value} )`) : this.value.push(`~~( ${value} )`);
    }
     return this
  },
  removeLink(position) {
     if(isNaN(position) || !Number.isInteger(position) || position> this.value.length) {
        this.value = [];
        throw new Error('Error')
     };
     this.value.splice(position-1, 1);
     if(position==1) {
        let arr = this.value[0].split('')
        arr.splice(0,2)
        this.value[0] = arr.join('')
     }
     return this
  },
  reverseChain() {
     if(this.value.length==0 || this.value.length==1) {
        return this
     }else {
        this.value.reverse()
        let first = this.value[0].split('')
        first.splice(0,2);
        first.forEach(item=>item.replace('~'));
        this.value[0] = first.join('');
        let last = this.value[this.value.length-1].split('')
        last.unshift('~~')
        this.value[this.value.length-1] = last.join('')
       return this
     }

  },
  finishChain() {
    let chain = this.value.join('');
    this.value = []
    return chain
  }
};

module.exports = chainMaker;
