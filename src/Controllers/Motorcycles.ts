import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorService from '../Services/Motorcycles';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorService;

  constructor(req: Request, res:Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorService();
  }

  public async createMotorcycle() {
    const motorcycles: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };
    try {
      const newMotorcycles = await this.service.create(motorcycles);
      return this.res.status(201).json(newMotorcycles);
    } catch (error) {
      this.next(error);
    }
  }
  public async getAll() {
    const motorcycles = await this.service.getAll();
    return this.res.status(200).json(motorcycles);
  }
  
  public async getByValue() {
    const { id } = this.req.params;
  
    if (typeof id !== 'string' || !/^[0-9a-fA-F]{24}$/.test(id)) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  
    const getByValue = await this.service.getByValue(id);
  
    if (!getByValue) {
      return this.res.status(404).json({ message: 'Motorcycle not found' });
    }
  
    return this.res.status(200).json(getByValue);
  }
  
  public async updateValue() {
    const motorcycle: IMotorcycle = {
      ...this.req.body,
    };
    const { id } = this.req.params;

    if (typeof id !== 'string' || !/^[0-9a-fA-F]{24}$/.test(id)) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }

    try {
      const result = await this.service.updateValue(id, motorcycle);
      
      if (!result) {
        return this.res.status(404).json({ message: 'Motorcycle not found' });
      }

      return this.res.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }
}

export default MotorcycleController;