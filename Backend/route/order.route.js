import express from "express";
import {
    createOrder,
    getAllOrders,
    getUserOrders,
    updateOrderStatus,
} from "../controller/order.controller.js";

const router = express.Router();

router.post("/create", createOrder);
router.get("/all", getAllOrders);
router.patch("/status/:id", updateOrderStatus);
router.get("/user/:email", getUserOrders);

export default router;
