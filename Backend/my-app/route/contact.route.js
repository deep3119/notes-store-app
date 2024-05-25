import express from 'express';
import { contactUs } from '../controller/contact.controller.js'


const router = express.Router()

router.get("/", (req, res) => {
    res.send('Connected to route')
  });

router.post("/", contactUs);

export default router;