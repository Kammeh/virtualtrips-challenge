import { Router } from 'express';
import HttpException from '../../exceptions/HttpException';

import get from '../../../services/locations/get';

const applyRoute = (router) => {
  router.get('', async (req, res, next) => {
    try {
      // Get query data
      const { q } = req.query;
      
      // Validation
      if (!q) {
        throw new Error(JSON.stringify({
          message: 'Missing required query parameter: q'
        }));
      } else if (q.length < 2) {
        throw new Error(JSON.stringify({
          message: 'q must be 2 or more characters'
        }));
      }

      // Get Locations from query
      const locations = await get(q);
      res.json(locations);
    } catch (error) {
      const err = JSON.parse(error.message);
      console.error(`/v1/routes/locations/get: Error: ${err.message}`);

      next(new HttpException(err.status || 400, err.message));
    }
  });
};

export default applyRoute;
