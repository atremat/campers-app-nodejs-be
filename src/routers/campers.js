import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

// import { authenticate } from '../middlewares/authenticate.js';
import { getCampersController } from '../controllers/campers.js';

const router = Router();

// router.use(authenticate);

router.get('/', ctrlWrapper(getCampersController));

export default router;
