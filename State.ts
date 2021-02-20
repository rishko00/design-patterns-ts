abstract class State{
  protected phone: Phone;
  
  constructor(phone){
    this.phone = phone;
  }
  
  abstract clickLock();
  abstract call();
}

class LockedState extends State{
  clickLock(){
    this.phone.changeState(new UnlockedState(phone));
  }
  
  call(){
    console.log('Your phone is locked, you cant make a call!')
  }
}

class UnlockedState extends State{
  clickLock(){
    this.phone.changeState(new LockedState(phone));
  }
  
  call(){
    console.log('Calling...')
  }
}

class Phone{
  model: String;
  number: String;
  state: State;
  
  constructor(model: String, number: String){
    this.model = model;
    this.number = number;
    this.state = new LockedState(this);
  }
  
  changeState(state: State){
    this.state = state;
  }
  
  clickLock(){
    this.state.clickLock();
  }
  
  call(){
    this.state.call();
  }
}

const phone = new Phone('IPhone 11', '33-56-13');
phone.call();
phone.clickLock();
phone.call();

