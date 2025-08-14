import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    email: String,
    noteId: String,
    noteName: String,
    gpayNumber: String,
    status: {
        type: String,
        enum: ["pending", "confirmed", "rejected"],
        default: "pending"
    },
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);
