import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarsODM from '../Models/CarsODM';

class CarsServices {
  public async create(cars: ICar): Promise<Car | null> {
    const carODM = new CarsODM();
    const newCar = await carODM.create(cars);
    return newCar ? new Car(newCar) : null;
  }
}

export default CarsServices;