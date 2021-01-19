import axios from 'axios';

const API_URL = "http://localhost:4000/v1"

export const getLocations = async (query) => {
  if (query.length < 2) throw new Error('NOT_LONG_ENOUGH');

  try {
    const results = await axios.get(`${API_URL}/locations?q=${query}`);
    return results.data;
  } catch (e) {
    throw new Error('API_ERROR');
  }

}