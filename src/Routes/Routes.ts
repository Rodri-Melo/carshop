import { Router } from 'express';
import Cars from '../Controllers/Cars';

const routes = Router();

routes.post(
  '/cars',
  (req, res, next) => new Cars(req, res, next).create(),
);

routes.get(
  '/cars',
  (req, res, next) => new Cars(req, res, next).getAll(),
);

routes.get(
  '/cars/:id',
  (req, res, next) => new Cars(req, res, next).getByValue(),
);

routes.put(
  '/cars/:id',
  (req, res, next) => new Cars(req, res, next).updateValue(),
);

export default routes;