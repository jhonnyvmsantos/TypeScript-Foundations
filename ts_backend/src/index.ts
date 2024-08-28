import express, { Request, Response } from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.use('/', routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});