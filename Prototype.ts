interface ICar{
  clone();
}

class Car implements ICar{
  model: String;
  owner: String;
  
  constructor(model: String, owner: String){
    this.owner = owner;
    this.model = model;
  }
  
  clone(){
    return Object.create(this, {});
  }
}

let car1 = new Car('Audi', 'Vasyl');
let car2 = car1.clone();
car2.owner = 'John';

console.log(car1.owner);
console.log(car2.owner);

