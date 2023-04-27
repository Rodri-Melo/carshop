import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarsODM from '../Models/CarsODM';

class CarsServices {
  public async create(cars: ICar): Promise<Car | null> {
    const carODM = new CarsODM();
    const newCar = await carODM.create(cars);
    return newCar ? new Car(newCar) : null;
  }

  public async getAll() {
    const carODM = new CarsODM();
    const getAll = await carODM.find();
  
    return getAll.map((car) => new Car(car));
  }

  public async getByValue(value: string) {
    const carODM = new CarsODM();
    const getByValue = await carODM.findByValue(value);

    if (getByValue) { return new Car(getByValue); } 
  }
}

export default CarsServices;