import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

const cb = 'CBR 1000RR';

export const motorcycleInput: IMotorcycle = {
  model: cb,
  year: 2021,
  color: 'Red',
  status: true,
  buyValue: 15000,
  category: 'Sport',
  engineCapacity: 1000,
};

export const motorcycleOutput: IMotorcycle = {
  id: '6348513f34c397abcad040b2',
  model: cb,
  year: 2021,
  color: 'Red',
  status: true,
  buyValue: 15000,
  category: 'Sport',
  engineCapacity: 1000,
};

export const motorcycleOutput2: IMotorcycle = {
  id: '6348513f34c397cbaad040b2',
  model: 'YZF-R6',
  year: 2020,
  color: 'Blue',
  status: true,
  buyValue: 12000,
  category: 'Sport',
  engineCapacity: 600,
};

export const allMotorcycles: IMotorcycle[] = [
  {
    id: '6348513f34c397abcad040b2',
    model: 'CBR 1000RR',
    year: 2021,
    color: 'Red',
    status: true,
    buyValue: 15000,
    category: 'Sport',
    engineCapacity: 1000,
  },
  {
    id: '6348513f34c397cbaad040b2',
    model: 'YZF-R6',
    year: 2020,
    color: 'Blue',
    status: true,
    buyValue: 12000,
    category: 'Sport',
    engineCapacity: 600,
  },
];
