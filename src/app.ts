import express from 'express';
import routes from './Routes/Routes';
import router from './Routes/Vehicles';

const app = express();
app.use(express.json());

app.use(routes);
app.use(router);

export default app;
