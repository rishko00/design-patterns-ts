interface Builder {
  setSeats();
  setEngine();
  setDoors();
  setGearbox();
}

class Car {
  seats: number;
  engine: string;
  doors: number;
  gearbox: string;
}

class CarBuilder implements Builder {
  private car: Car;
  
  reset() {
    this.car = new Car();
  }
  
  setSeats(seats) {
    this.car.seats = seats;
  }
  
  setEngine(engine) {
    this.car.engine = engine;
  }
  
  setDoors(doors) {
    this.car.doors = doors;
  }
  
  setGearbox(gearbox) {
    this.car.gearbox = gearbox;
  }
  
  getCar() {
    return this.car;
  }
}


class CarDirector {
  constructSportCar(builder: Builder) {
    builder.reset();
    builder.setSeats(2);
    builder.setDoors(4);
    builder.setEngine('Sport engine');
    builder.setGearbox('Manual gearbox');
  }
}

const director = new CarDirector();
const builder = new CarBuilder();
director.constructSportCar(builder);
const car = builder.getCar();
console.log(car)
