import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorCycleODM from '../Models/MotorcycleODM';

class MotorcycleSservices {
  public async create(cars: IMotorcycle): Promise<Motorcycle | null> {
    const carODM = new MotorCycleODM();
    const newMotorcycle = await carODM.create(cars);
    return newMotorcycle ? new Motorcycle(newMotorcycle) : null;
  }
}

export default MotorcycleSservices;