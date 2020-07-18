import express from 'express';
import { PORT } from './config/constants';
import { helloRouter } from './routes';

const app = express();
app.use(express.json());
app.use('/', helloRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
