import axios from 'axios';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

export const fetchCocktails = async (
  searchTerm: string, 
  page: number = 1, 
  limit: number = 10, 
  ingredients: string[] = []
) => {
  try {
    const offset = (page - 1) * limit;
    const url = `${BASE_URL}/filter.php?i=${ingredients.join(',')}&s=${searchTerm}`;
    
    const response = await axios.get(url);
    console.log('API Response:', response.data);
    
    if (response.data && response.data.drinks) {
      const paginatedItems = response.data.drinks.slice(offset, offset + limit);
      return paginatedItems;
    } else {
      console.error('No drinks found in the API response');
      return [];
    }
  } catch (error) {
    console.error('Error Fetching Data From the Cocktail DB', error);
    throw error;
  }
};