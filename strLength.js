function strLength(string) {
    if (string.length === 0) {
      
    }
    
    if (string.length > 10) {
   
    }
    
    return string.length;
  }
// =============================function reverse======================
function reverseString(string){
    return string.split('').reverse().join('');
}

// =============================class calculator======================
class Calculator {
    constructor() {
        this.result = 0;
      }
    
      add(a, b) {
        return a + b;
      }
    
      subtract(a, b) {
        return a - b;
      }
    
      multiply(a, b) {
        return a * b;
      }
    
      divide(a, b) {
        return a / b;
      }
    }

    function capitalize(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
}





    module.exports = { strLength, reverseString, Calculator ,capitalize};