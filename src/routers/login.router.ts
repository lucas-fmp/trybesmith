import { Router } from 'express';

import * as usersController from '../controllers/users.controller';

const router = Router();

router.post('/', usersController.login);

export default router;