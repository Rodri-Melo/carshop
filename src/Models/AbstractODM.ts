import { isValidObjectId, Model, models, Schema, UpdateQuery, model } from 'mongoose';

abstract class AbstractODM<T> {
  private schema: Schema;
  private model: Model<T>;
  protected modelName: string;
 
  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(vehicle: T): Promise<T> {
    return this.model.create({ ...vehicle });
  }

  public async find(): Promise<T[]> {
    return this.model.find();
  }

  public async findByValue(value: string): Promise<T | null> {
    return this.model.findById(value).select('-__v');
  }

  public async update(_id: string, obj: Partial<T>): Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error('Invalid Mongo id');

    return this.model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
  }
}

export default AbstractODM;