
function calculate() {
  let result = 0;
  
  let calculator = {
    add : function(num){
       result += num;
       return this;
    },

    sub: function(num){
      result -= num;
      return this;
    },

    multiply : function(num){
      result *= num;
      return this;
    },

    divide : function(num){
      result /= num;
      return this;
    },
    
    printResult : function(){
      return result
    }
  }
  return calculator

}

const calculator = calculate();
result = calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7
console.log(result)