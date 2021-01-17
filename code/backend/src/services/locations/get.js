import { dbAll } from '../../database/db';

const get = async (query) => {
  // SQL and params
  const sql = "SELECT name, latitude, longitude FROM GB WHERE name LIKE ?";
  const params = [`${query}%`];

  try {
    const res = await dbAll(sql, params);
    return res;
  } catch (error) {
    throw new Error(
      JSON.stringify({
        message: 'There was an issue getting locations.',
      })
    );
  }
}

export default get;