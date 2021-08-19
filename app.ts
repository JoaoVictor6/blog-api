import * as dotenv from 'dotenv';
import 'reflect-metadata';
import './src/database/connect';

import express from 'express';
import routes from './routes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log('🛰️  > app listen in http://localhost:3000');
});
