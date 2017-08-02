import express, { Router } from 'express';
import { index } from './controllers/words';

const router = Router();

router.route('/words.json').get(index);

export default router;
