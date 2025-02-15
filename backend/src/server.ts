import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import productRoutes from './routes/productRoutes';

// Carregar variáveis de ambiente
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log('MongoDB conectado!'))
  .catch((err) => console.error('Erro ao conectar:', err));

app.get('/', (req: Request, res: Response) => {
  res.send('API funcionando!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
