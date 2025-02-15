import express from 'express';
import Product from '../models/Product'; // Importando o modelo de Produto

const router = express.Router();

// Exemplo de rota para produtos fictícios (sem salvar no banco)
router.get('/', async (req, res) => {
  const products = [
    {
      name: 'Produto 1',
      description: 'Descrição do Produto 1',
      price: 100.0,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Produto 2',
      description: 'Descrição do Produto 2',
      price: 200.0,
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  try {
    // Criar produtos no banco de dados
    await Product.insertMany(products);
    const savedProducts = await Product.find(); // Buscar os produtos no banco
    res.json(savedProducts); // Retornar os produtos salvos
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao salvar os produtos' });
  }
});

export default router;
