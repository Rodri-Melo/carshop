import { Router } from 'express';
import Vehicles from '../Controllers/Vehicles';

const router = Router();

router.post(
  '/motorcycles',
  (req, res, next) => new Vehicles(req, res, next).createMotorcycle(),
);

export default router;