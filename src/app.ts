import express from 'express';
import Cars from './Routes/Cars';
import Motorcycles from './Routes/Motorcycles';

const app = express();
app.use(express.json());

app.use(Cars);
app.use(Motorcycles);

export default app;
