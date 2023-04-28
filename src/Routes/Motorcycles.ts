import { Router } from 'express';
import Motorcycles from '../Controllers/Motorcycles';

const router = Router();

router.post(
  '/motorcycles',
  (req, res, next) => new Motorcycles(req, res, next).createMotorcycle(),
);

router.get(
  '/motorcycles',
  (req, res, next) => new Motorcycles(req, res, next).getAll(),
);

router.get(
  '/motorcycles/:id',
  (req, res, next) => new Motorcycles(req, res, next).getByValue(),
);

router.put(
  '/motorcycles/:id',
  (req, res, next) => new Motorcycles(req, res, next).updateValue(),
);

export default router;