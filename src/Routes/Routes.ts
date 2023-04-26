import { Router } from 'express';
import Cars from '../Controllers/Cars';

const routes = Router();

routes.post(
  '/cars',
  (req, res, next) => new Cars(req, res, next).create(),
);

export default routes;