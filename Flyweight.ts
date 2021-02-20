interface Animal{
  name: String;
  ageInYears: Number;
  
  getVoice(): String;
};

class Dog implements Animal{
  breed: String;
  
  constructor(name: String, breed: String, ageInYears: Number){
    this.name = name;
    this.breed = breed;
    this.ageInYears = ageInYears;
  }
  
  getVoice(){
    return "Woof!";
  }
};

class DogFactory{
  dogs: Dog[] = [];
  
  addDog(name: String, breed: String, ageInYears: Number){
    let findDog = this.dogs.find(dog => dog.name == name && dog.breed == breed);
    
    if(this.findDog){
      return this.findDog;
    }
    
    else{
      let newDog = new Dog(name, breed, ageInYears);
      this.dogs.push(newDog);
      return newDog;
    }
  }
};

let factory = new DogFactory();

factory.addDog('Django', 'Huskie', 6);
factory.addDog('Artem', 'Beagle', 2);
factory.addDog('Django', 'Huskie', 3);

console.log(factory.dogs);
