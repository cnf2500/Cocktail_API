import express from 'express';
import { fetchCocktails } from './cocktailService';

export const app = express();
const PORT = process.env.PORT || 3000;

app.get('/cocktails', async (req, res) => {
  const { searchTerm = '', page = '1', limit = '10', ingredients = '' } = req.query;
  const ingredientsArray = ingredients ? (ingredients as string).split(',') : [];
  try {
    const cocktails = await fetchCocktails(searchTerm as string, parseInt(page as string), parseInt(limit as string), ingredientsArray);
    res.json(cocktails);
  } catch (error) {
    res.status(500).send('Error Fetching Cocktails');
  }
});

app.listen(PORT, () => {
  console.log(`Server is Running on Port: ${PORT}`);
});