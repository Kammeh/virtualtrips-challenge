import { Router } from 'express';
import locations from './locations';

const router = Router({ mergeParams: true });

router.use('/locations', locations);
router.use('/', (req, res) => res.json({ message: 'Hello world!' }));

export default router;
