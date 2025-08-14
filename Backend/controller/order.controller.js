import OrderModel from "../model/order.model.js";

export const createOrder = async (req, res) => {
    try {
        const { email, noteId, noteName, gpayNumber, status } = req.body;

        const newOrder = new OrderModel({
            email,
            noteId,
            noteName,
            gpayNumber,
            status,
        });

        await newOrder.save();
        res.status(200).json({ message: "Order created successfully." });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to create order" });
    }
};


export const getAllOrders = async (req, res) => {
  try {
    const orders = await OrderModel.find().sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const order = await OrderModel.findByIdAndUpdate(id, { status }, { new: true });

    if (!order) return res.status(404).json({ message: "Order not found" });

    // Optionally send thank-you email
    if (status === "confirmed") {
      // Send email logic here...
    }

    res.status(200).json({ message: `Order marked as ${status}`, order });
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ message: "Failed to update order" });
  }
};


// GET /order/user/:email
export const getUserOrders = async (req, res) => {
  try {
    const email = req.params.email;
    const orders = await OrderModel.find({ email });
    res.status(200).json(orders);
  } catch (error) {
    console.error("Failed to fetch orders", error);
    res.status(500).json({ message: "Error fetching user orders" });
  }
};