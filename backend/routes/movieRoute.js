import express from 'express'
import { addNewMovie, getMovie } from '../controller/movie-controller.js';

const router = express.Router();

router.route('/new').post(addNewMovie)
router.route('/all').get(getMovie)

export default router