import { Router } from 'express';
import applyGetRoute from './get';

const router = Router();

applyGetRoute(router);

export default router;
