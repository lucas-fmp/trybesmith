import { Router } from 'express';

import newUser from '../controllers/users.controller';

const router = Router();

router.post('/', newUser);

export default router;