import { Model, Schema, model, models, UpdateQuery } from 'mongoose';
import ICar from '../Interfaces/ICar';

class CarsODM {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, default: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.Car || model('Car', this.schema);
  }

  public async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async find(): Promise<ICar[]> {
    return this.model.find();
  }

  public async findByValue(value: string): Promise<ICar | null> {
    return this.model.findById(value).select('-__v');
  }

  public async updateByValue(id: string, data: Partial<ICar>): Promise<ICar | null> {
    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...data } as UpdateQuery<ICar>,
      { new: true },
    ).select('-__v');
  }
}

export default CarsODM;