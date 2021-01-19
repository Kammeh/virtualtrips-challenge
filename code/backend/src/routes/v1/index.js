import { Router } from 'express';
import locations from './locations';

const router = Router({ mergeParams: true });

router.use('/locations', locations);
router.use('/', (req, res) => res.status(404).json({ message: `This endpoint doesn't exist.`, details: null }));

export default router;
