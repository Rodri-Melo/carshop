import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorCycleODM from '../Models/MotorcycleODM';

class MotorcycleSservices {
  public async create(cars: IMotorcycle): Promise<Motorcycle | null> {
    const carODM = new MotorCycleODM();
    const newMotorcycle = await carODM.create(cars);
    return newMotorcycle ? new Motorcycle(newMotorcycle) : null;
  }

  public async getAll() {
    const motorcycleODM = new MotorCycleODM();
    const getAll = await motorcycleODM.find();
  
    return getAll.map((moto) => new Motorcycle(moto));
  }

  public async getByValue(value: string) {
    const motorcycleODM = new MotorCycleODM();
    const getByValue = await motorcycleODM.findByValue(value);

    if (getByValue) { return new Motorcycle(getByValue); } 
  }

  public async updateValue(id: string, data: IMotorcycle) {
    const motorcycleODM = new MotorCycleODM();
    const getByValue = await motorcycleODM.update(id, data);
    // return getByValue;
    if (getByValue) { return new Motorcycle(getByValue); }
  }
}

export default MotorcycleSservices;