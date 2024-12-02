import express from 'express'
import { getBook, getSingleBook, searchBook } from '../controller/book.controller.js'

const router = express.Router();

router.get('/',getBook);
router.get('/:id',getSingleBook)
router.get('/:query',searchBook)

export default router;