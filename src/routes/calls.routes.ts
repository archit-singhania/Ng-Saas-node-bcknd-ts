import { Router } from 'express';
import * as controller from '../controllers/calls.controller';
import { validatePagination } from '../validations/calls.validation';

const router = Router();

router.get('/summary', controller.summary);
router.get('/recent',  controller.recent);
router.get('/',        validatePagination, controller.list);

export default router;
