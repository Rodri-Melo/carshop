import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarsServices from '../Services/Cars';

class CarsController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarsServices;

  constructor(req: Request, res:Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarsServices();
  }
  public async create() {
    const cars: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const newCar = await this.service.create(cars);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }
  public async getAll() {
    const cars = await this.service.getAll();
    return this.res.status(200).json(cars);
  }
  
  public async getByValue() {
    const { id } = this.req.params;
  
    if (typeof id !== 'string' || !/^[0-9a-fA-F]{24}$/.test(id)) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  
    const getByValue = await this.service.getByValue(id);
  
    if (!getByValue) {
      return this.res.status(404).json({ message: 'Car not found' });
    }
  
    return this.res.status(200).json(getByValue);
  }
}

export default CarsController;