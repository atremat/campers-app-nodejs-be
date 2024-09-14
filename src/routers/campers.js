import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getCampersController } from '../controllers/campers.js';

const router = Router();

router.get('/', ctrlWrapper(getCampersController));

export default router;
