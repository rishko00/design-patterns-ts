class Calculator{
  num1: Number;
  num2: Number;
  
  constructor(num1: Number, num2: Number){
    this.num1 = num1;
    this.num2 = num2;
  }
  
  add(){
    return this.num1 + this.num2;
  }
  
  subtract(){
    return this.num1 - this.num2;
  }
}

function calcDecorator(calc: Calculator): Calculator{
  calc.pow = () => {
    return Math.pow(this.num1, this.num2); 
  }
  
  return calc;
}

const calc = calcDecorator(new Calculator(4, 2));
console.log(calc.pow());

