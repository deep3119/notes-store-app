import express from "express";
import { sendPurchaseEmail } from "../controller/mail.controller.js";

const router = express.Router();

router.post("/send-purchase-email", sendPurchaseEmail);

export default router;
