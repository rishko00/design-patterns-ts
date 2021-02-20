class Calculator{
  num1: Number;
  num2: Number;
  
  constructor(num1, num2){
    this.num1 = num1;
    this.num2 = num2;
  }
  
  plus(){
    return this.num1 + this.num2;
  }
  
  minus(){
    return this.num1 - this.num2;
  }
  
  mult(){
    return this.num1 * this.num2;
  }
  
  divide(){
    return this.num1 / this.num2;
  }
}

abstract class Command{
  calculator: Calculator;
  
  constructor(calculator: Calculator){
    this.calculator = calculator;
  }
  
  abstract execute();
}

class CommandHistory{
  commandsExecuted: Command[];
  
  constructor(){
    this.commandsExecuted = [];
  }
  
  push(c: Command){
    this.commandsExecuted.push(c);
  }
}

class PlusCommand extends Command{
  execute(){
    commandHistory.push(this);
    return this.calculator.plus();
  }
}

class MinusCommand extends Command{
  execute(){
    commandHistory.push(this);
    return this.calculator.minus();
  }
}

class MultCommand extends Command{
  execute(){
    commandHistory.push(this);
    return this.calculator.mult();
  }
}

class DivideCommand extends Command{
  execute(){
    commandHistory.push(this);
    return this.calculator.divide();
  }
}

const calculator = new Calculator(2, 4);
const commandHistory = new CommandHistory();
const plusCommand = new PlusCommand(calculator);
const minusCommand = new MinusCommand(calculator);
const multCommand = new MultCommand(calculator);
const divideCommand = new DivideCommand(calculator);
console.log(plusCommand.execute());
console.log(minusCommand.execute());
console.log(multCommand.execute());
console.log(divideCommand.execute());
commandHistory.commandsExecuted.forEach(command => {
  console.log(command.constructor.name)
})

