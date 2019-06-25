import {Router, Request, Response} from 'express';
import { indexController } from  '../controllers/indexController'

const router: Router = Router();

import {booksController} from '../controllers/booksController';

router.get('/', booksController.index)
router.get('/add', booksController.renderFormBook)
router.post('/add', booksController.saveBook)

export default router;