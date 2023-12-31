import { Schema } from 'mongoose';
import IMotorcycles from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

class MotorcycleODM extends AbstractODM<IMotorcycles> {
  constructor() {
    const schemaMotorcycle = new Schema<IMotorcycles>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, default: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true }, 
      engineCapacity: { type: Number, required: true },
    });
    super(schemaMotorcycle, 'Motorcycle');
  }
}

export default MotorcycleODM;