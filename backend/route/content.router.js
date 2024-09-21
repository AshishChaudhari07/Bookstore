import express from 'express'
import authContent from '../controller/content.controller.js';

export const router = express.Router();

router.post("/content",authContent)

